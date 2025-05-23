// src/hooks/useCrudApi.ts
import { useState, useEffect } from "react";
import { crudService } from "../api/services/crudService";

type ID = string | number;

type EndpointFunctions = {
  list: string;
  create: string;
  update: (id: ID) => string;
  delete: (id: ID) => string;
};

export function useCrudApi<T extends Record<string, unknown>>(endpoints: EndpointFunctions) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = async (): Promise<void> => {
    setLoading(true);
    try {
      const res = await crudService.list(endpoints.list);
      setData(res.data as T[]);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error");
      }
    } finally {
      setLoading(false);
    }
  };

  const createItem = async (item: T): Promise<void> => {
    try {
      await crudService.create(endpoints.create, item);
      await fetchAll();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Create failed");
      }
    }
  };

  const updateItem = async (id: ID, item: Partial<T>): Promise<void> => {
    try {
      await crudService.update(endpoints.update, id, item);
      await fetchAll();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Update failed");
      }
    }
  };

  const deleteItem = async (id: ID): Promise<void> => {
    try {
      await crudService.delete(endpoints.delete, id);
      await fetchAll();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Delete failed");
      }
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return {
    data,
    loading,
    error,
    fetchAll,
    createItem,
    updateItem,
    deleteItem,
  };
}

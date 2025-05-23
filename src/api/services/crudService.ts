// src/services/crudService.ts
import { apiclient } from "../client";

type ID = string | number;

export const crudService = {
    list: (endpoint: string) => apiclient.get(endpoint),
    create: (endpoint: string, data: Record<string, unknown>) => apiclient.post(endpoint, data),
    read: (endpoint: (id: ID) => string, id: ID) => apiclient.get(endpoint(id)),
    update: (endpoint: (id: ID) => string, id: ID, data: Record<string, unknown>) => apiclient.put(endpoint(id), data),
    delete: (endpoint: (id: ID) => string, id: ID) => apiclient.delete(endpoint(id)),
};

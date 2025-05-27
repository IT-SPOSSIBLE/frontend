import { CardDataType } from "../../types/CardData";
import {apiclient} from "../client"; // Adjust path as needed
import { API_ENDPOINTS } from "../endpoints"; // Adjust path as needed

export const getAllCards = async (): Promise<CardDataType[]> => {
  try {
    const response = await apiclient.get<CardDataType[]>(
      API_ENDPOINTS.products.list
    );
    console.log("Cards fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Fetch cards error:", error);
    throw error;
  }
};

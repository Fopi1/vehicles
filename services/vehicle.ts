import { ApiData } from "../types";

export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data: ApiData = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

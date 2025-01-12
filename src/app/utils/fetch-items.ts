import { readItem, readItems, readSingleton } from "@directus/sdk";
import directus from "./directus";

async function fetchData<T>(
  request: Promise<T>,
  errorMessage: string
): Promise<T> {
  try {
    return await request;
  } catch (error) {
    console.error(`${errorMessage} ${error}`);
    throw error;
  }
}

export function fetchItems(collection: string, fields: string[] = ["*"]) {
  const request = directus.request(readItems(collection, { fields }));
  return fetchData(request, "Error fetching items:");
}

export function fetchItem(
  collection: string,
  id: number,
  fields: string[] = ["*"]
) {
  const request = directus.request(readItem(collection, id, { fields }));
  return fetchData(request, "Error fetching item:");
}

export function fetchSingleton(collection: string) {
  const request = directus.request(readSingleton(collection));
  return fetchData(request, "Error fetching singleton item:");
}

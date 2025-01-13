import { readItems, readSingleton } from "@directus/sdk";
import directus from "./directus";

async function handleRequest<T>(
  request: Promise<T>,
  errorMessage: string
): Promise<T> {
  try {
    return await request;
  } catch (error) {
    console.error(`${errorMessage}:`, error);
    throw error;
  }
}

export async function fetchItems<T>(
  collection: string,
  fields: string[] = ["*"],
  sort: string[] = []
): Promise<T> {
  const result = await handleRequest(
    directus.request(readItems(collection, { fields, sort })) as Promise<T>,
    `Error fetching collection "${collection}" items`
  );

  if (!result) {
    throw new Error(`Items not found in collection "${collection}"`);
  }

  return result;
}

export async function fetchSingleton<T>(collection: string): Promise<T> {
  const result = await handleRequest(
    directus.request(readSingleton(collection)) as Promise<T>,
    `Error fetching singleton "${collection}" item`
  );

  if (!result) {
    throw new Error(`Singleton "${collection}" not found or returned null`);
  }

  return result;
}

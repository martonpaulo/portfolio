import { readItems, readSingleton } from "@directus/sdk";

import type { LinkType } from "@/types/link";
import directus from "@/utils/directus";

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
  query?: Record<string, unknown>
): Promise<T> {
  const result = await handleRequest(
    directus.request(readItems(collection, query)) as Promise<T>,
    `Error fetching collection "${collection}" items`
  );

  if (!result) {
    throw new Error(`Items not found in collection "${collection}"`);
  }

  return result;
}

export async function fetchSingleton<T>(
  collection: string,
  query?: Record<string, unknown>
): Promise<T> {
  const result = await handleRequest(
    directus.request(readSingleton(collection, query)) as Promise<T>,
    `Error fetching singleton "${collection}" item`
  );

  if (!result) {
    throw new Error(`Singleton "${collection}" not found or returned null`);
  }

  return result;
}

export async function getText(collection: string) {
  const { content } = await fetchSingleton<{ content: string }>(collection, {
    fields: "content",
  });

  return content;
}

export async function getLinks() {
  return fetchItems<LinkType[]>("links", { fields: ["id", "url", "label"] });
}

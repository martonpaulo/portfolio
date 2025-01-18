import { aggregate, readItems, readSingleton } from "@directus/sdk";

import directus from "@/api/directus";
import { handleRequest } from "@/api/helpers";

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

export async function fetchTotalItemCount(collection: string): Promise<number> {
  const result = await handleRequest(
    directus.request(
      aggregate(collection, {
        aggregate: { count: "*" },
      })
    ) as Promise<{ count: string }[]>,
    `Error fetching singleton "${collection}" item`
  );

  const count = parseInt(result[0]?.count);

  if (!count) {
    throw new Error(
      `Total item count not found for collection "${collection}"`
    );
  }

  return count;
}

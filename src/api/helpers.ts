export async function handleRequest<T>(
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

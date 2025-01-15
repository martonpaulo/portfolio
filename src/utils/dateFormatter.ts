export function formatDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };

  const formattedDate = new Date(date).toLocaleDateString("en-US", options);
  return `Published on ${formattedDate}`;
}

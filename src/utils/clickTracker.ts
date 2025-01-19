export function handleAnalyticsClick(
  category: string,
  label: string = "",
  value: string | number = 1
) {
  window.gtag("event", "button_click", {
    event_category: category,
    event_label: label,
    value,
  });
}

import { handleAnalyticsClick } from "@/utils/clickTracker";

interface LinkButtonProps {
  category: string;
  eventLabel: string;
  url: string;
  text: string;
}

export function LinkButton({
  category,
  eventLabel,
  url,
  text,
}: LinkButtonProps) {
  const handleClick = () => {
    handleAnalyticsClick(category, eventLabel, text);
    window.open(url, "_blank");
  };

  return (
    <button
      className="button is-link"
      onClick={url ? handleClick : undefined}
      disabled={url ? false : true}
    >
      {text}
    </button>
  );
}

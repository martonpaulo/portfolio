import { handleAnalyticsClick } from "@/utils/clickTracker";

interface ContactButtonProps {
  icon: React.ReactNode;
  label: string;
  url: string;
}

export function ContactButton({ icon, label, url }: ContactButtonProps) {
  const handleClick = () => {
    handleAnalyticsClick("contact", label);
    window.open(url, "_blank");
  };

  return (
    <button className="button" onClick={handleClick}>
      <span className="icon">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

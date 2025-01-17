import { iconMap } from "@/constants/linkConstants";

interface ButtonWithIconProps {
  id?: string;
  url?: string;
  label?: string;
  isLoading?: boolean;
}

export function ButtonWithIcon({
  id = "",
  url = "",
  label = "",
  isLoading = false,
}: ButtonWithIconProps) {
  const buttonState = isLoading ? "is-loading" : "";
  const icon = isLoading ? null : iconMap[id];

  return (
    <button
      className={`button ${buttonState}`}
      onClick={isLoading ? undefined : () => window.open(url, "_blank")}
    >
      <span className="icon">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

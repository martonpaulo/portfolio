import { getIconMap } from "@/constants/linkConstants";

interface ButtonWithIconProps {
  id?: string;
  url?: string;
  label?: string;
  isLoading?: boolean;
  isSmall?: boolean;
}

export function ButtonWithIcon({
  id = "",
  url = "",
  label = "",
  isLoading = false,
  isSmall = false,
}: ButtonWithIconProps) {
  const buttonState = isLoading ? "is-loading" : "";
  const buttonSize = isSmall ? "is-small" : "is-medium";
  const iconSize = isSmall ? 14 : 20;
  const icon = isLoading ? null : getIconMap(iconSize)[id];

  return (
    <button
      className={`button ${buttonState} ${buttonSize}`}
      onClick={isLoading ? undefined : () => window.open(url, "_blank")}
    >
      <span className={`icon ${buttonSize}`}>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

import { useState } from "react";

interface FetchErrorProps {
  item?: string | null;
}

export function FetchError({ item }: FetchErrorProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="notification is-danger is-light">
      <button className="delete" onClick={() => setIsVisible(false)} />
      <p>
        <strong>Error:</strong> failed to fetch{" "}
        <code>{item ? `${item}` : ""}</code> data.
      </p>
    </div>
  );
}

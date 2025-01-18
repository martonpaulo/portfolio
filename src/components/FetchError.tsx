interface FetchErrorProps {
  item?: string | null;
}

export function FetchError({ item }: FetchErrorProps) {
  return (
    <div className="notification is-danger is-light pt-2">
      <p>
        <strong>Error:</strong> failed to load{" "}
        <code>{item ? `${item}` : ""}</code> data.
      </p>
    </div>
  );
}

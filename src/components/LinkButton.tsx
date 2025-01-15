interface LinkButtonProps {
  url: string;
  text: string;
}

export function LinkButton({ url, text }: LinkButtonProps) {
  return (
    <button
      className="button is-link"
      onClick={url ? () => window.open(url, "_blank") : undefined}
      disabled={url ? false : true}
    >
      {text}
    </button>
  );
}

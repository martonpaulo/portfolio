import { FetchError } from "@/components/FetchError";
import type { LinkType } from "@/types/link";
import { getIconMap } from "@/utils/linkConstants";

function LinkButton({ isLoading = false, id = "", url = "", label = "" }) {
  return (
    <button
      className={`button is-medium ${isLoading ? "is-loading" : ""}`}
      onClick={isLoading ? undefined : () => window.open(url, "_blank")}
    >
      <span className="icon">{isLoading ? null : getIconMap()[id]}</span>
      <span>{label}</span>
    </button>
  );
}

interface LinksBoxProps {
  links: LinkType[];
  isLoading: boolean;
  isError: boolean;
}

export function LinksBox({ links, isLoading, isError }: LinksBoxProps) {
  if (isLoading) {
    return (
      <>
        <LinkButton isLoading />
        <LinkButton isLoading />
        <LinkButton isLoading />
      </>
    );
  }

  if (isError || !links.length) {
    return <FetchError item="links" />;
  }

  return (
    <>
      {links.map((link: LinkType) => (
        <LinkButton
          key={link.id}
          id={link.id}
          url={link.url}
          label={link.label}
        />
      ))}
    </>
  );
}

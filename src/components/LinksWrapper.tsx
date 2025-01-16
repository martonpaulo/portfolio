import { FetchError } from "@/components/FetchError";
import { getIconMap } from "@/constants/linkConstants";
import type { LinkType } from "@/types/link";

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

interface LinksWrapperProps {
  links: LinkType[];
  isLoading: boolean;
  isError: boolean;
}

export function LinksWrapper({ links, isLoading, isError }: LinksWrapperProps) {
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

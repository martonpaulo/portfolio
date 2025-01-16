import { FetchError } from "@/components/FetchError";
import { getIconMap } from "@/constants/linkConstants";
import type { LinkType } from "@/types/link";

interface LinksListProps {
  links: LinkType[];
  isLoading: boolean;
  isError: boolean;
}

export function LinksList({ links, isLoading, isError }: LinksListProps) {
  if (isLoading) return null;

  if (isError || !links.length) {
    return <FetchError item="links" />;
  }

  return (
    <>
      {links.map((link: LinkType) => (
        <a
          key={link.id}
          className="icon is-large"
          onClick={() => window.open(link.url, "_blank")}
        >
          {getIconMap(24)[link.id]}
        </a>
      ))}
    </>
  );
}

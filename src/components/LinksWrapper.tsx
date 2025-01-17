import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import { FetchError } from "@/components/FetchError";
import type { LinkType } from "@/types/link";

interface LinksWrapperProps {
  links: LinkType[];
  isLoading: boolean;
  isError: boolean;
}

export function LinksWrapper({ links, isLoading, isError }: LinksWrapperProps) {
  if (isLoading) {
    return <ButtonWithIcon isLoading />;
  }

  if (isError || !links.length) {
    return <FetchError item="links" />;
  }

  return (
    <>
      {links.map((link: LinkType) => (
        <ButtonWithIcon
          key={link.id}
          id={link.id}
          url={link.url}
          label={link.label}
        />
      ))}
    </>
  );
}

import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import { FetchError } from "@/components/FetchError";
import type { LinkType } from "@/types/link";

interface LinksWrapperProps {
  links: LinkType[];
  isSmall?: boolean;
  isLoading: boolean;
  isError: boolean;
}

export function LinksWrapper({
  links,
  isSmall = false,
  isLoading,
  isError,
}: LinksWrapperProps) {
  if (isLoading) {
    return (
      <>
        <ButtonWithIcon isSmall={isSmall} isLoading />
        <ButtonWithIcon isSmall={isSmall} isLoading />
        <ButtonWithIcon isSmall={isSmall} isLoading />
      </>
    );
  }

  if (isError || !links.length) {
    return <FetchError item="links" />;
  }

  return (
    <>
      {links.map((link: LinkType) => (
        <ButtonWithIcon
          key={link.id}
          isSmall={isSmall}
          id={link.id}
          url={link.url}
          label={link.label}
        />
      ))}
    </>
  );
}

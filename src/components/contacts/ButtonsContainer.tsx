import { ContactButton } from "@/components/contacts/ContactButton";
import { FetchError } from "@/components/FetchError";
import { LoadingButton } from "@/components/LoadingButton";
import { iconMap } from "@/constants/linkConstants";
import type { LinkType } from "@/types/link";

interface ButtonsContainerProps {
  links: LinkType[];
  isLoading: boolean;
  isError: boolean;
}

export function ButtonsContainer({
  links,
  isLoading,
  isError,
}: ButtonsContainerProps) {
  if (isLoading) return <LoadingButton />;

  if (isError || !links.length) {
    return <FetchError item="links" />;
  }

  return (
    <>
      {links.map((link: LinkType) => (
        <ContactButton
          key={link.id}
          icon={iconMap[link.id]}
          label={link.label}
          url={link.url}
        />
      ))}
    </>
  );
}

import { ButtonsContainer } from "@/components/contacts/ButtonsContainer";
import { getCvLink, getOrderedLinks } from "@/constants/linkConstants";
import type { LinkType } from "@/types/link";

interface ContactsContainerProps {
  links: LinkType[];
  isLoading: boolean;
  isError: boolean;
}

export function ContactsContainer({
  links,
  isLoading,
  isError,
}: ContactsContainerProps) {
  return (
    <div className="content has-text-centered">
      <div className="sub-section">
        <p>Access my CV below!</p>
        <div className="buttons is-centered are-large">
          <ButtonsContainer
            links={getCvLink(links)}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>

      <div className="sub-section">
        <p>Reach me out via</p>
        <div className="buttons is-centered are-medium">
          <ButtonsContainer
            links={getOrderedLinks(links)}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>
    </div>
  );
}

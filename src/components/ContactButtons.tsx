import { LinksWrapper } from "@/components/LinksWrapper";
import { getCvLink, getOrderedLinks } from "@/constants/linkConstants";
import type { LinkType } from "@/types/link";

interface ContactButtonsProps {
  links: LinkType[];
  isLoading: boolean;
  isError: boolean;
}

export function ContactButtons({
  links,
  isLoading,
  isError,
}: ContactButtonsProps) {
  return (
    <div className="content has-text-centered">
      <div className="sub-section">
        <p>Access my CV below!</p>
        <div className="buttons is-centered are-large">
          <LinksWrapper
            links={getCvLink(links)}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>

      <div className="sub-section">
        <p>Reach me out via</p>
        <div className="buttons is-centered are-medium">
          <LinksWrapper
            links={getOrderedLinks(links)}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>
    </div>
  );
}

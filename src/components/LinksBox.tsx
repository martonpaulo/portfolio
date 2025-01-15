import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  ReadCvLogo,
} from "@phosphor-icons/react";
import type { JSX } from "react";

import { FetchError } from "@/components/FetchError";
import type { LinkType } from "@/types/link";

const iconMap: { [key: string]: JSX.Element } = {
  github: <GithubLogo />,
  linkedin: <LinkedinLogo />,
  resume: <ReadCvLogo />,
  email: <EnvelopeSimple />,
};

function LinkButton({ isLoading = false, id = "", url = "", label = "" }) {
  return (
    <button
      className={`button is-medium ${isLoading ? "is-loading" : ""}`}
      onClick={isLoading ? undefined : () => window.open(url, "_blank")}
    >
      <span className="icon">{isLoading ? null : iconMap[id]}</span>
      <span>{label}</span>
    </button>
  );
}

interface LinksBoxProps {
  links: LinkType[];
  isLoading?: boolean;
  isError?: boolean;
}

export function LinksBox({
  links,
  isLoading = false,
  isError = false,
}: LinksBoxProps) {
  if (isLoading) {
    return (
      <>
        <LinkButton isLoading />
        <LinkButton isLoading />
        <LinkButton isLoading />
      </>
    );
  }

  if (isError || !links || !links.length) {
    return <FetchError item="links" />;
  }

  return (
    <>
      {links.map((link: { id: string; label: string; url: string }) => (
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

import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  ReadCvLogo,
} from "@phosphor-icons/react";
import type { JSX } from "react";

import type { LinkType } from "@/types/link";

export const iconMap: { [key: string]: JSX.Element } = {
  github: <GithubLogo />,
  linkedin: <LinkedinLogo />,
  cv: <ReadCvLogo />,
  email: <EnvelopeSimple />,
};

const linksOrder = ["email", "linkedin", "github"];

export function getOrderedLinks(links: LinkType[]) {
  return linksOrder
    .map((id) => links.find((link) => link.id === id))
    .filter(Boolean) as LinkType[];
}

export function getCvLink(links: LinkType[]) {
  const cvLink = links.find((link) => link.id === "cv");
  return cvLink ? [cvLink] : [];
}

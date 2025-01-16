import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  ReadCvLogo,
} from "@phosphor-icons/react";
import type { JSX } from "react";

export function getIconMap(size = 24): Record<string, JSX.Element> {
  return {
    github: <GithubLogo size={size} />,
    linkedin: <LinkedinLogo size={size} />,
    cv: <ReadCvLogo size={size} />,
    email: <EnvelopeSimple size={size} />,
  };
}

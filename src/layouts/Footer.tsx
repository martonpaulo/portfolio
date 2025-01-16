"use client";

import { useQuery } from "@tanstack/react-query";

import { getLinks } from "@/api/fetchApi";
import { LinksWrapper } from "@/components/LinksWrapper";
import type { LinkType } from "@/types/link";

export function Footer() {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<LinkType[]>({
    queryKey: ["links"],
    queryFn: getLinks,
  });

  const orderedIds = ["email", "linkedin", "github"];
  const orderedLinks = orderedIds
    .map((id) => data.find((link) => link.id === id))
    .filter(Boolean) as LinkType[];

  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>© {new Date().getFullYear()} Marton Paulo. All rights reserved.</p>
        <a
          className="is-size-7 text-link"
          onClick={() =>
            window.open("https://github.com/martonpaulo/portfolio/", "_blank")
          }
        >
          Source Code
        </a>
        <div className="content buttons is-centered mt-5">
          <LinksWrapper
            links={orderedLinks}
            isSmall
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useQuery } from "@tanstack/react-query";

import { getLinks } from "@/api/services";
import { ButtonsContainer } from "@/components/contacts/ButtonsContainer";
import { getOrderedLinks } from "@/constants/linkConstants";
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
        <div className="content buttons is-centered are-small mt-5">
          <ButtonsContainer
            links={getOrderedLinks(data)}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>
    </footer>
  );
}

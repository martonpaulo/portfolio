"use client";

import { useQuery } from "@tanstack/react-query";

import { getLinks } from "@/api/fetchApi";
import { LinksList } from "@/components/LinksList";

export function Footer() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["links"],
    queryFn: async () => await getLinks(),
  });

  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>© {new Date().getFullYear()} Marton Paulo. All rights reserved.</p>
        <LinksList links={data || []} isLoading={isLoading} isError={isError} />
      </div>
    </footer>
  );
}

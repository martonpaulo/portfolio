"use client";

import { useQuery } from "@tanstack/react-query";

import { getLinks, getText } from "@/api/fetchApi";
import { LinksWrapper } from "@/components/LinksWrapper";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

export default function Home() {
  const {
    data: summary = "",
    isLoading: summaryIsLoading,
    isError: summaryHasError,
  } = useQuery({
    queryKey: ["summary"],
    queryFn: async () => await getText("summary"),
  });

  const {
    data: links = [],
    isLoading: linksIsLoading,
    isError: linksHasError,
  } = useQuery({
    queryKey: ["links"],
    queryFn: async () => await getLinks(),
  });

  return (
    <>
      <section className="section is-medium">
        <div className="content">
          <MarkdownRenderer
            markdown={summary}
            collection="summary"
            isLoading={summaryIsLoading}
            isError={summaryHasError}
          />
        </div>
      </section>

      <section className="section">
        <div className="content buttons is-centered">
          <LinksWrapper
            links={links}
            isLoading={linksIsLoading}
            isError={linksHasError}
          />
        </div>
      </section>
    </>
  );
}

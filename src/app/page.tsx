"use client";

import { useQuery } from "@tanstack/react-query";

import { LinksBox } from "@/components/LinksBox";
import { MarkdownContainer } from "@/components/MarkdownContainer";
import { getLinks, getText } from "@/utils/fetchApi";

export default function Home() {
  const {
    data: summary,
    isLoading: summaryIsLoading,
    isError: summaryHasError,
  } = useQuery({
    queryKey: ["summary"],
    queryFn: async () => await getText("summary"),
  });

  const {
    data: links,
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
          <MarkdownContainer
            markdown={summary || ""}
            collection="summary"
            isLoading={summaryIsLoading}
            isError={summaryHasError}
          />
        </div>
      </section>

      <section className="section">
        <div className="content buttons is-centered">
          <LinksBox
            links={links || []}
            isLoading={linksIsLoading}
            isError={linksHasError}
          />
        </div>
      </section>
    </>
  );
}

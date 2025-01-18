"use client";

import { useQuery } from "@tanstack/react-query";

import { getLinks, getText } from "@/api/services";
import { ContactsContainer } from "@/components/contacts/ContactsContainer";
import { Cover } from "@/components/Cover";
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
        <Cover />
      </section>

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

      <section className="section is-medium">
        <ContactsContainer
          links={links}
          isLoading={linksIsLoading}
          isError={linksHasError}
        />
      </section>
    </>
  );
}

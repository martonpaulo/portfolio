"use client";

import { useQuery } from "@tanstack/react-query";

import { getText } from "@/api/fetchApi";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

const SUMMARY_COLLECTION = "summary";
const INTERESTS_COLLECTION = "interests";

export default function About() {
  const {
    data: summaryData,
    isLoading: summaryIsLoading,
    isError: summaryHasError,
  } = useQuery({
    queryKey: [SUMMARY_COLLECTION],
    queryFn: async () => await getText(SUMMARY_COLLECTION),
  });

  const {
    data: interestsData,
    isLoading: interestsIsLoading,
    isError: interestsHasError,
  } = useQuery({
    queryKey: [INTERESTS_COLLECTION],
    queryFn: async () => await getText(INTERESTS_COLLECTION),
  });

  return (
    <section className="section is-medium">
      <div className="content">
        <h1>Summary</h1>
        <MarkdownRenderer
          markdown={summaryData || ""}
          collection={SUMMARY_COLLECTION}
          isLoading={summaryIsLoading}
          isError={summaryHasError}
        />

        <h1>Interests</h1>
        <MarkdownRenderer
          markdown={interestsData || ""}
          collection={INTERESTS_COLLECTION}
          isLoading={interestsIsLoading}
          isError={interestsHasError}
        />
      </div>
    </section>
  );
}

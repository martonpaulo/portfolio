import ReactMarkdown from "react-markdown";

import { FetchError } from "@/components/FetchError";

interface MarkdownContainerProps {
  markdown: string;
  collection?: string | null;
  isLoading?: boolean;
  isError?: boolean;
}

export function MarkdownContainer({
  markdown,
  collection = null,
  isLoading = false,
  isError = false,
}: MarkdownContainerProps) {
  if (isLoading) {
    return (
      <div className="skeleton-lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  if (isError || markdown.trim().length === 0) {
    return <FetchError item={collection} />;
  }

  return (
    <>
      {markdown.split("\n").map((line: string, index: number) => (
        <div key={index} className="block">
          <ReactMarkdown>{line}</ReactMarkdown>
        </div>
      ))}
    </>
  );
}

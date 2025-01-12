import ReactMarkdown from "react-markdown";

interface TextContainerProps {
  markdown: string;
}

export default function TextContainer({ markdown }: TextContainerProps) {
  return (
    <section className="px-4">
      {markdown.split("\n").map((line, index) => (
        <p key={index} className="mt-4">
          <ReactMarkdown>{line}</ReactMarkdown>
        </p>
      ))}
    </section>
  );
}

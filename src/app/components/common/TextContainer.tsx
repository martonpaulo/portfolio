import ReactMarkdown from "react-markdown";

import Loader from "./Loader";
import { FetchStatusEnum } from "@/types/FetchStatus";
import FetchError from "./FetchError";

interface TextContainerProps {
  markdown: string;
  status: FetchStatusEnum;
}

export default function TextContainer({
  markdown,
  status,
}: TextContainerProps) {
  if (status === FetchStatusEnum.LOADING) {
    return <Loader />;
  }

  if (status === FetchStatusEnum.ERROR) {
    return <FetchError />;
  }

  return (
    <section className="px-4">
      {markdown.split("\n").map((line, index) => (
        <div key={index} className="mt-4">
          <ReactMarkdown>{line}</ReactMarkdown>
        </div>
      ))}
    </section>
  );
}

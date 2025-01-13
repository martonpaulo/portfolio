"use client";

import { useLinks } from "@/hooks/useItems";
import Loader from "@/app/components/common/Loader";
import { MousePointer2 } from "lucide-react";
import { FetchStatusEnum } from "../../../types/FetchStatus";
import FetchError from "./FetchError";

export default function FindMe() {
  const { links, status } = useLinks();

  if (status === FetchStatusEnum.LOADING) {
    return <Loader />;
  }

  if (status === FetchStatusEnum.ERROR) {
    return <FetchError />;
  }

  return (
    <section className="text-center mt-24 border-2 p-4 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4">Find Me Online</h2>
      {links.map((link) => (
        <li key={link.id} className="hover:text-blue-700 transition-colors">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:font-bold"
          >
            {link.label}
          </a>
          <MousePointer2 className="inline-block w-6 h-6 ml-2" />
        </li>
      ))}
    </section>
  );
}

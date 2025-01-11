"use client";

import { useLinks } from "@/hooks/useLinks";
import Loader from "@/app/components/Loader";
import { MousePointer2 } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LinkList = ({ data }: { data: any[] }) => (
  <ul className="text-lg sm:text-2xl flex flex-col gap-2">
    {data.map(
      (item) =>
        item.isPublic && (
          <li key={item.id} className="hover:text-blue-700 transition-colors">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:font-bold"
            >
              {item.name}
            </a>
            <MousePointer2 className="inline-block w-6 h-6 ml-2" />
          </li>
        )
    )}
  </ul>
);

export default function FindMeOnline() {
  const { data, isLoading } = useLinks();

  if (isLoading) return <Loader />;

  return (
    <section className="text-center mt-24 border-2 p-4 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4">Find Me Online</h2>
      <LinkList data={data} />
    </section>
  );
}

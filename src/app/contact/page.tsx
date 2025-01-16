"use client";

import { useQuery } from "@tanstack/react-query";

import { getLinks } from "@/api/fetchApi";
import { LinksWrapper } from "@/components/LinksWrapper";

export default function Contact() {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["links"],
    queryFn: async () => await getLinks(),
  });

  return (
    <section className="section is-medium">
      <div className="content buttons is-centered">
        <LinksWrapper links={data} isLoading={isLoading} isError={isError} />
      </div>
    </section>
  );
}

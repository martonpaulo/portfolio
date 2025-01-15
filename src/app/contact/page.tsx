"use client";

import { useQuery } from "@tanstack/react-query";

import { LinksBox } from "@/components/LinksBox";
import { getLinks } from "@/utils/fetchApi";

export default function Contact() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["links"],
    queryFn: async () => await getLinks(),
  });

  return (
    <section className="section is-medium">
      <div className="content buttons is-centered">
        <LinksBox links={data || []} isLoading={isLoading} isError={isError} />
      </div>
    </section>
  );
}

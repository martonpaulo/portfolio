"use client";

import { useQuery } from "@tanstack/react-query";

import { getLinks } from "@/api/fetchApi";
import { ContactButtons } from "@/components/ContactButtons";

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
      <ContactButtons links={data} isLoading={isLoading} isError={isError} />
    </section>
  );
}

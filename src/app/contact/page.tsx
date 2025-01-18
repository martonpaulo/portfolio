"use client";

import { useQuery } from "@tanstack/react-query";

import { getLinks } from "@/api/services";
import { ContactsContainer } from "@/components/contacts/ContactsContainer";

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
      <ContactsContainer links={data} isLoading={isLoading} isError={isError} />
    </section>
  );
}

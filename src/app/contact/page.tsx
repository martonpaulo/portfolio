"use client";

import { useQuery } from "@tanstack/react-query";

import { getLinks } from "@/api/services";
import { ContactsContainer } from "@/components/contacts/ContactsContainer";
import { pagesMetadata } from "@/constants/pagesMetadata";

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
    <>
      <title>{pagesMetadata.contact.pageTitle}</title>

      <section className="section is-medium">
        <ContactsContainer
          links={data}
          isLoading={isLoading}
          isError={isError}
        />
      </section>
    </>
  );
}

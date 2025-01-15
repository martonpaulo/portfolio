"use client";

import { useQuery } from "@tanstack/react-query";

import { ProjectList } from "@/app/projects/ProjectList";
import { getProjects } from "@/utils/fetchApi";

export default function Projects() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => await getProjects(),
  });

  return (
    <section className="section is-medium">
      <ProjectList
        projects={data || []}
        isLoading={isLoading}
        isError={isError}
      />
    </section>
  );
}

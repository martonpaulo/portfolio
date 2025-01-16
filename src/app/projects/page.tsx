"use client";

import { useQuery } from "@tanstack/react-query";

import { getProjects } from "@/api/fetchApi";
import { ProjectList } from "@/app/projects/ProjectList";

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

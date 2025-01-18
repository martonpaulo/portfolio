"use client";

import { useQuery } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { getProjects, getTotalProjectCount } from "@/api/services";
import { ProjectList } from "@/app/projects/ProjectList";
import { PaginationContainer } from "@/components/pagination/PaginationContainer";

const ITEMS_PER_PAGE = 10;

function ProjectsContent() {
  const pathname = usePathname();
  const pageParam = useSearchParams().get("page");
  const page = pageParam ? parseInt(pageParam) : 1;

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects", page],
    queryFn: async () => await getProjects(ITEMS_PER_PAGE, page),
  });

  const { data: totalProjectCount = 0 } = useQuery({
    queryKey: ["totalProjectCount"],
    queryFn: async () => await getTotalProjectCount(),
  });

  return (
    <>
      <div className="pb-6">
        <ProjectList projects={data} isLoading={isLoading} isError={isError} />
      </div>

      <div className="pt-6">
        <PaginationContainer
          pathname={pathname}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={page}
          totalItemCount={totalProjectCount}
        />
      </div>
    </>
  );
}

export default function Projects() {
  return (
    <section className="section is-medium">
      <Suspense
        fallback={
          <ProjectList projects={[]} isLoading={true} isError={false} />
        }
      >
        <ProjectsContent />
      </Suspense>
    </section>
  );
}

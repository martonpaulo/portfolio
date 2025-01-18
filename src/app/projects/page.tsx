"use client";

import { useQuery } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";

import { getProjects, getTotalProjectCount } from "@/api/services";
import { ProjectList } from "@/app/projects/ProjectList";
import { PaginationContainer } from "@/components/pagination/PaginationContainer";

const ITEMS_PER_PAGE = 10;

export default function Projects() {
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
    <section className="section is-medium">
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
    </section>
  );
}

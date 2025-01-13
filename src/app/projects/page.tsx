"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProjectList from "./ProjectList";
import { PaginationWithLinks } from "@/app/components/ui/pagination-with-links";
import { useProjects } from "@/hooks/useItems";
import Loader from "@/app/components/common/Loader";
import FetchError from "../components/common/FetchError";
import { FetchStatusEnum } from "@/types/FetchStatus";

const POSTS_PER_PAGE = 10;

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}

function ProjectsContent() {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const { projects, status } = useProjects();

  const paginatedProjects = getPaginatedProjects(
    projects,
    currentPage,
    POSTS_PER_PAGE
  );

  if (status === FetchStatusEnum.LOADING) {
    return <Loader />;
  }

  if (status === FetchStatusEnum.ERROR) {
    return <FetchError />;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <ProjectList projects={paginatedProjects} />
      <PaginationWithLinks
        page={currentPage}
        pageSize={POSTS_PER_PAGE}
        totalCount={projects.length}
      />
    </div>
  );
}

// Utility: Get paginated data based on current page
const getPaginatedProjects = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  projects: any[],
  page: number,
  pageSize: number
) => {
  const start = (page - 1) * pageSize;
  const end = page * pageSize;
  return projects.slice(start, end);
};

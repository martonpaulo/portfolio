"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProjectList from "./ProjectList";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import { useProjects } from "@/hooks/useProjects";
import Loader from "@/app/[lang]/components/Loader";

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
  const { data, isLoading } = useProjects();

  if (isLoading) return <Loader />;

  const paginatedProjects = getPaginatedProjects(
    data,
    currentPage,
    POSTS_PER_PAGE
  );

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <ProjectList projects={paginatedProjects} />
      <PaginationWithLinks
        page={currentPage}
        pageSize={POSTS_PER_PAGE}
        totalCount={data.length}
      />
    </div>
  );
}

// Utility: Get paginated data based on current page
const getPaginatedProjects = (
  projects: any[],
  page: number,
  pageSize: number
) => {
  const start = (page - 1) * pageSize;
  const end = page * pageSize;
  return projects.slice(start, end);
};

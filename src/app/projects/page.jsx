"use client";

import projects from "@/app/data/projects.json";
import ProjectList from "./ProjectList";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const POSTS_PER_PAGE = 10;

// Utility: Sort projects based on specific criteria
const sortProjects = (projects) => {
  return [...projects].sort((a, b) => {
    if (a.needsMaintenance !== b.needsMaintenance) {
      return a.needsMaintenance - b.needsMaintenance;
    }
    if (Boolean(b.liveLink) !== Boolean(a.liveLink)) {
      return Boolean(b.liveLink) - Boolean(a.liveLink);
    }
    return new Date(b.datePublished) - new Date(a.datePublished);
  });
};

// Utility: Get paginated data based on current page
const getPaginatedProjects = (projects, page, pageSize) => {
  const start = (page - 1) * pageSize;
  const end = page * pageSize;
  return projects.slice(start, end);
};

export default function Projects() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}

function ProjectsContent() {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const sortedProjects = sortProjects(projects);
  const paginatedProjects = getPaginatedProjects(
    sortedProjects,
    currentPage,
    POSTS_PER_PAGE
  );

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

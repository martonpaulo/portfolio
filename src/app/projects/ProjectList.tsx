import { ProjectItem } from "@/app/projects/ProjectItem";
import { ProjectSkeleton } from "@/app/projects/ProjectSkeleton";
import { FetchError } from "@/components/FetchError";
import type { ProjectType } from "@/types/project";

interface ProjectListProps {
  projects: ProjectType[];
  isLoading: boolean;
  isError: boolean;
}

export function ProjectList({
  projects,
  isLoading,
  isError,
}: ProjectListProps) {
  if (isLoading) {
    return (
      <>
        <ProjectSkeleton />
        <ProjectSkeleton />
        <ProjectSkeleton />
      </>
    );
  }

  if (isError || !projects.length) {
    return <FetchError item="projects" />;
  }

  return (
    <>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </>
  );
}

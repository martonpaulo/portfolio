import { ProjectItem } from "@/app/projects/ProjectItem";
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
  console.log(projects, isLoading, isError);

  return (
    <>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </>
  );
}

import LiveDemoRedirect from "@/app/projects/[slug]/live/LiveDemoRedirect";
import { fetchProjects } from "@/app/utils/fetch-projects";

export default function Page() {
  return <LiveDemoRedirect />;
}

export async function generateStaticParams() {
  const projects = await fetchProjects();
  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }));
}

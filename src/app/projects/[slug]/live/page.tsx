// import { fetchItems } from "@/lib/fetch-api";
// import type { ProjectType } from "@/types/Project";
// import type { JSX } from "react";

// const NOT_FOUND_URL = "https://www.martonpaulo.com/404";

// interface Params {
//   slug: string;
// }

// interface PageProps {
//   params: Promise<Params>;
// }

// const handleRedirect = (url: string): JSX.Element | null => {
//   if (typeof window !== "undefined") {
//     window.location.href = url;
//     return null;
//   }

//   return (
//     <html>
//       <head>
//         <meta httpEquiv="refresh" content={`0;url=${url}`} />
//       </head>
//       <body>
//         <p>
//           Redirecting to <a href={url}>{url}</a>...
//         </p>
//       </body>
//     </html>
//   );
// };

// const fetchProjects = async (): Promise<ProjectType[]> => {
//   try {
//     return await fetchItems<ProjectType[]>("projects");
//   } catch (error) {
//     console.error("Error fetching projects:", error);
//     return [];
//   }
// };

// const getProjectBySlug = (
//   slug: string,
//   projects: ProjectType[]
// ): ProjectType | null =>
//   projects.find((project) => project.id === slug) || null;

// const getRedirectUrl = (project: ProjectType | null): string =>
//   project?.liveDemoUrl || NOT_FOUND_URL;

// export default async function ProjectPage({
//   params,
// }: PageProps): Promise<JSX.Element | null> {
//   const { slug } = await params;

//   try {
//     const projects = await fetchProjects();
//     const project = getProjectBySlug(slug, projects);
//     return handleRedirect(getRedirectUrl(project));
//   } catch (error) {
//     console.error("Error in ProjectPage:", error);
//     return handleRedirect(NOT_FOUND_URL);
//   }
// }

// export async function generateStaticParams(): Promise<Params[]> {
//   try {
//     const projects = await fetchProjects();
//     return projects.map((project) => ({ slug: project.id }));
//   } catch (error) {
//     console.error("Error fetching projects for static params:", error);
//     return [];
//   }
// }

export default function ProjectPage() {
  return null;
}

export function generateStaticParams() {
  return [{ slug: "slug" }];
}

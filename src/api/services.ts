import {
  fetchItems,
  fetchSingleton,
  fetchTotalItemCount,
} from "@/api/fetchApi";
import type { LinkType } from "@/types/link";
import type { ProjectType } from "@/types/project";

export async function getText(collection: string) {
  const { content } = await fetchSingleton<{ content: string }>(collection, {
    fields: "content",
  });

  return content;
}

export async function getLinks() {
  return fetchItems<LinkType[]>("links", { fields: ["id", "url", "label"] });
}

export async function getProjects(limit: number, page: number) {
  return fetchItems<ProjectType[]>("projects", {
    limit,
    page,
    fields: [
      "id",
      "name",
      "logoUrl",
      "publishedDate",
      "description",
      "liveDemoUrl",
      "repositoryUrl",
      "demoMediaUrl",
      "isMaintenanceRequired",
      "tags",
      "techStack",
    ],
    sort: ["isMaintenanceRequired", "-publishedDate"],
  });
}

export async function getTotalProjectCount() {
  return fetchTotalItemCount("projects");
}

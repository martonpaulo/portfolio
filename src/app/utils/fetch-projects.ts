import { fetchAPI } from "@/app/utils/fetch-api";

export async function fetchProjects() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = "/projects";
  const urlParamsObject = {
    fields: ["slug", "liveDemoUrl"],
    sort: { createdAt: "desc" },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const response = await fetchAPI(path, urlParamsObject, options);
  return response.data;
}

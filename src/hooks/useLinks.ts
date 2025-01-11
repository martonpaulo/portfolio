import { useState, useEffect } from "react";
import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

export function useLinks() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      setLoading(true);
      try {
        const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
        const path = "/links";
        const urlParamsObject = {
          fields: ["name", "url", "isPublic"],
          sort: { createdAt: "desc" },
        };
        const options = { headers: { Authorization: `Bearer ${token}` } };
        const responseData = await fetchAPI(path, urlParamsObject, options);
        setData(responseData.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  return { data, isLoading };
}

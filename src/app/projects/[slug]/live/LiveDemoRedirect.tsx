"use client";

import { useEffect } from "react";
import { useProjects } from "@/hooks/useProjects";
import Loader from "@/app/components/Loader";
import { useRouter, useParams } from "next/navigation";

export default function LiveDemoRedirect() {
  const { data: projects, isLoading } = useProjects();
  const router = useRouter();
  const { slug } = useParams();

  useEffect(() => {
    if (!isLoading && projects?.length > 0 && slug) {
      // Find the project with the matching slug
      const project = projects.find((item) => item.slug === slug);

      if (project && project.liveDemoUrl) {
        // Redirect to the live demo URL
        window.location.href = project.liveDemoUrl;
      } else {
        // Redirect to a 404 page if the project isn't found or lacks a liveDemoUrl
        router.replace("/404");
      }
    }
  }, [isLoading, projects, slug, router]);

  if (isLoading || !slug) {
    return <Loader />;
  }

  return null; // No visible content as this page handles only redirects
}

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import { fetchItems } from "@/lib/fetch-api";
import { FetchStatusEnum } from "@/types/FetchStatus";
import { LinkType } from "@/types/Link";
import type { ProjectType } from "@/types/Project";
import type { SkillType } from "@/types/Skill";

function useItems<T extends object>(
  collection: string,
  fields?: (keyof T)[],
  sort?: string[]
) {
  const [items, setItems] = useState<T[]>([]);
  const [status, setStatus] = useState<FetchStatusEnum>(
    FetchStatusEnum.LOADING
  );

  const fetchIdRef = useRef(0);

  useEffect(() => {
    const fetchId = ++fetchIdRef.current; // Incrementa identificador único para cada requisição.

    const loadData = async () => {
      setStatus(FetchStatusEnum.LOADING); // Define status como carregando.
      try {
        const result = await fetchItems<T[]>(
          collection,
          fields ? (fields as string[]) : [],
          sort
        );

        if (fetchId !== fetchIdRef.current) return; // Cancela se for uma requisição antiga.

        const isValid = result.every((item) =>
          fields ? fields.every((field) => field in item) : true
        );

        if (isValid) {
          setItems(result);
          setStatus(FetchStatusEnum.SUCCESS);
        } else {
          setItems([]);
          setStatus(FetchStatusEnum.ERROR);
        }
      } catch (error) {
        if (fetchId === fetchIdRef.current) {
          console.error(`Error fetching ${collection}:`, error);
          setItems([]);
          setStatus(FetchStatusEnum.ERROR);
        }
      }
    };

    loadData();

    return () => {
      fetchIdRef.current++; // Incrementa identificador ao desmontar para evitar efeitos colaterais.
    };
  }, [collection, fields?.join(","), sort?.join(",")]);

  return { items, status };
}

export function useLinks() {
  const { items: links, status } = useItems<LinkType>("links", [
    "id",
    "label",
    "url",
  ]);
  return { links, status };
}

export function useProjects() {
  const { items: projects, status } = useItems<ProjectType>(
    "projects",
    [
      "id",
      "name",
      "logoUrl",
      "publishedDate",
      "description",
      "liveDemoUrl",
      "repositoryUrl",
      "demoMediaUrl",
      "tags",
      "techStack",
    ],
    ["isMaintenanceRequired", "-publishedDate"]
  );
  return { projects, status };
}

export function useSkills() {
  const { items: skills, status } = useItems<SkillType>(
    "skills",
    ["id", "category", "techStack"],
    ["category"]
  );

  const mappedSkills = skills.map((skill) => ({
    ...skill,
    techStack: skill.techStack.map((tech) => tech.name),
  }));

  return { skills: mappedSkills, status };
}

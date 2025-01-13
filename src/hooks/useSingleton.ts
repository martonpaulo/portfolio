/* eslint-disable react-hooks/exhaustive-deps */
import { FetchStatusEnum } from "@/types/FetchStatus";
import { fetchSingleton } from "@/lib/fetch-api";
import { useState, useEffect, useRef } from "react";

function useSingleton<T extends object>(
  collection: string,
  fields?: (keyof T)[]
) {
  const [item, setItem] = useState<T | null>(null);
  const [status, setStatus] = useState<FetchStatusEnum>(
    FetchStatusEnum.LOADING
  );

  const fetchIdRef = useRef(0);

  useEffect(() => {
    const fetchId = ++fetchIdRef.current; // Incrementa identificador único para cada requisição.

    const loadData = async () => {
      setStatus(FetchStatusEnum.LOADING);
      try {
        const result = await fetchSingleton<T>(collection);

        if (fetchId !== fetchIdRef.current) return; // Cancela se a requisição for obsoleta.

        const isValid = fields
          ? fields.every((field) => field in result)
          : true;

        if (result && isValid) {
          setItem(result);
          setStatus(FetchStatusEnum.SUCCESS);
        } else {
          setItem(null);
          setStatus(FetchStatusEnum.ERROR);
        }
      } catch (error) {
        if (fetchId === fetchIdRef.current) {
          console.error(`Error fetching ${collection}:`, error);
          setItem(null);
          setStatus(FetchStatusEnum.ERROR);
        }
      }
    };

    loadData();

    return () => {
      fetchIdRef.current++;
    };
  }, [collection, fields?.join(",")]);

  return { item, status };
}

export function useText(collection: string) {
  const { item, status: initialStatus } = useSingleton<{ content: string }>(
    collection,
    ["content"]
  );

  const content = item?.content.trim() || "";
  const status = content.length > 0 ? initialStatus : FetchStatusEnum.ERROR;

  return { content, status };
}

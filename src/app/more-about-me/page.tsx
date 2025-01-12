"use client";

import { useEffect, useState } from "react";
import TextContainer from "../components/TextContainer";
import Loader from "@/app/components/Loader";
import { fetchSingleton } from "@/app/utils/fetch-items";

export default function MoreAboutMe() {
  const [interests, setInterests] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getInterests() {
      const data = await fetchSingleton("interests");
      const interestsContent = data?.content || "";
      setInterests(interestsContent);
      setLoading(false);
    }

    getInterests();
  }, []);

  if (loading) return <Loader />;
  return <TextContainer markdown={interests} />;
}

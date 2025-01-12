"use client";

import Header from "@/app/components/Header";
import SkillsList from "@/app/components/SkillsList";
import UnderConstruction from "@/app/components/UnderConstruction";
import FindMeOnline from "@/app/components/FindMeOnline";
import TextContainer from "@/app/components/TextContainer";

import { useEffect, useState } from "react";
import Loader from "@/app/components/Loader";
import { fetchSingleton } from "@/app/utils/fetch-items";

export default function Home() {
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getSummary() {
      const data = await fetchSingleton("summary");
      const summaryContent = data?.content || "";
      setSummary(summaryContent);
      setLoading(false);
    }

    getSummary();
  }, []);

  return (
    <>
      <Header />
      <UnderConstruction />
      {loading && <Loader />}
      <TextContainer markdown={summary} />
      <SkillsList />
      <FindMeOnline />
    </>
  );
}

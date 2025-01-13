"use client";

import Header from "@/app/components/common/Header";
import SkillsList from "@/app/components/SkillsList";
import UnderConstruction from "@/app/components/UnderConstruction";
import FindMe from "@/app/components/common/FindMe";
import TextContainer from "@/app/components/common/TextContainer";
import { useText } from "@/hooks/useSingleton";

export default function Home() {
  const { content, status } = useText("summary");

  return (
    <>
      <Header />
      <UnderConstruction />
      <TextContainer markdown={content} status={status} />
      <SkillsList />
      <FindMe />
    </>
  );
}

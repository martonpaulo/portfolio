import Header from "@/app/[lang]/components/Header";
import SkillsList from "@/app/[lang]/components/SkillsList";
import UnderConstruction from "@/app/[lang]/components/UnderConstruction";
import FindMeOnline from "@/app/[lang]/components/FindMeOnline";
import TextContainer from "@/app/[lang]/components/TextContainer";

import bio from "@/app/[lang]/data/bio.json";

export default function Home() {
  return (
    <>
      <Header />
      <UnderConstruction />
      <TextContainer text={bio.description} />
      <SkillsList />
      <FindMeOnline />
    </>
  );
}

import Header from "@/app/components/Header";
import SkillsList from "@/app/components/SkillsList";
import UnderConstruction from "@/app/components/UnderConstruction";
import FindMeOnline from "@/app/components/FindMeOnline";
import TextContainer from "@/app/components/TextContainer";

import bio from "@/app/data/bio.json";

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

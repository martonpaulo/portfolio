import TextContainer from "../components/TextContainer";

import bio from "@/app/[lang]/data/bio.json";

export default function MoreAboutMe() {
  return (
    <>
      <TextContainer text={bio.hobbies} />
    </>
  );
}

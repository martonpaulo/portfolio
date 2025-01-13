import { useSkills } from "@/hooks/useItems";
import { FetchStatusEnum } from "@/types/FetchStatus";
import Loader from "./common/Loader";
import FetchError from "./common/FetchError";

export default function SkillsList() {
  const { skills, status } = useSkills();

  if (status === FetchStatusEnum.LOADING) return <Loader />;
  if (status === FetchStatusEnum.ERROR) return <FetchError />;

  return (
    <section className="px-4 mt-16">
      <p className="text-base sm:text-lg">My skills: </p>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id} className="mt-2 list-disc list-inside">
            <p className="font-semibold inline">{skill.category}: </p>
            <span>{skill.techStack.map((tech) => tech).join(", ")}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

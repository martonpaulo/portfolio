import bio from "@/app/[lang]/data/bio.json";

export default function SkillsList() {
  return (
    <section className="px-4 mt-16">
      <p className="text-base sm:text-lg">My skills: </p>
      <ul>
        {bio.skills.map((skill) => (
          <li key={skill.category} className="mt-2 list-disc list-inside">
            <p className="font-semibold inline">{skill.category}: </p>
            <span>{skill.items.join(", ")}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

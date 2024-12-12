import { description } from "@/app/utils/constants";

export default function Description() {
  return (
    <section className="px-4 mt-16">
      {description.map((line) => (
        <p className="text-base sm:text-lg mb-6" key={line}>
          {line}
        </p>
      ))}
    </section>
  );
}

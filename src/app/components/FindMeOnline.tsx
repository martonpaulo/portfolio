import { CursorClick } from "@phosphor-icons/react/dist/ssr";
import { links } from "@/app/utils/constants";

export default function FindMeOnline() {
  return (
    <section className="text-center mt-24 border-2 border-purple-500 p-4 rounded-lg shadow-lg bg-purple-200 max-w-lg mx-auto">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4">Find Me Online</h2>
      <ul className="text-lg sm:text-2xl flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.name} className="hover:text-purple transition-colors">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
            <CursorClick className="inline-block w-6 h-6 ml-2" />
          </li>
        ))}
      </ul>
    </section>
  );
}

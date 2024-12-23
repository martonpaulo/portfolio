import links from "@/app/data/links.json";
import { MousePointer2 } from "lucide-react";

export default function FindMeOnline() {
  return (
    <section className="text-center mt-24 border-2 p-4 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4">Find Me Online</h2>
      <ul className="text-lg sm:text-2xl flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.name} className="hover:text-blue-700 transition-colors">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:font-bold"
            >
              {link.name}
            </a>
            <MousePointer2 className="inline-block w-6 h-6 ml-2" />
          </li>
        ))}
      </ul>
    </section>
  );
}

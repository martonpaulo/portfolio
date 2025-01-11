import { Construction } from "lucide-react";

export default function UnderConstruction() {
  return (
    <section className="mt-4 pb-16 flex flex-col items-center text-center">
      <Construction className="w-16 sm:w-24 h-16 sm:h-24 mt-4" />
      <h2 className="text-xl sm:text-2xl font-bold mt-4">
        This Page is Under Construction!
      </h2>
      <p className="text-base sm:text-lg mt-2">
        Check back soon for more content!
      </p>
    </section>
  );
}

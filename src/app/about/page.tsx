"use client";

import TextContainer from "@/app/components/common/TextContainer";

import { useText } from "@/hooks/useSingleton";

export default function AboutMe() {
  const { content: interestsContent, status: interestsStatus } =
    useText("interests");
  const { content: summaryContent, status: summaryStatus } = useText("summary");

  return (
    <div className="space-y-8">
      <section className="p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Summary</h2>
        <TextContainer markdown={summaryContent} status={summaryStatus} />
      </section>
      <section className="p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Interests</h2>
        <TextContainer markdown={interestsContent} status={interestsStatus} />
      </section>
    </div>
  );
}

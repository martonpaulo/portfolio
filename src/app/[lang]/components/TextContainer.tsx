interface TextContainerProps {
  text: string[];
}

export default function TextContainer({ text }: TextContainerProps) {
  return (
    <section className="px-4">
      {text.map((line) => (
        <p className="text-base sm:text-lg mb-6" key={line}>
          {line}
        </p>
      ))}
    </section>
  );
}

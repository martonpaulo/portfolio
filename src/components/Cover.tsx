import { CldImage } from "next-cloudinary";

const MAX_SIZE = 750;

export function Cover() {
  return (
    <div className="content has-text-centered">
      <CldImage
        src="cover"
        alt="Marton Paulo"
        width={MAX_SIZE}
        height={MAX_SIZE}
      />
      <p className="is-family-monospace">
        the best <strong>Front-End Developer</strong> you are looking for
      </p>
    </div>
  );
}

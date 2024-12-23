interface LogoProps {
  mode?: string;
  size?: number;
}

const ORIGINAL_WIDTH = 558;
const ORIGINAL_HEIGHT = 756;

export default function Logo({
  mode = "light",
  size = ORIGINAL_HEIGHT,
}: LogoProps) {
  const scale = size / ORIGINAL_HEIGHT;
  const width = ORIGINAL_WIDTH * scale;
  const height = ORIGINAL_HEIGHT * scale;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 558 756"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {mode === "dark" ? (
        <>
          <g filter="url(#filter0_d_8_46)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.526955 0.049991V614.95H200.727V538.9H97.377V76.75H200.727V0.049991H0.526955ZM527.727 725.95V111.05H327.527V187.75H430.877V649.25H327.527V725.95H527.727Z"
              fill="#F5F5F5"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_8_46"
              x="0.526855"
              y="0.0500488"
              width="542.2"
              height="740.9"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="15" dy="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.4 0 0 0 0 0.427451 0 0 0 0 0.6 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_8_46"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_8_46"
                result="shape"
              />
            </filter>
          </defs>
        </>
      ) : (
        <>
          <g filter="url(#filter0_d_8_45)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.526955 0.049991V614.95H200.727V538.9H97.377V76.75H200.727V0.049991H0.526955ZM527.727 725.95V111.05H327.527V187.75H430.877V649.25H327.527V725.95H527.727Z"
              fill="#081A89"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_8_45"
              x="0.526978"
              y="0.0500488"
              width="542.2"
              height="740.9"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="15" dy="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.784314 0 0 0 0 0.792157 0 0 0 0 0.854902 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_8_45"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_8_45"
                result="shape"
              />
            </filter>
          </defs>
        </>
      )}
    </svg>
  );
}

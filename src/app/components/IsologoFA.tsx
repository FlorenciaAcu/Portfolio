export function IsologoFA({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FA isologo"
    >
      <rect width="28" height="28" rx="6" fill="#111111" />
      <text
        x="14"
        y="20"
        textAnchor="middle"
        fontFamily="DM Sans, sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="white"
        letterSpacing="-0.5"
      >
        FA
      </text>
    </svg>
  );
}

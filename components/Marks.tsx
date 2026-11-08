/** Registration cross at a cell's top-left. */
export function RegMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`cell__reg ${className}`}
      viewBox="0 0 20 20"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <circle cx="10" cy="10" r="6.5" />
      <path d="M10 0v20M0 10h20" />
    </svg>
  );
}

/** Caption at a cell's top-right: "01 / Code". */
export function Cap({ children }: { children: React.ReactNode }) {
  return <span className="cell__cap label">{children}</span>;
}

/** Crop ticks outside the sheet's four corners (desktop only). */
export function CropTicks() {
  return (
    <>
      <span className="crop crop--tl" aria-hidden="true" />
      <span className="crop crop--tr" aria-hidden="true" />
      <span className="crop crop--bl" aria-hidden="true" />
      <span className="crop crop--br" aria-hidden="true" />
    </>
  );
}

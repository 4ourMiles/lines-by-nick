import type { CSSProperties } from "react";

/**
 * One of Nick's hand-drawn code glyphs from public/ink, shown as ink.
 * Decorative: always aria-hidden. Sized with `w`, tilted with `rot`.
 */
export type GlyphName =
  | "ampersand"
  | "at"
  | "back-slash"
  | "bracket-left"
  | "bracket-right"
  | "colon"
  | "currency"
  | "cursor"
  | "equals"
  | "forward-slash"
  | "left-angle"
  | "left-curl-bracket"
  | "percent"
  | "plus"
  | "right-angle"
  | "right-curley-bracket"
  | "rocket"
  | "root"
  | "semi-colon"
  | "star"
  | "up-chevron";

export function Glyph({
  name,
  w = 64,
  rot = 0,
  className = "",
  style,
}: {
  name: GlyphName;
  w?: number;
  rot?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/ink/${name}.svg`}
      alt=""
      aria-hidden="true"
      className={`glyph ${className}`}
      style={{ "--w": `${w}px`, "--rot": `${rot}deg`, ...style } as CSSProperties}
      draggable={false}
    />
  );
}

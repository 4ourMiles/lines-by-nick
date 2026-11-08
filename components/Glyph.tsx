import type { CSSProperties } from "react";

/**
 * One of Nick's hand-drawn code glyphs from public/ink, shown as ink.
 * Decorative: always aria-hidden.
 *
 * Every glyph is rendered at the same magnification (`scale`, px per
 * drawing unit) so the pen weight stays identical across the page; a glyph
 * is bigger only because Nick drew it bigger. Never size one by width.
 */
export const GLYPHS = {
  ampersand: [145.65, 182.58],
  at: [112.25, 111.37],
  "back-slash": [76.85, 177.77],
  "bracket-left": [53.52, 177.77],
  "bracket-right": [53.52, 177.77],
  colon: [14.71, 60.22],
  currency: [69.42, 186],
  cursor: [139.74, 246.25],
  equals: [74.86, 57.14],
  "forward-slash": [76.85, 177.77],
  "left-angle": [91.01, 85.76],
  "left-curl-bracket": [55.33, 175.32],
  percent: [169.97, 177.77],
  plus: [132.63, 99.42],
  "right-angle": [91.01, 85.76],
  "right-curley-bracket": [55.33, 175.32],
  rocket: [165.87, 85.76],
  root: [245.44, 177.77],
  "semi-colon": [21.93, 75.87],
  star: [54.04, 49.9],
  "up-chevron": [87.81, 58.14],
} as const;

export type GlyphName = keyof typeof GLYPHS;

export function Glyph({
  name,
  scale = 0.6,
  rot = 0,
  className = "",
  style,
}: {
  name: GlyphName;
  /** px per drawing unit; keep one value per context so weights match */
  scale?: number;
  rot?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const [vw, vh] = GLYPHS[name];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/ink/${name}.svg`}
      alt=""
      aria-hidden="true"
      className={`glyph ${className}`}
      width={Math.round(vw * scale)}
      height={Math.round(vh * scale)}
      style={{ "--w": `${vw * scale}px`, "--rot": `${rot}deg`, ...style } as CSSProperties}
      draggable={false}
    />
  );
}

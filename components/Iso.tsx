import type { CSSProperties } from "react";

/**
 * Isometric printed objects, drawn in-house for the screen-print world.
 * SYNTHETIC ILLUSTRATION: authored by the studio's agent, not by Nick;
 * any of these may be replaced with his own drawings.
 *
 * Each scene is two layers of the same geometry: a flat color pass (offset
 * 3px, "flooding under the line") and the ink keyline on top. Boxes are
 * placed in world units (x right-down, y left-down, z up) and drawn
 * back to front in the order given.
 */

const C30 = Math.cos(Math.PI / 6);
const S30 = 0.5;

type P3 = [number, number, number];
type P2 = [number, number];

const pt = ([x, y, z]: P3): P2 => [(x - y) * C30, (x + y) * S30 - z];

type Face = { pts: P3[]; fill: string; key?: boolean };
type Stroke = { from: P3; to: P3; color: string; width?: number };
type Item = Face | Stroke;

const isStroke = (i: Item): i is Stroke => "from" in i;

type BoxColors = { top?: string; left?: string; right?: string };

/** The three visible faces of a box at (x, y, z) with size (w, d, h). */
function box(x: number, y: number, z: number, w: number, d: number, h: number, c: BoxColors): Face[] {
  const faces: Face[] = [];
  if (c.left)
    faces.push({
      pts: [
        [x, y + d, z],
        [x + w, y + d, z],
        [x + w, y + d, z + h],
        [x, y + d, z + h],
      ],
      fill: c.left,
    });
  if (c.right)
    faces.push({
      pts: [
        [x + w, y, z],
        [x + w, y + d, z],
        [x + w, y + d, z + h],
        [x + w, y, z + h],
      ],
      fill: c.right,
    });
  if (c.top)
    faces.push({
      pts: [
        [x, y, z + h],
        [x + w, y, z + h],
        [x + w, y + d, z + h],
        [x, y + d, z + h],
      ],
      fill: c.top,
    });
  return faces;
}

/** A flat shape lying on a plane, keyline optional (default off). */
const flat = (pts: P3[], fill: string, key = false): Face => ({ pts, fill, key });

const line = (from: P3, to: P3, color: string, width = 3): Stroke => ({ from, to, color, width });

const INK = "var(--ink)";
const BONE = "var(--bone)";
const BONE_D = "var(--bone-deep)";
const WHITE = "var(--white)";
const CORAL = "var(--coral)";
const CORAL_D = "var(--coral-deep)";
const COBALT = "var(--cobalt)";
const COBALT_D = "var(--cobalt-deep)";
const YELLOW = "var(--yellow)";
const YELLOW_D = "var(--yellow-deep)";
const MINT = "var(--mint)";
const MINT_D = "var(--mint-deep)";

function Scene({
  items,
  order = 0,
  className = "",
  pad = 10,
}: {
  items: Item[];
  order?: number;
  className?: string;
  pad?: number;
}) {
  const pts2: P2[] = [];
  for (const it of items) {
    if (isStroke(it)) pts2.push(pt(it.from), pt(it.to));
    else for (const p of it.pts) pts2.push(pt(p));
  }
  const xs = pts2.map((p) => p[0]);
  const ys = pts2.map((p) => p[1]);
  const minX = Math.min(...xs) - pad;
  const minY = Math.min(...ys) - pad;
  const w = Math.max(...xs) - minX + pad;
  const h = Math.max(...ys) - minY + pad;
  const poly = (f: Face) => f.pts.map((p) => pt(p).map((n) => n.toFixed(2)).join(",")).join(" ");
  const seg = (s: Stroke) => {
    const a = pt(s.from);
    const b = pt(s.to);
    return { x1: a[0], y1: a[1], x2: b[0], y2: b[1] };
  };
  return (
    <svg
      className={`iso ${className}`}
      viewBox={`${minX.toFixed(2)} ${minY.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)}`}
      aria-hidden="true"
      focusable="false"
    >
      <g className="iso__fill" style={{ "--i": order } as CSSProperties}>
        {items.map((it, i) =>
          isStroke(it) ? (
            <line key={i} {...seg(it)} stroke={it.color} strokeWidth={it.width} />
          ) : (
            <polygon key={i} points={poly(it)} fill={it.fill} />
          ),
        )}
      </g>
      <g className="iso__key">
        {items.map((it, i) =>
          isStroke(it) || it.key === false ? null : <polygon key={i} points={poly(it)} />,
        )}
      </g>
    </svg>
  );
}

/* ---------- objects ---------- */

/** Desk with a monitor running code, a phone, a mug. (code stream lead) */
export function IsoScreens({ order = 0 }: { order?: number }) {
  const items: Item[] = [
    ...box(0, 0, 0, 160, 110, 8, { top: YELLOW, left: YELLOW_D, right: YELLOW_D }),
    ...box(12, 76, 8, 18, 18, 20, { top: WHITE, left: MINT, right: MINT_D }),
    ...box(62, 44, 8, 44, 22, 5, { top: COBALT, left: COBALT_D, right: COBALT_D }),
    ...box(78, 51, 13, 12, 8, 22, { top: COBALT, left: COBALT_D, right: COBALT_D }),
    ...box(32, 58, 35, 104, 6, 64, { top: COBALT, left: WHITE, right: COBALT_D }),
    // code on the screen: short colored lines, longer bone ones
    line([42, 64, 86], [68, 64, 86], CORAL, 4),
    line([74, 64, 86], [104, 64, 86], COBALT, 4),
    line([50, 64, 76], [96, 64, 76], COBALT, 4),
    line([58, 64, 66], [80, 64, 66], MINT_D, 4),
    line([86, 64, 66], [118, 64, 66], COBALT, 4),
    line([50, 64, 56], [72, 64, 56], CORAL, 4),
    line([42, 64, 46], [60, 64, 46], COBALT, 4),
    ...box(128, 20, 8, 24, 6, 46, { top: CORAL, left: WHITE, right: CORAL_D }),
    line([134, 26, 44], [146, 26, 44], COBALT, 3),
    line([134, 26, 36], [148, 26, 36], COBALT, 3),
    line([136, 26, 16], [144, 26, 16], INK, 3),
  ];
  return <Scene items={items} order={order} />;
}

/** Paint tin, loaded brush and an ink pot. (ink stream lead) */
export function IsoPaint({ order = 0 }: { order?: number }) {
  const items: Item[] = [
    ...box(0, 0, 0, 170, 120, 6, { top: WHITE, left: BONE_D, right: BONE_D }),
    // a drawn squiggle on the sheet
    line([20, 20, 6], [60, 24, 6], CORAL, 5),
    line([60, 24, 6], [90, 18, 6], CORAL, 5),
    ...box(110, 16, 6, 30, 30, 34, { top: WHITE, left: INK, right: INK }),
    ...box(44, 46, 6, 60, 60, 68, { top: WHITE, left: CORAL, right: CORAL_D }),
    // label band on the tin
    ...box(44, 46, 28, 60, 60, 20, { left: BONE, right: BONE_D }),
    line([54, 106, 38], [94, 106, 38], INK, 3),
    flat(
      [
        [52, 54, 74],
        [96, 54, 74],
        [96, 98, 74],
        [52, 98, 74],
      ],
      CORAL,
      true,
    ),
    ...box(-6, 100, 6, 112, 12, 11, { top: YELLOW, left: YELLOW, right: YELLOW_D }),
    ...box(106, 100, 6, 16, 12, 11, { top: BONE, left: BONE_D, right: BONE_D }),
    ...box(122, 100, 6, 30, 12, 11, { top: CORAL, left: CORAL, right: CORAL_D }),
  ];
  return <Scene items={items} order={order} />;
}

/** A phone with a notification. (mobile apps) */
export function IsoPhone({ order = 0 }: { order?: number }) {
  const items: Item[] = [
    ...box(0, 0, 0, 48, 9, 92, { top: COBALT, left: WHITE, right: COBALT_D }),
    line([10, 9, 74], [38, 9, 74], COBALT, 4),
    line([10, 9, 62], [30, 9, 62], CORAL, 4),
    line([10, 9, 52], [36, 9, 52], COBALT, 4),
    line([10, 9, 42], [24, 9, 42], MINT_D, 4),
    line([16, 9, 10], [32, 9, 10], INK, 3),
    ...box(40, -22, 60, 40, 10, 20, { top: YELLOW, left: YELLOW, right: YELLOW_D }),
    line([48, -12, 70], [72, -12, 70], INK, 3),
  ];
  return <Scene items={items} order={order} />;
}

/** Stacked data slabs with a cube on top. (Salesforce + Microsoft) */
export function IsoStack({ order = 0 }: { order?: number }) {
  const items: Item[] = [
    ...box(0, 0, 0, 90, 90, 16, { top: WHITE, left: COBALT, right: COBALT_D }),
    ...box(0, 0, 16, 90, 90, 16, { top: WHITE, left: COBALT, right: COBALT_D }),
    ...box(0, 0, 32, 90, 90, 16, { top: WHITE, left: COBALT, right: COBALT_D }),
    line([10, 90, 8], [30, 90, 8], MINT, 4),
    line([10, 90, 24], [36, 90, 24], MINT, 4),
    line([10, 90, 40], [24, 90, 40], CORAL, 4),
    ...box(26, 26, 48, 38, 38, 30, { top: YELLOW, left: YELLOW, right: YELLOW_D }),
  ];
  return <Scene items={items} order={order} />;
}

/** Three cubes plugged together. (AI + MCP) */
export function IsoCubes({ order = 0 }: { order?: number }) {
  const items: Item[] = [
    ...box(0, 40, 0, 42, 42, 42, { top: MINT, left: MINT, right: MINT_D }),
    line([42, 61, 21], [60, 61, 21], INK, 3),
    ...box(60, 40, 0, 42, 42, 42, { top: COBALT, left: COBALT, right: COBALT_D }),
    line([81, 40, 21], [81, 24, 21], INK, 3),
    ...box(50, -18, 0, 42, 42, 42, { top: YELLOW, left: YELLOW, right: YELLOW_D }),
    line([30, 0, 54], [50, 0, 54], CORAL, 4),
    ...box(8, -10, 46, 22, 22, 16, { top: CORAL, left: CORAL, right: CORAL_D }),
  ];
  return <Scene items={items} order={order} />;
}

/** A stack of business cards. (brand + logo) */
export function IsoCards({ order = 0 }: { order?: number }) {
  const items: Item[] = [
    ...box(0, 0, 0, 96, 60, 5, { top: WHITE, left: BONE_D, right: BONE_D }),
    ...box(12, 10, 5, 96, 60, 5, { top: COBALT, left: COBALT_D, right: COBALT_D }),
    ...box(24, 20, 10, 96, 60, 5, { top: CORAL, left: CORAL_D, right: CORAL_D }),
    ...box(36, 30, 15, 96, 60, 5, { top: WHITE, left: BONE_D, right: BONE_D }),
    line([50, 46, 20], [86, 46, 20], INK, 4),
    line([50, 58, 20], [72, 58, 20], CORAL, 4),
    flat(
      [
        [104, 36, 20],
        [122, 36, 20],
        [122, 54, 20],
        [104, 54, 20],
      ],
      YELLOW,
      true,
    ),
  ];
  return <Scene items={items} order={order} />;
}

/** A pencil on a sheet with a drawn line. (illustration) */
export function IsoPencil({ order = 0 }: { order?: number }) {
  const tip: P3 = [-26, 7, 7];
  const items: Item[] = [
    ...box(-30, -10, 0, 170, 110, 5, { top: WHITE, left: BONE_D, right: BONE_D }),
    line([-10, 60, 5], [30, 70, 5], COBALT, 5),
    line([30, 70, 5], [70, 56, 5], COBALT, 5),
    line([70, 56, 5], [110, 72, 5], COBALT, 5),
    // pencil along x, lying on the sheet
    { pts: [[0, 14, 5], [0, 14, 19], tip], fill: BONE, key: true },
    { pts: [[0, 0, 19], [0, 14, 19], tip], fill: BONE_D, key: true },
    ...box(0, 0, 5, 118, 14, 14, { top: YELLOW, left: YELLOW, right: YELLOW_D }),
    ...box(118, 0, 5, 10, 14, 14, { top: MINT, left: MINT, right: MINT_D }),
    ...box(128, 0, 5, 14, 14, 14, { top: CORAL, left: CORAL, right: CORAL_D }),
  ];
  return <Scene items={items} order={order} />;
}

/** A tablet with a wireframe and one real button. (UI/UX, a fold: code object on the ink side) */
export function IsoWire({ order = 0 }: { order?: number }) {
  const items: Item[] = [
    ...box(0, 0, 0, 120, 86, 7, { top: WHITE, left: INK, right: INK }),
    line([12, 12, 7], [60, 12, 7], INK, 3),
    line([12, 26, 7], [108, 26, 7], BONE_D, 4),
    line([12, 38, 7], [96, 38, 7], BONE_D, 4),
    line([12, 50, 7], [104, 50, 7], BONE_D, 4),
    ...box(66, 60, 7, 42, 16, 5, { top: CORAL, left: CORAL_D, right: CORAL_D }),
    ...box(12, 60, 7, 40, 16, 5, { top: COBALT, left: COBALT_D, right: COBALT_D }),
  ];
  return <Scene items={items} order={order} />;
}

/** Pages with a highlight and a search tag. (CMS + SEO) */
export function IsoPages({ order = 0 }: { order?: number }) {
  const items: Item[] = [
    ...box(0, 0, 0, 100, 130, 4, { top: WHITE, left: BONE_D, right: BONE_D }),
    ...box(10, -8, 4, 100, 130, 4, { top: WHITE, left: BONE_D, right: BONE_D }),
    ...box(20, -16, 8, 100, 130, 4, { top: WHITE, left: BONE_D, right: BONE_D }),
    line([32, -2, 12], [96, -2, 12], INK, 4),
    line([32, 14, 12], [108, 14, 12], BONE_D, 4),
    flat(
      [
        [32, 26, 12],
        [104, 26, 12],
        [104, 40, 12],
        [32, 40, 12],
      ],
      YELLOW,
      true,
    ),
    line([32, 54, 12], [100, 54, 12], BONE_D, 4),
    line([32, 68, 12], [84, 68, 12], BONE_D, 4),
    ...box(70, 84, 12, 44, 20, 10, { top: MINT, left: MINT, right: MINT_D }),
    line([78, 104, 17], [104, 104, 17], INK, 3),
  ];
  return <Scene items={items} order={order} />;
}

/** An envelope. (contact) */
export function IsoEnvelope({ order = 0 }: { order?: number }) {
  const items: Item[] = [
    ...box(0, 0, 0, 120, 80, 9, { top: WHITE, left: BONE_D, right: BONE_D }),
    flat(
      [
        [0, 0, 9],
        [120, 0, 9],
        [60, 48, 9],
      ],
      CORAL,
      true,
    ),
    ...box(84, 54, 9, 26, 18, 3, { top: YELLOW, left: YELLOW_D, right: YELLOW_D }),
  ];
  return <Scene items={items} order={order} />;
}

/** A payment card and coins. (pay) */
export function IsoPayCard({ order = 0 }: { order?: number }) {
  const items: Item[] = [
    ...box(0, 0, 0, 110, 70, 6, { top: COBALT, left: COBALT_D, right: COBALT_D }),
    ...box(14, 16, 6, 18, 14, 2, { top: YELLOW, left: YELLOW_D, right: YELLOW_D }),
    line([14, 46, 6], [60, 46, 6], BONE, 4),
    line([14, 58, 6], [40, 58, 6], BONE, 4),
    ...box(118, 30, 0, 26, 26, 5, { top: YELLOW, left: YELLOW_D, right: YELLOW_D }),
    ...box(118, 30, 5, 26, 26, 5, { top: YELLOW, left: YELLOW_D, right: YELLOW_D }),
    ...box(118, 30, 10, 26, 26, 5, { top: YELLOW, left: YELLOW_D, right: YELLOW_D }),
  ];
  return <Scene items={items} order={order} />;
}

/** A brief on a clipboard. (start a project) */
export function IsoBrief({ order = 0 }: { order?: number }) {
  const items: Item[] = [
    ...box(0, 0, 0, 110, 140, 6, { top: COBALT, left: COBALT_D, right: COBALT_D }),
    ...box(8, 8, 6, 94, 124, 3, { top: WHITE, left: BONE_D, right: BONE_D }),
    ...box(40, -4, 9, 30, 16, 6, { top: INK, left: INK, right: INK }),
    line([20, 32, 9], [70, 32, 9], INK, 4),
    line([20, 48, 9], [90, 48, 9], BONE_D, 4),
    line([20, 60, 9], [84, 60, 9], BONE_D, 4),
    line([20, 72, 9], [92, 72, 9], BONE_D, 4),
    ...box(20, 92, 9, 28, 14, 4, { top: YELLOW, left: YELLOW_D, right: YELLOW_D }),
    ...box(54, 92, 9, 36, 14, 4, { top: MINT, left: MINT_D, right: MINT_D }),
    ...box(20, 114, 9, 44, 14, 6, { top: CORAL, left: CORAL_D, right: CORAL_D }),
  ];
  return <Scene items={items} order={order} />;
}

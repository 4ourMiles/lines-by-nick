import type { ReactNode } from "react";
import { RegMark, Cap } from "./Marks";

/**
 * Inner-page hero: one stream. A bone copy cell and a color cell holding a
 * printed object, sharing the seam.
 */
export function PageHero({
  kicker,
  title,
  accent,
  lede,
  actions,
  art,
  tone = "cobalt",
}: {
  kicker: string;
  title: string;
  accent: string;
  lede: string;
  actions?: ReactNode;
  art: ReactNode;
  tone?: "cobalt" | "coral" | "yellow" | "mint";
}) {
  return (
    <>
      <section className="cell phero" id="top">
        <RegMark />
        <Cap>{kicker}</Cap>
        <div className="cell__head">
          <h1 className="display display--sm phero__title">
            {title} <span className="block block--coral phero__accent">{accent}</span>
          </h1>
          <p className="lede">{lede}</p>
          {actions && <div className="phero__actions">{actions}</div>}
        </div>
      </section>
      <section className={`cell cell--${tone} phero__art`} aria-hidden="true">
        <div className="phero__object">{art}</div>
      </section>
    </>
  );
}

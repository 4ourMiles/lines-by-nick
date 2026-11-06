import type { ReactNode } from "react";

/**
 * Inner-page hero: the home hero's grammar at a shorter height.
 * Cyan field over the brick wallpaper, display title with one outlined word,
 * lede, and a slab of page-specific art on the right that stacks under the
 * copy on phones. Shares the home hero's load-in clock (see inner.css).
 */
export function PageHero({
  kicker,
  title,
  accent,
  lede,
  actions,
  art,
}: {
  kicker?: string;
  title: string;
  accent?: string;
  lede: string;
  actions?: ReactNode;
  art?: ReactNode;
}) {
  return (
    <section className="phero hero-world" id="top">
      <div className="container phero__grid">
        <div className="phero__copy">
          {kicker && <span className="tag phero__kicker">{kicker}</span>}
          <h1 className="display phero__title">
            {title}
            {accent && (
              <>
                {" "}
                <span className="phero__accent">{accent}</span>
              </>
            )}
          </h1>
          <p className="lede phero__lede">{lede}</p>
          {actions && <div className="phero__actions">{actions}</div>}
        </div>
        {art && <div className="phero__art">{art}</div>}
      </div>
    </section>
  );
}

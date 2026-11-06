import { MARK_SVG } from "./mark.svg";

const FACES_ONLY = MARK_SVG.replace('role="img" aria-label="LbN lettermark"', 'aria-hidden="true"');

/**
 * The brand mark inlined. `layered` renders it twice: the navy sides sit on a lower plane than the
 * coloured faces, so a 3D tilt shows real depth between them.
 */
export function Mark({ className, layered = false }: { className?: string; layered?: boolean }) {
  if (!layered) {
    return <span className={className} dangerouslySetInnerHTML={{ __html: MARK_SVG }} />;
  }
  return (
    <span className={className}>
      <span className="mark-layer mark-layer--sides" dangerouslySetInnerHTML={{ __html: MARK_SVG }} />
      <span className="mark-layer mark-layer--faces" dangerouslySetInnerHTML={{ __html: FACES_ONLY }} />
    </span>
  );
}

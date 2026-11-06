export const REFUND_POLICY =
  "Refund Policy: We offer a 30-day refund policy on all digital services, provided that the work has not been delivered or started. For custom services, please contact us for details.";

/** Legal strip: refund policy and copyright. Lives under the home ticker and inside the inner-page footer. */
export function Legal({ className = "" }: { className?: string }) {
  const year = new Date().getFullYear();
  return (
    <div className={`legal ${className}`.trim()}>
      <div className="container legal__grid">
        <p className="legal__policy">{REFUND_POLICY}</p>
        <p className="legal__copy">© {year} LBN Design. All rights reserved.</p>
      </div>
    </div>
  );
}

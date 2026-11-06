// PLACEHOLDER: replace with the studio's real inbox before launch.
export const CONTACT_EMAIL = "hello@lbn.design";
export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "New project for LBN Design",
)}`;

/** Routes */
export const START_HREF = "/start-a-project";
export const CONTACT_PAGE_HREF = "/contact";

/**
 * PLACEHOLDER: paste a Stripe Payment Link (https://buy.stripe.com/...) here.
 * The /pay page stays disabled until this no longer contains REPLACE_ME.
 */
export const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/REPLACE_ME";
export const STRIPE_LINK_READY = !STRIPE_PAYMENT_LINK.includes("REPLACE_ME");

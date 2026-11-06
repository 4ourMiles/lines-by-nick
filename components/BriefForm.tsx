"use client";

import { useId, useState } from "react";
import { CONTACT_EMAIL } from "./contact";

type Variant = "brief" | "contact";

const NEEDS = ["A website", "A mobile app", "Salesforce help", "A brand or logo", "Something else"];
const BUDGETS = ["Not sure yet", "Under $5k", "$5k to $15k", "$15k to $40k", "$40k+"];
const TIMELINES = ["Not sure yet", "As soon as possible", "In the next 1 to 3 months", "Later this year"];

/**
 * No back end yet: the form composes an email to the studio inbox with the
 * answers filled in, and offers a copy-to-clipboard fallback.
 */
export function BriefForm({ variant = "brief" }: { variant?: Variant }) {
  const id = useId();
  const [needs, setNeeds] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sent" | "copied" | "error">("idle");

  const toggleNeed = (n: string) =>
    setNeeds((cur) => (cur.includes(n) ? cur.filter((x) => x !== n) : [...cur, n]));

  const compose = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const lines = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      get("company") && `Business: ${get("company")}`,
      variant === "brief" && needs.length && `Needs: ${needs.join(", ")}`,
      variant === "brief" && `Budget: ${get("budget")}`,
      variant === "brief" && `Timeline: ${get("timeline")}`,
      "",
      get("message"),
    ].filter((l) => l !== false && l !== "" && l !== undefined) as string[];
    const subject =
      variant === "brief"
        ? `New project: ${get("name") || "brief"}${get("company") ? ` (${get("company")})` : ""}`
        : `Hello from ${get("name") || "the website"}`;
    return { subject, body: lines.join("\n") };
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) {
      setStatus("error");
      return;
    }
    const { subject, body } = compose(form);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  };

  const onCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.form;
    if (!form) return;
    const { subject, body } = compose(form);
    try {
      await navigator.clipboard.writeText(`${subject}\n\n${body}`);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="form slab" onSubmit={onSubmit} noValidate={false}>
      <div className="form__row form__row--2">
        <div className="field">
          <label htmlFor={`${id}-name`}>Your name</label>
          <input id={`${id}-name`} name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor={`${id}-email`}>Email</label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${id}-company`}>
          Business or project name <span className="field__opt">optional</span>
        </label>
        <input id={`${id}-company`} name="company" type="text" autoComplete="organization" />
      </div>

      {variant === "brief" && (
        <>
          <fieldset className="field">
            <legend>What do you need?</legend>
            <div className="chips">
              {NEEDS.map((n) => {
                const on = needs.includes(n);
                return (
                  <button
                    key={n}
                    type="button"
                    className={`tag route__toggle${on ? " tag--cyan" : ""}`}
                    aria-pressed={on}
                    onClick={() => toggleNeed(n)}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="form__row form__row--2">
            <div className="field">
              <label htmlFor={`${id}-budget`}>Budget</label>
              <select id={`${id}-budget`} name="budget" defaultValue={BUDGETS[0]}>
                {BUDGETS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor={`${id}-timeline`}>Timeline</label>
              <select id={`${id}-timeline`} name="timeline" defaultValue={TIMELINES[0]}>
                {TIMELINES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}

      <div className="field">
        <label htmlFor={`${id}-message`}>
          {variant === "brief" ? "Tell us about it" : "Your message"}
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={variant === "brief" ? 6 : 5}
          required
          placeholder={
            variant === "brief"
              ? "What are you trying to do, who is it for, and what is in the way?"
              : "What can we help with?"
          }
        />
      </div>

      <div className="form__actions">
        <button type="submit" className="btn btn--primary">
          {variant === "brief" ? "Send the brief" : "Send message"}
        </button>
        <button type="button" className="btn" onClick={onCopy}>
          Copy instead
        </button>
      </div>

      <p className="form__note muted" aria-live="polite">
        {status === "idle" &&
          `Sending opens your email app with everything filled in, addressed to ${CONTACT_EMAIL}.`}
        {status === "sent" &&
          `Your email app should be open with the brief filled in. If nothing happened, use "Copy instead" and paste it into an email to ${CONTACT_EMAIL}.`}
        {status === "copied" && `Copied. Paste it into an email to ${CONTACT_EMAIL}.`}
        {status === "error" && "Please fill in the required fields, then try again."}
      </p>
    </form>
  );
}

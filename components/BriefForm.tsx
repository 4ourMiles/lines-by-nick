"use client";

import { useId, useState } from "react";
import { CONTACT_EMAIL } from "./contact";

type Variant = "brief" | "contact";
type Status = "idle" | "sending" | "sent" | "error";

const NEEDS = ["A website", "A mobile app", "Salesforce help", "A brand or logo", "Something else"];
const BUDGETS = ["Not sure yet", "Under $5k", "$5k to $15k", "$15k to $40k", "$40k+"];
const TIMELINES = ["Not sure yet", "As soon as possible", "In the next 1 to 3 months", "Later this year"];

/**
 * Posts to Netlify Forms. The forms are registered for Netlify in
 * public/__forms.html (same names and fields); submissions show up under
 * Forms in the Netlify dashboard and are emailed from there. If the post
 * fails (local dev, network), the note offers a pre-filled email instead.
 */
export function BriefForm({ variant = "brief" }: { variant?: Variant }) {
  const id = useId();
  const [needs, setNeeds] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState("");
  const [fallback, setFallback] = useState("");

  const toggleNeed = (n: string) =>
    setNeeds((cur) => (cur.includes(n) ? cur.filter((x) => x !== n) : [...cur, n]));

  const read = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const fields: Record<string, string> = {
      "form-name": variant,
      name: get("name"),
      email: get("email"),
      company: get("company"),
      message: get("message"),
    };
    if (variant === "brief") {
      fields.needs = needs.join(", ");
      fields.budget = get("budget");
      fields.timeline = get("timeline");
    }
    return fields;
  };

  const mailtoFor = (f: Record<string, string>) => {
    const subject =
      variant === "brief"
        ? `New project: ${f.name || "brief"}${f.company ? ` (${f.company})` : ""}`
        : `Hello from ${f.name || "the website"}`;
    const body = [
      `Name: ${f.name}`,
      `Email: ${f.email}`,
      f.company && `Business: ${f.company}`,
      f.needs && `Needs: ${f.needs}`,
      f.budget && `Budget: ${f.budget}`,
      f.timeline && `Timeline: ${f.timeline}`,
      "",
      f.message,
    ]
      .filter((l): l is string => Boolean(l))
      .join("\n");
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) {
      setStatus("error");
      setFallback("");
      return;
    }
    const fields = read(form);
    setStatus("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(fields).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSentTo(fields.email);
      setStatus("sent");
    } catch {
      setFallback(mailtoFor(fields));
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="form form--sent" role="status">
        <span className="tag tag--mint">Sent</span>
        <h3 className="headline form__sent-head">Got it.</h3>
        <p className="form__sent-text">
          {variant === "brief"
            ? "Your brief is in. We read every one and will reply"
            : "Your message is in. We will reply"}{" "}
          to <b>{sentTo}</b> within a couple of working days.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form"
      name={variant}
      method="POST"
      action="/__forms.html"
      onSubmit={onSubmit}
      noValidate={false}
    >
      <input type="hidden" name="form-name" value={variant} />
      <p className="visually-hidden" aria-hidden="true">
        <label>
          Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

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
                    className="tag tag--toggle"
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
        <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
          {status === "sending"
            ? "Sending…"
            : variant === "brief"
              ? "Send the brief"
              : "Send message"}
        </button>
      </div>

      <p className="form__note muted" aria-live="polite">
        {status === "idle" && "We reply by email, usually within a couple of working days."}
        {status === "sending" && "Sending…"}
        {status === "error" && !fallback && "Please fill in the required fields, then try again."}
        {status === "error" && fallback && (
          <>
            That did not go through. Try again, or{" "}
            <a href={fallback}>send it as an email</a> to {CONTACT_EMAIL} instead.
          </>
        )}
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { profile } from "@/content/profile";

type SubmitState = "idle" | "sending" | "sent" | "error";

function buildMailto(subject: string, body: string) {
  return `${profile.contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const payload = {
      name,
      email,
      message,
      _subject: subject || `Portfolio message from ${name}`,
      _replyto: email,
      _template: "table",
      _captcha: "false",
    };

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${profile.contact.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) throw new Error("FormSubmit request failed");
      const data = (await res.json()) as { success?: string | boolean };
      if (!data.success) throw new Error("FormSubmit rejected");

      setStatus("sent");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      // Fallback: open the visitor's mail app if the network submit fails.
      const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
      window.location.href = buildMailto(subject, body);
      setStatus("error");
    }
  }

  function resetForm() {
    setStatus("idle");
  }

  return (
    <section id="contact" className="section-shell text-left">
      <FadeIn>
        <header className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blossom">
            <span className="h-px w-6 bg-blossom/70" aria-hidden />
            Let&apos;s talk
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact
          </h2>
          <p className="mt-3 text-base font-medium text-white/75 sm:text-lg">
            Open to HR Executive and Talent Acquisition conversations.
          </p>
        </header>
      </FadeIn>

      <div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-8">
        <FadeIn delay={0.06} className="min-w-0">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blossom">
              Reach directly
            </p>

            <a
              href={profile.contact.emailHref}
              className="card-glow card-glow-hover group flex min-w-0 items-start gap-4 rounded-2xl bg-accent/30 p-5 transition sm:p-6"
            >
              <span
                aria-hidden
                className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#002a56]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-blossom/90">
                  Email
                </span>
                <span className="mt-1.5 block wrap-break-word text-base font-semibold leading-snug text-white transition group-hover:text-blossom sm:text-lg">
                  {profile.contact.email}
                </span>
              </span>
            </a>

            <a
              href={profile.contact.phoneHref}
              className="card-glow card-glow-hover group flex min-w-0 items-start gap-4 rounded-2xl p-5 transition sm:p-6"
            >
              <span
                aria-hidden
                className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#002a56]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-blossom/90">
                  Phone
                </span>
                <span className="mt-1.5 block text-base font-semibold leading-snug text-white transition group-hover:text-blossom sm:text-lg">
                  {profile.contact.phone}
                </span>
              </span>
            </a>

            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow card-glow-hover group flex min-w-0 items-start gap-4 rounded-2xl p-5 transition sm:p-6"
            >
              <span
                aria-hidden
                className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#002a56]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-blossom/90">
                  LinkedIn
                </span>
                <span className="mt-1.5 block wrap-break-word text-base font-semibold leading-snug text-white transition group-hover:text-blossom sm:text-lg">
                  {profile.contact.linkedinLabel}
                </span>
              </span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="min-w-0">
          <div className="card-glow rounded-2xl p-5 sm:p-7">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blossom">
              Send a message
            </p>

            {status === "sent" ? (
              <div className="flex flex-col items-start gap-4 py-4">
                <p className="text-base font-medium leading-relaxed text-white/85 sm:text-lg">
                  Message sent. You should receive a reply at the email you
                  shared.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-blossom/40 hover:bg-accent"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-3.5"
              >
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <Field
                    id="contact-name"
                    label="Your name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={setName}
                    autoComplete="name"
                    required
                  />
                  <Field
                    id="contact-email"
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={setEmail}
                    autoComplete="email"
                    required
                  />
                </div>
                <Field
                  id="contact-subject"
                  label="Subject"
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={setSubject}
                  required
                />
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-white/55"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-34 resize-y"
                  />
                </div>

                {status === "error" ? (
                  <p className="text-sm text-blossom">
                    Couldn&apos;t send from the browser — your email app should
                    open as a backup. Or email{" "}
                    <a
                      href={profile.contact.emailHref}
                      className="underline underline-offset-2 hover:text-white"
                    >
                      {profile.contact.email}
                    </a>{" "}
                    directly.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-1 w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-accent-deep disabled:cursor-wait disabled:opacity-70 sm:py-4 sm:text-base"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  name,
  value,
  onChange,
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-white/55"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        required={required}
      />
    </div>
  );
}

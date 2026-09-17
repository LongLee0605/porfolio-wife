"use client";

import { useState } from "react";
import { FadeIn } from "@/components/atoms/FadeIn";
import { profile } from "@/content/profile";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
    const mailto = `${profile.contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  function resetForm() {
    setSubmitted(false);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <section id="contact" className="section-shell text-center">
      <FadeIn>
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blossom">
          <span className="h-px w-6 bg-blossom/70" aria-hidden />
          Let&apos;s talk
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">Contact</h2>
        <p className="mx-auto mt-3 max-w-xl text-base font-medium text-white/80 sm:text-lg">
          Open to HR Executive and Talent Acquisition conversations.
        </p>
      </FadeIn>

      <FadeIn delay={0.08} className="mx-auto mt-10 max-w-[700px]">
        <div className="card-glow rounded-2xl p-5 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-6">
              <p className="text-lg font-medium text-blossom">
                Thanks! Your email app should open so you can send the message.
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
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 text-left">
              <label className="sr-only" htmlFor="contact-name">
                Your name
              </label>
              <input
                id="contact-name"
                placeholder="Your Name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
              <label className="sr-only" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <label className="sr-only" htmlFor="contact-subject">
                Subject
              </label>
              <input
                id="contact-subject"
                placeholder="Subject"
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <label className="sr-only" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                placeholder="Message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-accent-deep sm:py-4 sm:text-base"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="mt-6 flex flex-col items-center gap-2 text-sm text-white/65 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href={profile.contact.emailHref}
            className="break-all transition hover:text-blossom"
          >
            {profile.contact.email}
          </a>
          <span className="hidden sm:inline" aria-hidden>
            ·
          </span>
          <a
            href={profile.contact.phoneHref}
            className="transition hover:text-blossom"
          >
            {profile.contact.phone}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

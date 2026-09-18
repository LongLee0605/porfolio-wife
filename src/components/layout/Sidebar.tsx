"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AvatarBgAnimation } from "@/components/ui/AvatarBgAnimation";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { profile } from "@/content/profile";
import { handleHashNavigation } from "@/lib/scroll";
import { siteConfig } from "@/lib/seo";
import { cn } from "@/lib/utils";

function getActiveSectionId(ids: string[]) {
  const probe = Math.min(window.innerHeight * 0.28, 180);
  let activeId = ids[0] ?? "overview";

  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top;
    if (top - probe <= 0) {
      activeId = id;
    }
  }

  return activeId;
}

export function Sidebar() {
  const [active, setActive] = useState(profile.nav[0]?.id ?? "overview");

  useEffect(() => {
    const ids = profile.nav.map((item) => item.id);

    const sync = () => {
      setActive(getActiveSectionId(ids));
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync, { passive: true });
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);

  return (
    <aside className="relative z-10 w-full overflow-hidden border-b border-white/10 bg-mist lg:fixed lg:left-0 lg:top-0 lg:z-20 lg:flex lg:h-dvh lg:w-[360px] lg:min-w-[320px] lg:flex-col lg:border-b-0 lg:border-r lg:border-white/10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(9,88,167,0.45), transparent 50%), radial-gradient(circle at 90% 90%, rgba(0,42,86,0.9), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center gap-3 px-4 py-6 text-center sm:gap-3.5 sm:px-6 sm:py-7 lg:max-w-none lg:h-full lg:justify-center lg:gap-3.5 lg:overflow-hidden lg:px-7 lg:py-6">
        <div className="relative z-10 flex w-full flex-col items-center gap-2.5 sm:gap-3">
          <div className="relative flex h-36 w-36 shrink-0 items-center justify-center overflow-visible sm:h-40 sm:w-40 lg:h-52 lg:w-52">
            <AvatarBgAnimation className="absolute -inset-6 opacity-95 sm:-inset-7 lg:-inset-12" />
            <Image
              src={siteConfig.images.portrait}
              alt={siteConfig.images.alt}
              width={176}
              height={176}
              priority
              quality={90}
              className="relative z-10 h-28 w-28 rounded-full border-2 border-white/85 object-cover object-[center_18%] shadow-[0_0_28px_rgba(9,88,167,0.5)] sm:h-32 sm:w-32 lg:h-44 lg:w-44"
            />
          </div>

          <div className="min-w-0 w-full px-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blossom sm:text-[11px]">
              {profile.title} · {profile.locationCity}
            </p>
            <h1 className="mt-1.5 text-xl font-bold leading-tight text-white sm:text-2xl lg:text-[1.7rem]">
              {profile.name}
            </h1>
            <p className="mt-1.5 text-sm font-semibold text-white/90 sm:text-base">
              I am a{" "}
              <TypeWriter words={profile.roles} className="text-blossom" />
            </p>
          </div>
        </div>

        <p className="relative z-10 max-w-sm px-1 text-sm leading-snug text-white/75 lg:leading-relaxed">
          {profile.tagline}
        </p>

        <nav
          aria-label="Primary"
          className="relative z-10 flex w-full max-w-md flex-wrap justify-center gap-2 lg:max-w-none lg:flex-col lg:items-stretch lg:gap-0.5"
        >
          {profile.nav.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  setActive(item.id);
                  handleHashNavigation(e, item.href);
                }}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm font-semibold transition sm:px-3.5 sm:py-2 lg:rounded-lg lg:px-3 lg:py-1.5 lg:text-left lg:text-[0.95rem]",
                  isActive
                    ? "border-blossom/40 bg-accent text-white lg:border-accent/40 lg:bg-accent/30"
                    : "border-white/15 bg-white/5 text-white/85 hover:border-blossom/40 hover:bg-accent/40 hover:text-white lg:border-transparent lg:bg-transparent lg:hover:bg-white/5 lg:hover:text-blossom",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5 pb-1 pt-1 sm:pb-2">
          <SocialLink href={profile.contact.linkedin} label="LinkedIn" external>
            <LinkedInIcon />
          </SocialLink>
          <SocialLink href={profile.contact.emailHref} label="Email">
            <MailIcon />
          </SocialLink>
          <SocialLink href={profile.contact.phoneHref} label="Phone">
            <PhoneIcon />
          </SocialLink>
        </div>
      </div>
    </aside>
  );
}

function SocialLink({
  href,
  label,
  children,
  external,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#002a56] shadow-sm transition hover:scale-105 hover:bg-accent hover:text-white"
    >
      {children}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M6.94 6.5A1.94 1.94 0 1 1 5 4.56 1.94 1.94 0 0 1 6.94 6.5ZM7 8.75H3.5V20H7Zm4.03 0H7.56V20h3.47v-5.9c0-1.56.3-3.07 2.23-3.07 1.9 0 1.88 1.78 1.88 3.17V20H18.6v-6.45c0-3.17-.68-5.6-4.38-5.6a3.82 3.82 0 0 0-3.19 1.56V8.75Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

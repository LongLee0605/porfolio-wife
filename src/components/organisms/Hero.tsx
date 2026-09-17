"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { profile } from "@/content/profile";
import { siteConfig } from "@/lib/seo";

export function Hero() {
  const reduce = useReducedMotion();
  const loop = [...profile.focusAreas, ...profile.focusAreas];

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative isolate min-h-[100svh] overflow-hidden bg-sea-atmosphere"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_70%_40%,rgba(158,207,224,0.22),transparent_55%)]"
      />

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 mx-auto h-[72%] max-w-5xl sm:h-[78%] sm:max-w-none lg:inset-y-0 lg:right-0 lg:left-auto lg:h-full lg:w-[54%]"
        initial={reduce ? false : { opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <Image
          src={siteConfig.images.portrait}
          alt={siteConfig.images.alt}
          fill
          priority
          quality={88}
          sizes="(max-width: 1024px) 90vw, 54vw"
          className="object-contain object-bottom drop-shadow-[0_24px_60px_rgba(15,44,58,0.28)] lg:object-[center_bottom]"
        />
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 -z-[5] bg-gradient-to-t from-night/70 via-night/20 to-night/35 sm:via-night/10 lg:bg-gradient-to-r lg:from-night/78 lg:via-night/40 lg:to-transparent"
      />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-28 pt-28 sm:justify-center sm:pb-32 sm:pt-28 lg:justify-center lg:pb-24">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-blossom"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {profile.title} · {profile.locationCity}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <Heading
              as="h1"
              size="display"
              className="text-surface-elevated drop-shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            >
              {profile.nameLines[0]}
              <br />
              {profile.nameLines[1]}
            </Heading>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Text size="lg" className="mt-6 max-w-lg text-white/85 sm:mt-7">
              {profile.tagline}
            </Text>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3 sm:mt-9"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32 }}
          >
            <Button href="#contact" size="lg" variant="onDark">
              Get in touch
            </Button>
            <Button
              href={profile.contact.linkedin}
              variant="ghost"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/25 bg-white/5 text-surface-elevated backdrop-blur-sm hover:border-white/40 hover:bg-white/10 hover:text-surface-elevated hover:no-underline"
            >
              LinkedIn profile
            </Button>
          </motion.div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-night/45 py-3.5 backdrop-blur-md">
        <div className="overflow-hidden">
          <div
            className={
              reduce
                ? "flex whitespace-nowrap"
                : "marquee-track flex whitespace-nowrap"
            }
            style={reduce ? undefined : { width: "max-content" }}
          >
            {loop.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="mx-5 inline-flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 sm:mx-6 sm:text-sm"
              >
                {item}
                <span
                  className="h-1.5 w-1.5 rounded-full bg-blossom"
                  aria-hidden
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={siteConfig.images.portrait}
          alt={siteConfig.images.alt}
          fill
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQEBAVFRUVFRUVFRUVFRUWFxUXFhUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAAEAAQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgAEBwIDAf/EADkQAAIBAgQDBgQFAwUAAAAAAAECAwQRAAUSITEGQVFhEyJxMoGRoQcjQlLB0fAVYnLxFjOCkv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EACIRAAICAQQCAwEAAAAAAAAAAAABAhEDBBIhMQVBEyJRYf/aAAwDAQACEQMRAD8A7jRRRQBRRRQBRRRQBRRRQBRRRQH/2Q=="
          className="object-cover object-[center_18%] sm:object-[center_15%] lg:object-[72%_12%] [image-rendering:auto] contrast-[1.04] saturate-[1.05]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-night/65 via-night/40 to-night/75 sm:from-night/60 sm:via-night/32 sm:to-night/70 lg:bg-gradient-to-r lg:from-night/82 lg:via-night/40 lg:to-night/10"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-night/85 to-transparent lg:hidden"
        />
      </div>

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

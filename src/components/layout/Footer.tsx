import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-medium text-white/80 sm:text-base">
        Built and designed for {profile.name}
      </p>
      <p className="mt-1.5 text-xs text-white/45 sm:text-sm">
        Copyright © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
}

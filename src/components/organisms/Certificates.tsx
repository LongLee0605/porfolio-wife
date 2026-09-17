import { profile } from "@/content/profile";

export function Certificates() {
  return (
    <section
      id="certificate"
      className="flex flex-col items-center px-4 py-8 text-center sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <h2 className="text-2xl font-bold sm:text-3xl">CERTIFICATE</h2>
      <p className="mt-3 max-w-2xl text-base font-medium text-white/80 sm:text-lg">
        Language credentials and digital literacy certifications that support
        cross-border hiring.
      </p>

      <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profile.certificates.map((cert) => (
          <div
            key={`${cert.name}-${cert.year ?? ""}`}
            className="card-glow card-glow-hover rounded-2xl px-4 py-6"
          >
            <p className="text-base font-bold text-white sm:text-lg">{cert.name}</p>
            <p className="mt-2 text-sm text-white/55">
              {[cert.year, cert.note].filter(Boolean).join(" · ") || "Credential"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

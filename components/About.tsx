import { profile } from "@/data/site";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[200px_1fr]">
        <h2 className="font-display text-2xl tracking-tight text-foreground">À propos</h2>
        <div className="max-w-2xl space-y-5 text-[15px] leading-relaxed text-muted">
          <p className="text-foreground">{profile.bio}</p>
          <p>
            Diplômé d&apos;une licence professionnelle en sécurité informatique et cybersécurité,
            j&apos;ai travaillé sur le terrain : installation et câblage d&apos;infrastructures réseau,
            administration de serveurs Linux et Windows, déploiement de VPN, et analyse de la
            surface d&apos;attaque d&apos;un réseau d&apos;entreprise lors de mon stage à l&apos;ASECNA.
          </p>
          <p>
            En parallèle, je conçois et mets en ligne des sites web pour des clients. Comprendre
            comment un système peut être attaqué m&apos;aide à mieux construire ce que je livre.
          </p>
          <a
            href={profile.cvUrl}
            download
            className="inline-block font-mono text-[13px] text-accent underline underline-offset-4"
          >
            Télécharger mon CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

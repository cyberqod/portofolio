import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const posts = [
  {
    slug: "premier-site-en-ligne",
    title: "Ce que j'ai appris en mettant mon premier site client en ligne",
    date: "2026",
  },
];

export default function JournalPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h1 className="font-display text-3xl tracking-tight">Journal</h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          Des notes courtes sur le développement web, la cybersécurité, et ce que
          j&apos;apprends en construisant, écrites en MDX — faciles à faire évoluer en
          contenu pour tes réseaux sociaux.
        </p>

        <div className="mt-12 divide-y divide-panel-line border-t border-panel-line">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="flex items-center justify-between py-5 hover:text-accent"
            >
              <span className="text-[15px]">{post.title}</span>
              <span className="font-mono text-[12px] text-muted">{post.date}</span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

import { profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-panel-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-[12px] text-muted md:flex-row md:items-center md:justify-between">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-5 font-mono">
          <a href={profile.github} className="hover:text-foreground">
            GitHub
          </a>
          <a href={profile.linkedin} className="hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

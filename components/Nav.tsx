import Link from "next/link";
import { nav, profile } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-panel-line bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg tracking-tight">
          {profile.initials}
          <span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        <a
          href="#contact"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden sm:inline-flex")}
        >
          Me contacter
        </a>
        </div>
      </div>
    </header>
  );
}

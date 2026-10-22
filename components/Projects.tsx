import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" className="border-t border-panel-line">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h2 className="mb-10 font-display text-2xl tracking-tight text-foreground">
          Projets
        </h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-panel-line bg-panel transition-colors hover:border-accent/60"
            >
              <div className="flex items-center gap-2 border-b border-panel-line px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full border border-panel-line" />
                <span className="h-2.5 w-2.5 rounded-full border border-panel-line" />
                <span className="h-2.5 w-2.5 rounded-full border border-panel-line" />
                <span className="ml-3 truncate font-mono text-[12px] text-muted">
                  {project.url.replace(/^https?:\/\//, "")}
                </span>
              </div>

              <div className="flex flex-col gap-6 p-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-xl text-foreground">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
                  </div>
                  <p className="mt-1 font-mono text-[12px] text-accent-2">
                    {project.client} — {project.year}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:max-w-[220px] md:justify-end">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

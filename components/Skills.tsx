"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillGroups, tools, languages, interests, type SkillGroup } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { MoreButton } from "@/components/ui/more-button";

const VISIBLE_GROUPS = 4;

function GroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="rounded-lg border border-panel-line bg-panel p-6">
      <div className="mb-5 flex items-center gap-2">
        <span
          className={`h-2 w-2 rounded-full ${group.accent === "accent" ? "bg-accent" : "bg-accent-2"}`}
        />
        <h3 className="font-mono text-[13px] text-foreground">{group.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const [open, setOpen] = useState(false);
  const visible = skillGroups.slice(0, VISIBLE_GROUPS);
  const hidden = skillGroups.slice(VISIBLE_GROUPS);

  return (
    <section id="skills" className="border-t border-panel-line">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h2 className="mb-10 font-display text-2xl tracking-tight text-foreground">
          Compétences
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((g) => (
            <GroupCard key={g.title} group={g} />
          ))}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid gap-6 pt-6 md:grid-cols-2">
                {hidden.map((g) => (
                  <GroupCard key={g.title} group={g} />
                ))}
              </div>

              <div className="mt-16">
                <h3 className="mb-6 font-display text-lg text-foreground">Outils utilisés</h3>
                <dl className="divide-y divide-panel-line border-y border-panel-line">
                  {Object.entries(tools).map(([label, items]) => (
                    <div key={label} className="grid gap-2 py-4 md:grid-cols-[220px_1fr]">
                      <dt className="font-mono text-[13px] text-muted">{label}</dt>
                      <dd className="flex flex-wrap gap-2">
                        {items.map((i) => (
                          <Badge key={i}>{i}</Badge>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-12 grid gap-8 pb-2 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 font-display text-lg text-foreground">Langues</h3>
                  <ul className="space-y-1 text-[14px] text-muted">
                    {languages.map((l) => (
                      <li key={l.name}>
                        <span className="text-foreground">{l.name}</span> — {l.level}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 font-display text-lg text-foreground">Loisirs</h3>
                  <p className="text-[14px] text-muted">{interests.join(", ")}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10">
          <MoreButton
            open={open}
            onClick={() => setOpen((v) => !v)}
            moreLabel="Voir plus (autres compétences, outils, langues)"
            lessLabel="Voir moins"
          />
        </div>
      </div>
    </section>
  );
}

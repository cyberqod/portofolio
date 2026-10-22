"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experiences, education, type Experience as ExperienceType } from "@/data/site";
import { MoreButton } from "@/components/ui/more-button";

const VISIBLE_EXPERIENCES = 3;
const PREVIEW_POINTS = 2;

function ExperienceItem({ exp }: { exp: ExperienceType }) {
  const [open, setOpen] = useState(false);
  const hasMore = exp.points.length > PREVIEW_POINTS;
  const points = open ? exp.points : exp.points.slice(0, PREVIEW_POINTS);

  return (
    <li className="relative">
      <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
      <p className="font-mono text-[12px] text-accent-2">{exp.period}</p>
      <h3 className="mt-1 font-display text-lg text-foreground">{exp.role}</h3>
      <p className="text-[14px] text-muted">
        {exp.company} — {exp.place}
      </p>
      <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-muted marker:text-panel-line">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      {hasMore && (
        <MoreButton className="mt-3" open={open} onClick={() => setOpen((v) => !v)} />
      )}
    </li>
  );
}

export function Experience() {
  const [showAll, setShowAll] = useState(false);
  const visible = experiences.slice(0, VISIBLE_EXPERIENCES);
  const hidden = experiences.slice(VISIBLE_EXPERIENCES);

  return (
    <section id="experience" className="border-t border-panel-line">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h2 className="mb-12 font-display text-2xl tracking-tight text-foreground">
          Expérience
        </h2>

        <div className="border-l border-panel-line pl-8">
          <ol className="space-y-10">
            {visible.map((exp) => (
              <ExperienceItem key={`${exp.company}-${exp.period}`} exp={exp} />
            ))}
          </ol>

          <AnimatePresence initial={false}>
            {showAll && hidden.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ol className="space-y-10 pt-10">
                  {hidden.map((exp) => (
                    <ExperienceItem key={`${exp.company}-${exp.period}`} exp={exp} />
                  ))}
                </ol>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {hidden.length > 0 && (
          <div className="mt-10">
            <MoreButton
              open={showAll}
              onClick={() => setShowAll((v) => !v)}
              moreLabel={`Voir ${hidden.length} autres expériences`}
              lessLabel="Voir moins d'expériences"
            />
          </div>
        )}

        <div className="mt-16 border-t border-panel-line pt-10">
          <h3 className="font-display text-lg text-foreground">Formation</h3>
          <p className="mt-3 font-mono text-[12px] text-accent-2">{education.year}</p>
          <p className="mt-1 text-[15px] text-foreground">{education.degree}</p>
          <p className="text-[14px] text-muted">{education.school}</p>
        </div>
      </div>
    </section>
  );
}

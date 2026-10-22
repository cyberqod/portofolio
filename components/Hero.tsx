"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function useTypedRoles(roles: string[]) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 35 : 65;
    const pause = 1400;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, speed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

export function Hero() {
  const typed = useTypedRoles(profile.taglineRoles);

  return (
    <section className="relative overflow-hidden border-b border-panel-line">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[13px] text-accent"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight md:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex h-8 items-center font-mono text-lg text-muted md:text-xl"
        >
          <span className="mr-2 text-accent-2">&gt;</span>
          <span>{typed}</span>
          <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-accent" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#projects" className={cn(buttonVariants({ variant: "primary" }))}>
            Voir mes projets
          </a>
          <a href="#contact" className={cn(buttonVariants({ variant: "outline" }))}>
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}

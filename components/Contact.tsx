import { Mail, MessageCircle, MapPin } from "lucide-react";
import { profile } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="border-t border-panel-line">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl tracking-tight text-foreground">
            Travaillons ensemble
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Un site à créer, une application à sécuriser, ou simplement une opportunité à
            discuter — écris-moi directement, je réponds rapidement.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className={cn(buttonVariants({ variant: "primary" }), "gap-2")}
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            >
              <MessageCircle className="h-4 w-4" />
              {profile.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 font-mono text-[13px] text-muted">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </div>
        </div>
      </div>
    </section>
  );
}

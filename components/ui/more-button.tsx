import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function MoreButton({
  open,
  onClick,
  moreLabel = "Voir plus",
  lessLabel = "Voir moins",
  className,
}: {
  open: boolean;
  onClick: () => void;
  moreLabel?: string;
  lessLabel?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[13px] text-accent hover:underline underline-offset-4",
        className
      )}
    >
      {open ? lessLabel : moreLabel}
      <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
    </button>
  );
}

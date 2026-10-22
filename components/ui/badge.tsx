import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border border-panel-line bg-panel px-2.5 py-1 font-mono text-[12px] text-muted",
        className
      )}
      {...props}
    />
  );
}

export { Badge };

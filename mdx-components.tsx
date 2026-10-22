import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="font-display text-3xl tracking-tight" {...props} />,
    h2: (props) => (
      <h2 className="mt-10 font-display text-2xl tracking-tight" {...props} />
    ),
    h3: (props) => <h3 className="mt-8 font-display text-xl" {...props} />,
    p: (props) => (
      <p className="mt-4 text-[15px] leading-relaxed text-muted" {...props} />
    ),
    ul: (props) => (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] text-muted" {...props} />
    ),
    a: (props) => <a className="text-accent underline underline-offset-4" {...props} />,
    code: (props) => (
      <code className="rounded bg-panel px-1.5 py-0.5 font-mono text-[13px]" {...props} />
    ),
    ...components,
  };
}

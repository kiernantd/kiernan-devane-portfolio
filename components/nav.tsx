import { Container } from "@/components/ui/container";

const links = ["work", "stack", "contact"] as const;

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-paper/75 border-b border-ink/10">
      <Container className="flex items-center justify-between h-14">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
            style={{ boxShadow: "0 0 10px #FF6B35" }}
          />
          <span className="text-[11px] tracking-meta uppercase font-mono text-ink">
            Kiernan Devane
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-[11px] tracking-meta uppercase font-mono">
          {links.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="text-ink/55 hover:text-ink transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </Container>
    </nav>
  );
}

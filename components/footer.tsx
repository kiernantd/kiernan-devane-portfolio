import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="py-10 border-t border-ink/10">
      <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-[11px] tracking-[0.24em] uppercase font-mono text-ink/35">
          © 2026 · Kiernan Devane · Built with care
        </div>
        <div className="text-[11px] tracking-[0.24em] uppercase flex items-center gap-2 font-mono text-ink/35">
          <span>last deploy · apr 18</span>
          <span className="inline-block w-2 h-3 bg-accent animate-blink" />
        </div>
      </Container>
    </footer>
  );
}

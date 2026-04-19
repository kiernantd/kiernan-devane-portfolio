import type { Project } from "@/lib/data";
import { FadeIn } from "@/components/ui/fade-in";

type Props = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  return (
    <FadeIn delay={index * 120}>
      <article className="group grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-t border-ink/10">
        <div className="md:col-span-2 flex md:flex-col items-baseline md:items-start justify-between md:justify-start gap-2">
          <span className="text-[11px] tracking-label font-mono text-ink/35 transition-colors group-hover:text-accent">
            {project.id}
          </span>
          <span className="text-[11px] tracking-meta uppercase font-mono text-ink/35">
            {project.year}
          </span>
        </div>

        <div className="md:col-span-10">
          <h3
            className="font-serif font-normal leading-tight tracking-[-0.01em] text-ink transition-colors group-hover:text-accent"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
          >
            {project.title}
          </h3>

          <p className="mt-2 text-xs tracking-[0.12em] uppercase font-mono text-ink/55">
            {project.role}
          </p>

          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed font-serif font-light text-ink/55">
            {project.blurb}
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {project.stack.map((s) => (
              <li
                key={s}
                className="text-[11px] tracking-[0.14em] uppercase font-mono text-ink/35"
              >
                {s}
              </li>
            ))}
          </ul>

          {project.command && (
            <div className="mt-6 inline-block px-3 py-2 rounded-sm font-mono text-xs text-ink bg-ink/[0.04] border border-ink/10">
              <span className="text-accent">$ </span>
              {project.command}
            </div>
          )}
        </div>
      </article>
    </FadeIn>
  );
}

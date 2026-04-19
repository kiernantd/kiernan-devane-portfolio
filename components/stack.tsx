import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionMarker } from "@/components/ui/section-marker";
import { stack } from "@/lib/data";

export function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32">
      <Container>
        <SectionMarker number="03" label="Stack" />
        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          {stack.map((group, i) => (
            <FadeIn key={group.group} delay={i * 100}>
              <div>
                <h4
                  className={`text-[11px] tracking-label uppercase pb-4 mb-6 border-b border-ink/10 font-mono ${
                    i === 0 ? "text-accent" : "text-ink/55"
                  }`}
                >
                  {group.group}
                </h4>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-lg font-serif font-light text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

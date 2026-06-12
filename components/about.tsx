import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionMarker } from "@/components/ui/section-marker";
import { aboutFacts } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <SectionMarker number="01" label="About" />
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <FadeIn delay={100} className="md:col-span-7">
            <div className="space-y-6 text-lg md:text-xl leading-relaxed font-serif font-light text-ink">
              <p>
                I graduated from the University of Pittsburgh with a B.S. in
                Computer Science (Cum Laude, minor in Linguistics), and most
                recently worked as a Junior Research Engineer at Surreality Lab
                on spatial-AR marker systems for Apple Vision Pro.
              </p>
              <p>
                I&apos;m drawn to cloud-native architecture and AI-powered
                systems — the combination that lets small teams punch well above
                their weight. My background spans distributed backends,
                containerized deployments, and integrating LLM APIs into real
                products. I care about infrastructure that&apos;s observable,
                AI that&apos;s actually useful, and consulting work that creates
                lasting value.
              </p>
              <p>
                Right now I&apos;m pursuing AWS Solutions Architect
                certification, deepening my Python for cloud and AI workloads,
                and available for cloud engineering and technical consulting
                engagements.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={220} className="md:col-span-5 md:pl-8 md:border-l md:border-ink/10">
            <dl className="space-y-5 font-mono text-xs">
              {aboutFacts.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[auto_1fr] gap-4">
                  <dt className="uppercase tracking-[0.24em] text-ink/35">
                    {k}
                  </dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

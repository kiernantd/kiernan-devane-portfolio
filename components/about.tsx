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
                Computer Science (Cum Laude, minor in Linguistics). My last role
                before looking was Junior Research Engineer at Surreality Lab,
                where I worked on spatial-AR markers for Apple Vision Pro.
              </p>
              <p>
                The thing I like most about building software is the
                compression — how a handful of tidy components can do what used
                to take a whole team. I gravitate toward small codebases where
                the whole picture fits in your head, and I care about the boring
                stuff: names, tests, and how things actually feel to use.
              </p>
              <p>
                Outside the job search I&apos;m grinding LeetCode, writing
                too-long commit messages, and rebuilding my Python fundamentals
                from the ground up.
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

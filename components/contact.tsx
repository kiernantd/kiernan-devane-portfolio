import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionMarker } from "@/components/ui/section-marker";
import { contactLinks } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40">
      <Container>
        <SectionMarker number="04" label="Contact" />
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <FadeIn className="md:col-span-7">
            <h2
              className="font-serif font-light leading-[0.95] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(52px, 8vw, 112px)" }}
            >
              Let&apos;s <span className="italic text-accent">talk</span>.
            </h2>
            <p className="mt-8 max-w-lg text-lg md:text-xl leading-relaxed font-serif font-light text-ink/55">
              I&apos;m most interested in roles where I can work closely with a
              small team, ship into production quickly, and grow into senior
              frontend or full-stack work. If that sounds like yours, I&apos;d
              love to hear from you.
            </p>
          </FadeIn>

          <FadeIn delay={180} className="md:col-span-5">
            <ul>
              {contactLinks.map(({ label, value, icon: Icon, href, external }) => (
                <li key={label} className="border-t border-ink/10 last:border-b">
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between py-5"
                  >
                    <div className="flex items-center gap-4">
                      <Icon
                        size={16}
                        className="text-ink/35 transition-colors group-hover:text-accent"
                      />
                      <div>
                        <div className="text-[10px] tracking-label uppercase font-mono text-ink/35">
                          {label}
                        </div>
                        <div className="text-base mt-0.5 font-mono text-ink">
                          {value}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-ink/35 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

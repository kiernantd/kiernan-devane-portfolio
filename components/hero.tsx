"use client";

import { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { TERMINAL_COMMAND } from "@/lib/data";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(TERMINAL_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // silently fail — clipboard may be unavailable
    }
  };

  return (
    <section id="top" className="relative pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden">
      {/* Decorative background numeral */}
      <div
        aria-hidden
        className="absolute -top-24 -right-16 md:-right-10 pointer-events-none select-none font-serif font-light text-ink leading-none"
        style={{
          fontSize: "clamp(280px, 36vw, 560px)",
          opacity: 0.03,
        }}
      >
        K
      </div>

      <Container>
        <FadeIn>
          <div className="flex items-center gap-3 mb-10 text-[11px] tracking-label uppercase font-mono text-ink/55">
            <Terminal size={12} className="text-accent" />
            <span>Jr Software Engineer</span>
            <span className="text-ink/35">/</span>
            <span>Philadelphia → NYC</span>
            <span className="text-ink/35">/</span>
            <span className="text-accent">Available now</span>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <h1
            className="font-serif font-light leading-[0.95] tracking-[-0.02em] text-ink"
            style={{ fontSize: "clamp(48px, 8vw, 124px)" }}
          >
            I build thoughtful <br className="hidden md:block" />
            software — on the web,{" "}
            <span className="italic text-accent">and in the terminal</span>.
          </h1>
        </FadeIn>

        <FadeIn delay={240}>
          <p className="mt-10 max-w-xl text-lg md:text-xl leading-relaxed font-serif font-light text-ink/55">
            CS graduate from the University of Pittsburgh, most recently a
            research engineer on visionOS. Currently sharpening Python and
            shipping React — looking for a team where engineers own problems
            end-to-end.
          </p>
        </FadeIn>

        <FadeIn delay={360}>
          <div className="mt-14 inline-flex items-center gap-3 max-w-full">
            <button
              type="button"
              onClick={copy}
              title="Copy to clipboard"
              className="group inline-flex items-center gap-3 px-4 py-3 rounded-sm transition-colors font-mono text-[13px] text-ink bg-ink/[0.04] border border-ink/10 hover:border-accent hover:bg-accent/[0.06]"
            >
              <span className="text-accent">$</span>
              <span className="truncate max-w-[60vw] md:max-w-none">
                {TERMINAL_COMMAND}
              </span>
              {copied ? (
                <Check size={14} className="text-accent" />
              ) : (
                <Copy size={14} className="text-ink/35" />
              )}
            </button>
            <span className="hidden sm:inline text-[11px] tracking-meta uppercase font-mono text-ink/35">
              {copied ? "copied" : "try it"}
            </span>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

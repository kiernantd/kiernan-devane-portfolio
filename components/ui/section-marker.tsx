import { FadeIn } from "@/components/ui/fade-in";

type Props = {
  number: string;
  label: string;
};

export function SectionMarker({ number, label }: Props) {
  return (
    <FadeIn>
      <div className="flex items-baseline gap-5 mb-14 md:mb-20">
        <span className="text-[11px] tracking-label text-accent font-mono">
          {number}
        </span>
        <div className="h-px flex-1 bg-ink/10" />
        <span className="text-[11px] tracking-label uppercase text-ink/35 font-mono">
          {label}
        </span>
      </div>
    </FadeIn>
  );
}

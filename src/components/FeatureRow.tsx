import type { ReactNode } from "react";
import Icon from "@/components/Icon";

type Accent = "primary" | "secondary" | "tertiary";

const ACCENT_TEXT: Record<Accent, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

interface FeatureRowProps {
  id?: string;
  num: string;
  label: string;
  title: ReactNode;
  body: ReactNode;
  points: string[];
  visual: ReactNode;
  reverse?: boolean;
  accent?: Accent;
}

// Alternating text / screenshot row used by the feature showcases on /for-players and /for-venues.
export default function FeatureRow({
  id,
  num,
  label,
  title,
  body,
  points,
  visual,
  reverse,
  accent = "primary",
}: FeatureRowProps) {
  return (
    <section id={id} className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}>
          <p className={`mb-4 font-label text-xs font-bold uppercase tracking-[0.2em] ${ACCENT_TEXT[accent]}`}>
            {num} · {label}
          </p>
          <h2 className="mb-5 text-3xl uppercase leading-[1.05] text-on-surface md:text-5xl">{title}</h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-on-surface-variant">{body}</p>
          <ul className="space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-on-surface">
                <Icon name="check_circle" fill className={`mt-0.5 shrink-0 text-xl ${ACCENT_TEXT[accent]}`} />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>{visual}</div>
      </div>
    </section>
  );
}

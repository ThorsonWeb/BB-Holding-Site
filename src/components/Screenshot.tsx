import fs from "node:fs";
import path from "node:path";
import screenshots from "@/content/screenshots.json";
import Icon from "@/components/Icon";

// Server-only: resolves screenshot files at build time, so it can't be used inside "use client" components.
// Every slot is listed in src/content/screenshots.json; run `npm run screenshots` for the checklist.

type Product = "app" | "crm";

interface Shot {
  id: string;
  title: string;
  alt: string;
  fallback?: string;
}

const EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

function findShot(id: string): { shot: Shot; product: Product } {
  for (const product of ["app", "crm"] as const) {
    const shot = (screenshots[product] as Shot[]).find((s) => s.id === id);
    if (shot) return { shot, product };
  }
  throw new Error(`Unknown screenshot id "${id}". Add it to src/content/screenshots.json.`);
}

function resolveSrc(id: string, product: Product, fallback?: string): string | null {
  for (const ext of EXTENSIONS) {
    const rel = `/screenshots/${product}/${id}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return fallback ?? null;
}

function Placeholder({ product, title }: { product: Product; title: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-surface-container-high p-6 text-center tactical-grid">
      <Icon name={product === "app" ? "smartphone" : "desktop_windows"} className="text-4xl text-primary/60" />
      <span className="font-label text-xs uppercase tracking-[0.15em] text-on-surface-variant">{title}</span>
    </div>
  );
}

export function PhoneShot({ id, className = "" }: { id: string; className?: string }) {
  const { shot, product } = findShot(id);
  const src = resolveSrc(id, product, shot.fallback);
  return (
    <div
      className={`relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.25rem] border-[6px] border-surface-container-highest bg-surface-container-lowest shadow-2xl ${className}`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={shot.alt} loading="lazy" className="h-full w-full object-cover object-top" />
      ) : (
        <Placeholder product={product} title={shot.title} />
      )}
    </div>
  );
}

// One phone, or two with the second dropped lower, over a soft glow.
export function PhoneStage({ ids, glow = "primary" }: { ids: string[]; glow?: "primary" | "secondary" }) {
  return (
    <div className="relative mx-auto flex w-full max-w-md items-start justify-center gap-4 sm:gap-5">
      <div
        className={`absolute inset-8 rounded-full blur-[90px] ${glow === "primary" ? "bg-primary/15" : "bg-secondary/15"}`}
        aria-hidden="true"
      />
      {ids.map((id, i) => (
        <PhoneShot
          key={id}
          id={id}
          className={ids.length > 1 ? `min-w-0 flex-1 max-w-[220px] ${i === 1 ? "mt-16" : ""}` : "max-w-[280px]"}
        />
      ))}
    </div>
  );
}

export function BrowserShot({ id, className = "" }: { id: string; className?: string }) {
  const { shot, product } = findShot(id);
  const src = resolveSrc(id, product, shot.fallback);
  return (
    <div className={`overflow-hidden rounded-md border border-outline-variant/30 bg-surface-container-high shadow-2xl ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-outline-variant/20 px-4 py-2.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-outline-variant" />
        <span className="h-2.5 w-2.5 rounded-full bg-outline-variant" />
        <span className="h-2.5 w-2.5 rounded-full bg-outline-variant" />
      </div>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={shot.alt} loading="lazy" className="block w-full" />
      ) : (
        <div className="aspect-[16/10]">
          <Placeholder product={product} title={shot.title} />
        </div>
      )}
    </div>
  );
}

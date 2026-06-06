"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const VALID_THEMES = ["default", "40k", "pokemon", "mtg", "starwars", "boardgames"];

function Inner({ className, children }: { className?: string; children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const raw = searchParams.get("theme") ?? "";
  const theme = VALID_THEMES.includes(raw) ? raw : "";
  const href = theme ? `/join?theme=${theme}` : "/join";
  return <Link href={href} className={className}>{children}</Link>;
}

export default function JoinLink({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <Suspense fallback={<Link href="/join" className={className}>{children}</Link>}>
      <Inner className={className}>{children}</Inner>
    </Suspense>
  );
}

"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { buttonClasses, type Variant, type Size } from "@/components/Button";

const VALID_THEMES = ["default", "40k", "pokemon", "mtg", "starwars", "boardgames"];

interface JoinLinkProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

function Inner({ variant, size, className, children }: JoinLinkProps) {
  const searchParams = useSearchParams();
  const raw = searchParams.get("theme") ?? "";
  const theme = VALID_THEMES.includes(raw) ? raw : "";
  const href = theme ? `/join?theme=${theme}` : "/join";
  return (
    <Link href={href} className={buttonClasses(variant, size, false, className)}>
      {children}
    </Link>
  );
}

export default function JoinLink({ variant = "solid", size = "md", className, children }: JoinLinkProps) {
  return (
    <Suspense fallback={<Link href="/join" className={buttonClasses(variant, size, false, className)}>{children}</Link>}>
      <Inner variant={variant} size={size} className={className}>{children}</Inner>
    </Suspense>
  );
}

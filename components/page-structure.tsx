import { BaseProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function PageWrapper({ children, className }: BaseProps) {
  return <main className={cn("py-12 sm:py-24 px-6 min-h-screen", className)}>{children}</main>;
}

export function SectionWrapper({ children, className }: BaseProps & HTMLAttributes<HTMLElement>) {
  return <section className={cn("max-w-2xl mx-auto", className)}>{children}</section>;
}

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "navy" | "beige" | "outline";
}

export function Badge({ children, className, variant = "beige" }: BadgeProps) {
  const variants = {
    navy: "bg-[var(--color-navy)] text-white",
    beige: "bg-[var(--color-beige)] text-[var(--color-navy)]",
    outline: "border border-[var(--color-navy)] text-[var(--color-navy)] bg-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-secondary font-600 tracking-wide uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

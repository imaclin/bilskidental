import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
  background?: "white" | "beige" | "beige-light" | "navy";
  spacing?: "sm" | "md" | "lg" | "xl";
}

export function Section({
  children,
  className,
  id,
  as: Tag = "section",
  background = "white",
  spacing = "lg",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    beige: "bg-[var(--color-beige)]",
    "beige-light": "bg-[var(--color-beige-light)]",
    navy: "bg-[var(--color-navy)]",
  };

  const spacings = {
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
    xl: "py-24 md:py-32",
  };

  return (
    <Tag
      id={id}
      className={cn(backgrounds[background], spacings[spacing], className)}
    >
      {children}
    </Tag>
  );
}

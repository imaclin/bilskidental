import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({
  children,
  className,
  as: Tag = "div",
  size = "xl",
}: ContainerProps) {
  const maxWidths = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-5xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        maxWidths[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}

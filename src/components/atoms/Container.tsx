import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: "div" | "section" | "header" | "footer" | "nav" | "main";
  className?: string;
  children: React.ReactNode;
  id?: string;
  "aria-label"?: string;
};

export function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

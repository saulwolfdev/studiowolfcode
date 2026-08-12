import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("ui-card", className)} {...props} />,
);
Card.displayName = "Card";

export { Card };

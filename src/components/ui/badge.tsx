import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("ui-badge", className)} {...props} />;
}

export { Badge };

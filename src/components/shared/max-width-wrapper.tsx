import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.PropsWithChildren & Readonly<{ className?: string }>;

const MaxWidthWrapper: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={cn("w-full max-w-5xl mx-auto", className)}>{children}</div>
  );
};

export default MaxWidthWrapper;

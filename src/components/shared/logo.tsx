import * as React from "react";
import { Sedan_SC } from "next/font/google";
import { Label } from "@/components/ui/label";
import { type LabelProps } from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

// If loading a variable font, you don't need to specify the font weight
const sedan = Sedan_SC({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

type Props = LabelProps;

const Logo: React.FC<Props> = ({ className = "" }) => {
  return (
    <Label
      className={cn(
        `${sedan.className} text-lg sm:text-xl md:text-2xl font-extrabold text-primary`,
        className
      )}
    >
      The Daily Blogs
    </Label>
  );
};

export default Logo;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) => {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden",
        containerClassName
      )}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: "inherit" }}
      >
        <motion.div
          className={cn(
            "h-20 w-20 opacity-[0.8] bg-[radial-gradient(hsl(var(--primary))_40%,transparent_60%)]",
            borderClassName
          )}
          animate={{
            x: ["0%", "100%", "100%", "0%", "0%"],
            y: ["0%", "0%", "100%", "100%", "0%"],
          }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: "20%",
            height: "20%",
          }}
        />
      </div>
      <div
        className={cn(
          "relative bg-card border border-border backdrop-blur-xl text-foreground flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{ borderRadius: "inherit" }}
      >
        {children}
      </div>
    </Component>
  );
};

export const MovingBorderButton = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <MovingBorder
      containerClassName="rounded-full p-[1px]"
      className={cn("px-6 py-2 rounded-full font-medium", className)}
      duration={3000}
      {...props}
    >
      {children}
    </MovingBorder>
  );
};

export default MovingBorder;

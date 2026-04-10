"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [stars] = useState(generateStars(60));

  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className={cn(
        "bg-card p-4 max-w-md max-h-[20rem] h-full w-full rounded-xl border border-border",
        className
      )}
    >
      <div className="flex justify-center items-center">
        <Illustration mouseEnter={mouseEnter} stars={stars} />
      </div>
      <div className="px-2 pb-6">{children}</div>
    </div>
  );
};

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p className={cn("text-base text-muted-foreground max-w-[16rem]", className)}>
      {children}
    </p>
  );
};

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h2 className={cn("font-bold text-2xl text-foreground", className)}>
      {children}
    </h2>
  );
};

function generateStars(count: number) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    radius: Math.random() * 1.5 + 0.5,
    opacity: Math.random(),
    twinkleSpeed: Math.random() * 3 + 1,
  }));
}

const Illustration = ({
  mouseEnter,
  stars,
}: {
  mouseEnter: boolean;
  stars: ReturnType<typeof generateStars>;
}) => {
  return (
    <div className="h-[10rem] w-full relative overflow-hidden rounded-lg">
      {stars.map((star, idx) => (
        <motion.span
          key={idx}
          animate={{
            opacity: mouseEnter ? [star.opacity, 1, star.opacity] : star.opacity,
            scale: mouseEnter ? [1, 1.3, 1] : 1,
          }}
          transition={{
            duration: star.twinkleSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.radius * 2,
            height: star.radius * 2,
            borderRadius: "50%",
            backgroundColor: "hsl(var(--primary))",
          }}
        />
      ))}
      <AnimatePresence>
        {mouseEnter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-primary rounded-lg"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GlowingStarsBackgroundCard;

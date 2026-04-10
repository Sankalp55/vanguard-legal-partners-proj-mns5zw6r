"use client";

import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Compatibility exports for components that expect a 3D card API.
 * These are lightweight wrappers to avoid build-time missing export errors.
 */
export function CardContainer({ className, ...props }: DivProps) {
  return (
    <div
      className={className}
      style={{ perspective: "1000px" }}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: DivProps) {
  return (
    <div
      className={className}
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    />
  );
}

export type CardItemProps = DivProps & {
  /**
   * Some implementations use translateZ to pop elements forward.
   * We keep it optional for compatibility.
   */
  translateZ?: number | string;
};

export function CardItem({ className, translateZ, style, ...props }: CardItemProps) {
  const z =
    typeof translateZ === "number"
      ? `${translateZ}px`
      : typeof translateZ === "string"
        ? translateZ
        : undefined;

  return (
    <div
      className={className}
      style={{
        ...(style ?? {}),
        transform: z ? `translateZ(${z})` : style?.transform,
      }}
      {...props}
    />
  );
}

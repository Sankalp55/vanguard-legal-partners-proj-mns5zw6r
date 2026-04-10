import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Minimal, build-safe 3D card effect primitives.
 * Exports named `CardContainer`, `CardBody`, and `CardItem` to match imports.
 */
export function CardContainer({ className, ...props }: DivProps) {
  return (
    <div
      className={
        "[perspective:1000px] " +
        (className ?? "")
      }
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: DivProps) {
  return (
    <div
      className={
        "relative rounded-xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black " +
        (className ?? "")
      }
      {...props}
    />
  );
}

export type CardItemProps = DivProps & {
  translateZ?: number;
};

export function CardItem({ className, translateZ, style, ...props }: CardItemProps) {
  const mergedStyle: React.CSSProperties = {
    ...(style ?? {}),
    transform: translateZ != null ? `translateZ(${translateZ}px)` : style?.transform,
  };

  return (
    <div
      className={className}
      style={mergedStyle}
      {...props}
    />
  );
}

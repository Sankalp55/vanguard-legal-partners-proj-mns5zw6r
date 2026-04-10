"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  baseHue?: number;
  backgroundColor?: string;
}

export function Vortex({
  children,
  className,
  containerClassName,
  particleCount = 500,
  baseHue = 220,
  backgroundColor = "transparent",
}: VortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(function() {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    if (!ctx) return;
    var w = (canvas.width = canvas.offsetWidth);
    var h = (canvas.height = canvas.offsetHeight);
    var cx = w / 2;
    var cy = h / 2;
    var particles: { x: number; y: number; angle: number; radius: number; speed: number; hue: number }[] = [];
    for (var i = 0; i < particleCount; i++) {
      var angle = Math.random() * Math.PI * 2;
      var radius = Math.random() * Math.min(w, h) * 0.45;
      particles.push({
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius,
        angle: angle,
        radius: radius,
        speed: 0.002 + Math.random() * 0.004,
        hue: baseHue + Math.random() * 60 - 30,
      });
    }
    var animId: number;
    function draw() {
      ctx!.fillStyle = backgroundColor === "transparent" ? "rgba(0,0,0,0.05)" : backgroundColor;
      ctx!.fillRect(0, 0, w, h);
      for (var j = 0; j < particles.length; j++) {
        var p = particles[j];
        p.angle += p.speed;
        p.x = cx + Math.cos(p.angle) * p.radius;
        p.y = cy + Math.sin(p.angle) * p.radius;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx!.fillStyle = "hsla(" + p.hue + ", 80%, 60%, 0.8)";
        ctx!.fill();
      }
      animId = requestAnimationFrame(draw);
    }
    draw();
    return function() { cancelAnimationFrame(animId); };
  }, [particleCount, baseHue, backgroundColor]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", containerClassName)}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn("relative z-10", className)}
      >
        {children}
      </motion.div>
    </div>
  );
}
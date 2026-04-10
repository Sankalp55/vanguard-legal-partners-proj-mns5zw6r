import type { Metadata } from "next";
import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/ui/background-lines";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="relative">
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10">
          <BackgroundLines>
            <div />
          </BackgroundLines>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl px-6"
        >
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">About</h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            We build thoughtful products with a focus on clarity, performance, and delightful user
            experience.
          </p>
        </motion.div>
      </section>
    </main>
  );
}

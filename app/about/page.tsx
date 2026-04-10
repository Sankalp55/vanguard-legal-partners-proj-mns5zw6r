import type { ReactNode } from "react";
import { FeaturesCards3D } from "@/components/blocks/FeaturesCards3D";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function AboutPage() {
  const iconPlaceholder = (
    <span
      aria-hidden
      className="inline-block h-5 w-5 rounded bg-black/10 dark:bg-white/10"
    />
  );

  const features: Feature[] = [
    {
      title: "Authority without theatrics",
      description:
        "We communicate with precision—internally and externally—so your position remains credible.",
      icon: iconPlaceholder,
    },
    {
      title: "Decisions that compound",
      description:
        "We prioritize moves that improve the system over time, not just the next quarter.",
      icon: iconPlaceholder,
    },
    {
      title: "Operational clarity",
      description:
        "A clear operating philosophy keeps matters efficient and outcomes focused.",
      icon: iconPlaceholder,
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <FeaturesCards3D
        headline="How we operate"
        subheadline="A clear operating philosophy keeps matters efficient and outcomes focused."
        features={features}
      />
    </main>
  );
}

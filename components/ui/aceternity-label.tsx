"use client";

export function AceternityLabel(props: any) {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {props.headline && <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{props.headline}</h2>}
        {props.subheadline && <p className="text-lg text-muted-foreground mb-8 max-w-2xl">{props.subheadline}</p>}
        {props.children}
      </div>
    </section>
  );
}
export default AceternityLabel;

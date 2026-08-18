interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignCls =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 sm:gap-4 ${alignCls}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-xs">
          <span className="h-px w-5 bg-accent/60 sm:w-6" aria-hidden="true" />
          {eyebrow}
          {align === "center" && (
            <span className="h-px w-5 bg-accent/60 sm:w-6" aria-hidden="true" />
          )}
        </span>
      )}
      <h2 className="font-display text-2xl font-bold tracking-tight text-frost sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-sm leading-relaxed text-muted sm:text-base ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

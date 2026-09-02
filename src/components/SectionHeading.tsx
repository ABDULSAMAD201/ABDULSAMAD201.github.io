interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
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
        <span className="inline-flex w-fit items-center rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs" style={{ color: '#09b3e4', border: '1px solid #09b3e4' }}>
          {eyebrow}
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

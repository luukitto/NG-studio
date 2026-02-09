type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-2 text-sm leading-relaxed text-dark/70 sm:text-base ${
            align === "center" ? "mx-auto" : ""
          } max-w-2xl`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

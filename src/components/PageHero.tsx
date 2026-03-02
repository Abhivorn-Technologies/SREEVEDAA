type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function PageHero({ eyebrow, title, description, align = "left" }: PageHeroProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <section className="page-shell pt-16 pb-10 md:pt-20">
      <div className={`flex flex-col gap-3 ${alignment}`}>
        {eyebrow && <span className="pill">{eyebrow}</span>}
        <h1 className="headline text-3xl leading-tight md:text-4xl lg:text-5xl">{title}</h1>
        {description && <p className="max-w-2xl text-slate-300">{description}</p>}
      </div>
    </section>
  );
}

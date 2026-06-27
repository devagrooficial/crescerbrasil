interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ tag, title, subtitle, center = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {tag && (
        <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${light ? "bg-white/15 text-white" : "bg-sage-light/30 text-forest"}`}>
          {tag}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold leading-tight ${light ? "text-white" : "text-forest-dark"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-white/80" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

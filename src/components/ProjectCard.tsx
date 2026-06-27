import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: "green" | "blue" | "amber";
  href?: string;
}

const colorMap = {
  green: { bg: "bg-sage-light/20", icon: "bg-forest text-white", border: "border-forest/10", hover: "group-hover:text-forest" },
  blue: { bg: "bg-sky-light/20", icon: "bg-sky text-white", border: "border-sky/10", hover: "group-hover:text-sky" },
  amber: { bg: "bg-amber-light/40", icon: "bg-amber text-white", border: "border-amber/10", hover: "group-hover:text-amber" },
};

export default function ProjectCard({ icon: Icon, title, description, color = "green", href = "/projetos" }: ProjectCardProps) {
  const c = colorMap[color];
  return (
    <Link href={href} className={`group block ${c.bg} border ${c.border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
      <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center mb-4`}>
        <Icon size={22} />
      </div>
      <h3 className={`font-bold text-lg text-forest-dark mb-2 ${c.hover} transition-colors`}>{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
      <span className={`inline-flex items-center gap-1 text-sm font-medium ${c.hover} transition-colors`}>
        Saiba mais <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}

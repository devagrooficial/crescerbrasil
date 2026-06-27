import Link from "next/link";
import {
  Heart, Stethoscope, BookOpen, Users, Eye, SmilePlus,
  ArrowRight, CheckCircle, TrendingUp, Building2
} from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

const impactNumbers = [
  { value: "12.400+", label: "Pessoas Atendidas", icon: Users },
  { value: "8.700+", label: "Consultas Realizadas", icon: Stethoscope },
  { value: "3.200+", label: "Famílias Apoiadas", icon: Heart },
  { value: "47", label: "Municípios Alcançados", icon: TrendingUp },
];

const partners = [
  { name: "Parceiro 1", src: "/parceiros/parceiro-1.png" },
  { name: "Parceiro 2", src: "/parceiros/parceiro-2.png" },
  { name: "Parceiro 3", src: "/parceiros/parceiro-3.png" },
  { name: "Parceiro 4", src: "/parceiros/parceiro-4.png" },
  { name: "Parceiro 5", src: "/parceiros/parceiro-5.png" },
  { name: "Parceiro 6", src: "/parceiros/parceiro-6.png" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#1B4332] via-[#2D6A4F] to-[#40916C] min-h-[90vh] flex items-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Organização da Sociedade Civil · OSCIP
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Saúde e dignidade para quem mais precisa
            </h1>
            <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              O Instituto Crescer Brasil leva atenção médica, odontológica e oftalmológica até comunidades rurais e vulneráveis, fortalecendo a saúde como alicerce para uma vida digna — do campo à cidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/doacoes"
                className="inline-flex items-center justify-center gap-2 bg-[#E8A958] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#d4954a] transition-colors shadow-lg"
              >
                <Heart size={20} />
                Faça uma Doação
              </Link>
              <Link
                href="/projetos"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white hover:text-[#2D6A4F] transition-colors"
              >
                Conheça Nossos Projetos
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-white/70 text-sm">
              {["Certificada pelo MEC", "Balanço auditado anualmente", "Mais de 10 anos de atuação"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-[#95D5B2]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NÚMEROS DE IMPACTO ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactNumbers.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center p-6 rounded-2xl bg-[#F1F5F0] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-[#2D6A4F]" />
                </div>
                <p className="text-3xl font-bold text-[#1B4332]">{value}</p>
                <p className="text-gray-500 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJETOS ── */}
      <section className="py-20 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="O que fazemos"
            title="Projetos que transformam vidas"
            subtitle="Nossa atuação é fundamentada em quatro pilares que se complementam para promover o desenvolvimento humano integral."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ProjectCard
              icon={Stethoscope}
              title="Saúde do Idoso"
              description="Atendimento médico, psicológico e entrega de kits de higiene para idosos em situação de vulnerabilidade."
              color="green"
            />
            <ProjectCard
              icon={Heart}
              title="Saúde da Mulher"
              description="Prevenção do câncer de colo de útero e mama, além de conscientização sobre ISTs e saúde integral feminina."
              color="blue"
            />
            <ProjectCard
              icon={SmilePlus}
              title="Odontologia Móvel"
              description="Consultórios itinerantes que levam saúde bucal até comunidades sem acesso a serviços odontológicos."
              color="amber"
            />
            <ProjectCard
              icon={Eye}
              title="Oftalmologia Comunitária"
              description="Consultas com especialistas e distribuição gratuita de óculos de grau para famílias de baixa renda."
              color="green"
            />
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/projetos" variant="outline" size="lg">
              Ver todos os projetos
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* ── SOBRE (RESUMO) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-[#F1F5F0] flex items-center justify-center overflow-hidden border border-[#52B788]/20">
              <div className="flex flex-col items-center gap-3 text-[#2D6A4F]/30 p-8 text-center">
                <Users size={64} strokeWidth={1} />
                <p className="text-sm font-medium">Foto da equipe em campo</p>
                <p className="text-xs text-gray-400">Insira a imagem aqui: /public/foto-comunidade.jpg</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#2D6A4F] text-white rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-2xl font-bold">+10 anos</p>
              <p className="text-xs text-[#95D5B2]">de atuação no Brasil</p>
            </div>
          </div>

          <div>
            <SectionHeading
              tag="Nossa história"
              title="Nascemos do campo, crescemos com o povo"
              subtitle="O Instituto Crescer Brasil surgiu em 2013 da percepção de que saúde e desenvolvimento não podem ser separados. Agricultores familiares sem acesso a médicos, idosos esquecidos, crianças sem óculos para enxergar o quadro na escola — essas realidades nos motivam todos os dias."
            />
            <ul className="space-y-3 mb-8">
              {[
                "Missão: Promover saúde, educação e bem-estar em comunidades vulneráveis",
                "Visão: Um Brasil onde toda pessoa tenha acesso à saúde e à dignidade",
                "Valores: Transparência, cuidado, respeito à diversidade e sustentabilidade",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                  <CheckCircle size={18} className="text-[#2D6A4F] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/sobre" variant="primary" size="lg">
              Conheça nossa história
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* ── PARCEIROS ── */}
      <section className="py-20 bg-[#F1F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Quem nos apoia"
            title="Parceiros que acreditam na mudança"
            subtitle="Empresas, entidades e pessoas que escolheram unir forças para ampliar nosso alcance e impacto social."
            center
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-xl h-20 flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-xs text-gray-300 font-medium text-center">{p.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/parcerias" variant="outline">
              <Building2 size={16} />
              Quero ser parceiro
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA DOAÇÃO / VOLUNTÁRIO ── */}
      <section className="py-20 bg-[#1B4332] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Junte-se a nós
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Cada gesto importa. Cada vida conta.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Seja como doador, voluntário ou empresa parceira — sua contribuição chega diretamente a quem precisa. Venha construir um Brasil mais justo e saudável conosco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/doacoes"
              className="inline-flex items-center justify-center gap-2 bg-[#E8A958] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#d4954a] transition-colors"
            >
              <Heart size={20} />
              Fazer uma doação
            </Link>
            <Link
              href="/parcerias"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white hover:text-[#1B4332] transition-colors"
            >
              <Users size={20} />
              Ser voluntário
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRANSPARÊNCIA TEASER ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#D6EAF8] flex items-center justify-center shrink-0">
              <BookOpen size={24} className="text-[#457B9D]" />
            </div>
            <div>
              <h3 className="font-bold text-[#1B4332] text-lg">Portal de Transparência</h3>
              <p className="text-gray-500 text-sm">Relatórios anuais, balanços financeiros e prestação de contas disponíveis para todos.</p>
            </div>
          </div>
          <Link
            href="/transparencia"
            className="inline-flex items-center gap-2 border-2 border-[#2D6A4F] text-[#2D6A4F] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#2D6A4F] hover:text-white transition-colors shrink-0"
          >
            Acessar portal
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

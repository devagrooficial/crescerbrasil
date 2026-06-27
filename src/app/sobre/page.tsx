import { CheckCircle, Target, Eye, Heart, Sprout, Users, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

const valores = [
  { icon: Heart, title: "Cuidado Humano", desc: "Cada pessoa atendida é tratada com dignidade, empatia e respeito, independentemente de sua condição social, origem ou crença." },
  { icon: CheckCircle, title: "Transparência", desc: "Prestamos contas de cada recurso recebido, porque acreditamos que a confiança é a base de qualquer transformação social duradoura." },
  { icon: Sprout, title: "Sustentabilidade", desc: "Nossas ações promovem autonomia nas comunidades, respeitando o meio ambiente e fortalecendo a agricultura familiar como pilar econômico." },
  { icon: Users, title: "Coletividade", desc: "Nenhuma transformação acontece sozinha. Trabalhamos em rede, valorizando cada parceiro, voluntário e beneficiário como parte da solução." },
  { icon: Target, title: "Impacto Real", desc: "Medimos nosso sucesso pelo número de vidas transformadas, não por indicadores abstratos. Resultados concretos guiam cada decisão." },
  { icon: Award, title: "Excelência Técnica", desc: "Nossos profissionais são capacitados e comprometidos. Saúde de qualidade é um direito, não um privilégio, e entregamos com esse padrão." },
];

const timeline = [
  { year: "2013", title: "Fundação", desc: "O Instituto Crescer Brasil é fundado em Brasília por um grupo de profissionais de saúde, agrônomos e educadores preocupados com a desigualdade no acesso à saúde no campo." },
  { year: "2015", title: "Primeiro Projeto de Saúde", desc: "Lançamento do projeto Saúde do Idoso, com atendimentos médicos e psicológicos em 5 municípios do entorno do Distrito Federal." },
  { year: "2017", title: "Unidade Móvel Odontológica", desc: "Aquisição do primeiro consultório odontológico móvel, expandindo o alcance para comunidades rurais antes impossíveis de atender." },
  { year: "2019", title: "Certificação OSCIP", desc: "Reconhecimento pelo Ministério da Justiça como Organização da Sociedade Civil de Interesse Público, consolidando nossa credibilidade institucional." },
  { year: "2021", title: "Expansão Nacional", desc: "Início da atuação em parceria com estados do Nordeste e Norte, levando os projetos de Saúde da Mulher e Oftalmologia a regiões de maior vulnerabilidade." },
  { year: "2023", title: "10 Anos de Impacto", desc: "Comemoramos uma década com mais de 12.400 pessoas atendidas, 47 municípios alcançados e uma rede de 320 voluntários ativos em todo o Brasil." },
];

const equipe = [
  { nome: "Dra. Fernanda Moraes", cargo: "Diretora Executiva", area: "Médica Sanitarista", img: "/equipe/fernanda.jpg" },
  { nome: "Eng. Ricardo Alves", cargo: "Diretor de Projetos", area: "Engenheiro Agrônomo", img: "/equipe/ricardo.jpg" },
  { nome: "Dra. Camila Torres", cargo: "Coord. de Saúde", area: "Médica Clínica Geral", img: "/equipe/camila.jpg" },
  { nome: "Prof. Marco Andrade", cargo: "Coord. de Educação", area: "Pedagogo Social", img: "/equipe/marco.jpg" },
];

export const metadata = {
  title: "Sobre Nós | Instituto Crescer Brasil",
  description: "Conheça a história, missão, visão e valores do Instituto Crescer Brasil — mais de 10 anos transformando vidas através da saúde e do desenvolvimento sustentável.",
};

export default function SobrePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-linear-to-br from-[#1B4332] via-[#2D6A4F] to-[#40916C] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Quem somos
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
            Uma instituição construída com propósito, movida por pessoas
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Há mais de dez anos, o Instituto Crescer Brasil trabalha na interseção entre saúde pública, educação e agricultura familiar — porque acreditamos que o desenvolvimento humano integral é o caminho para um país mais justo.
          </p>
        </div>
      </section>

      {/* MISSÃO, VISÃO, VALORES CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-[#F1F5F0] p-8 border border-[#52B788]/20">
            <div className="w-12 h-12 rounded-xl bg-[#2D6A4F] flex items-center justify-center mb-4">
              <Target size={22} className="text-white" />
            </div>
            <h2 className="text-xl font-bold text-[#1B4332] mb-3">Nossa Missão</h2>
            <p className="text-gray-600 leading-relaxed">
              Promover saúde integral, educação de qualidade e desenvolvimento sustentável para comunidades vulneráveis do Brasil, com foco na agricultura familiar e no fortalecimento dos laços comunitários.
            </p>
          </div>
          <div className="rounded-2xl bg-[#D6EAF8]/40 p-8 border border-[#457B9D]/20">
            <div className="w-12 h-12 rounded-xl bg-[#457B9D] flex items-center justify-center mb-4">
              <Eye size={22} className="text-white" />
            </div>
            <h2 className="text-xl font-bold text-[#1B4332] mb-3">Nossa Visão</h2>
            <p className="text-gray-600 leading-relaxed">
              Um Brasil onde toda pessoa, independentemente de onde mora ou de quanto ganha, tenha acesso a saúde de qualidade, educação transformadora e condições dignas de vida e trabalho.
            </p>
          </div>
          <div className="rounded-2xl bg-[#FFF3E0]/60 p-8 border border-[#E8A958]/20">
            <div className="w-12 h-12 rounded-xl bg-[#E8A958] flex items-center justify-center mb-4">
              <Heart size={22} className="text-white" />
            </div>
            <h2 className="text-xl font-bold text-[#1B4332] mb-3">Nossos Valores</h2>
            <p className="text-gray-600 leading-relaxed">
              Cuidado humano, transparência, sustentabilidade, coletividade, impacto real e excelência técnica. Esses princípios orientam cada ação, cada parceria e cada decisão que tomamos.
            </p>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="py-20 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Nossa trajetória"
            title="Uma história de superação e compromisso"
            subtitle="Cada marco da nossa história é o resultado do esforço coletivo de voluntários, doadores, parceiros e, principalmente, das comunidades que nos recebem de braços abertos."
          />
          <div className="relative">
            <div className="hidden md:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-[#52B788]/30" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year} className={`flex flex-col md:flex-row gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${i % 2 !== 0 ? "md:ml-0" : ""}`}>
                      <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-widest">{item.year}</span>
                      <h3 className="text-lg font-bold text-[#1B4332] mt-1 mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-0 items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#2D6A4F] ring-4 ring-[#F8FAF9] relative z-10" />
                  </div>
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="O que nos guia"
            title="Valores que vivemos na prática"
            subtitle="Não são palavras em uma parede. São princípios que guiam cada atendimento, cada parceria e cada real investido."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-[#F8FAF9] border border-gray-100 hover:border-[#52B788]/40 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#2D6A4F]/10 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-[#2D6A4F]" />
                </div>
                <h3 className="font-bold text-[#1B4332] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="py-20 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Quem faz acontecer"
            title="Nossa equipe de liderança"
            subtitle="Profissionais comprometidos com a causa, que doam muito mais do que suas competências técnicas."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipe.map((membro) => (
              <div key={membro.nome} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="aspect-square bg-[#F1F5F0] flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-[#2D6A4F]/30">
                    <Users size={48} strokeWidth={1} />
                    <p className="text-xs">Foto do membro</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1B4332]">{membro.nome}</h3>
                  <p className="text-[#2D6A4F] text-sm font-medium">{membro.cargo}</p>
                  <p className="text-gray-400 text-xs mt-1">{membro.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1B4332]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Quer fazer parte dessa história?</h2>
          <p className="text-white/75 mb-8 text-lg">
            Seja como voluntário, parceiro ou doador, sua presença faz toda a diferença para as comunidades que atendemos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/parcerias" size="lg" variant="secondary">
              Seja voluntário
            </Button>
            <Button href="/doacoes" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1B4332]">
              Faça uma doação
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

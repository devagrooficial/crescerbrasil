import {
  Stethoscope, Heart, SmilePlus, Eye, Users, CheckCircle, MapPin,
  Calendar, TrendingUp, ArrowRight
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

const projetos = [
  {
    id: "saude-idoso",
    tag: "Saúde do Idoso",
    title: "Cuidando de quem cuidou de nós",
    icon: Stethoscope,
    color: "green" as const,
    impacto: ["2.800 idosos atendidos", "12 municípios", "Desde 2015"],
    descricao: `O projeto Saúde do Idoso nasceu da constatação de que, em muitas comunidades rurais do Brasil, idosos vivem em condições de extrema vulnerabilidade — sem acesso a médicos, sem transporte para consultas e, muitas vezes, sem ninguém que cuide de sua saúde mental.

Nossa equipe multidisciplinar — composta por médicos clínicos, psicólogos e assistentes sociais — realiza mutirões periódicos nas comunidades, levando atendimento médico geral, acompanhamento psicológico e suporte social diretamente à porta de quem precisa.

Além das consultas, distribuímos kits completos de materiais de higiene pessoal, que incluem sabonetes, pasta dental, escova, absorventes e itens de cuidado básico que muitas vezes estão fora do alcance financeiro das famílias. Para o idoso, ter dignidade no cuidado com o próprio corpo é um ato transformador.`,
    acoes: [
      "Consultas médicas de clínica geral e geriatria",
      "Atendimento psicológico individual e em grupo",
      "Distribuição de kits de higiene pessoal",
      "Rastreamento de doenças crônicas (diabetes, hipertensão)",
      "Encaminhamento para especialistas via rede parceira",
      "Atividades de socialização e bem-estar",
    ],
    bgGradient: "from-[#F1F5F0] to-[#E8F5E9]",
    accentColor: "text-[#2D6A4F]",
    iconBg: "bg-[#2D6A4F]",
    borderColor: "border-[#52B788]/30",
  },
  {
    id: "saude-mulher",
    tag: "Saúde da Mulher",
    title: "Prevenção que salva vidas",
    icon: Heart,
    color: "blue" as const,
    impacto: ["3.400 mulheres atendidas", "15 municípios", "Desde 2016"],
    descricao: `O câncer de colo de útero e o câncer de mama são amplamente evitáveis quando detectados cedo — mas milhares de mulheres brasileiras, especialmente nas zonas rurais, nunca realizaram um exame preventivo. Essa realidade é inaceitável, e o projeto Saúde da Mulher existe para mudá-la.

Nossas ações incluem campanhas educativas sobre prevenção de ISTs, rodas de conversa sobre saúde sexual e reprodutiva, e a realização de exames de Papanicolau e mamografias com equipes médicas especializadas. Trabalhamos também para desmistificar o tabu em torno da saúde da mulher em comunidades mais tradicionais, onde o acesso à informação ainda é muito limitado.

O acolhimento é o centro do nosso trabalho: criamos um ambiente seguro, respeitoso e sem julgamentos, onde cada mulher se sinta à vontade para cuidar da sua saúde com dignidade.`,
    acoes: [
      "Exames de Papanicolau preventivos",
      "Mamografias com equipe especializada",
      "Conscientização sobre ISTs (HPV, HIV, Sífilis)",
      "Distribuição de materiais educativos e contraceptivos",
      "Rodas de conversa sobre saúde mental feminina",
      "Encaminhamento para tratamento em casos positivos",
    ],
    bgGradient: "from-[#D6EAF8]/30 to-[#EAF4FB]",
    accentColor: "text-[#457B9D]",
    iconBg: "bg-[#457B9D]",
    borderColor: "border-[#457B9D]/20",
  },
  {
    id: "odontologia",
    tag: "Odontologia Móvel",
    title: "Sorrisos que chegam onde é preciso",
    icon: SmilePlus,
    color: "amber" as const,
    impacto: ["1.900 pacientes", "8 municípios", "Desde 2017"],
    descricao: `O acesso à saúde bucal ainda é um dos maiores desafios do sistema de saúde brasileiro. Em comunidades rurais, a situação é ainda mais crítica: clínicas odontológicas são raras, caras e muitas vezes inacessíveis para quem não tem transporte.

Nossa resposta foi simples e poderosa: levar o consultório até as pessoas. O Instituto Crescer Brasil opera consultórios odontológicos móveis totalmente equipados, que percorrem as comunidades em regime de mutirão, atendendo desde crianças na primeira dentição até adultos que há anos não visitam um dentista.

O projeto atende o ciclo completo da saúde bucal: prevenção (aplicação de flúor, orientação de higiene, selantes), tratamento (restaurações, extrações) e reabilitação. Para muitas crianças e adolescentes, é o primeiro contato com o cuidado odontológico profissional — e esse momento tem um impacto que vai muito além do sorriso.`,
    acoes: [
      "Atendimento odontológico infantil, adolescente e adulto",
      "Aplicação preventiva de flúor e selantes",
      "Restaurações e extrações",
      "Distribuição de kits de higiene bucal",
      "Orientação em saúde bucal para escolas",
      "Próteses dentárias para casos selecionados",
    ],
    bgGradient: "from-[#FFF3E0]/60 to-[#FFF8E1]",
    accentColor: "text-[#E8A958]",
    iconBg: "bg-[#E8A958]",
    borderColor: "border-[#E8A958]/25",
  },
  {
    id: "oftalmologia",
    tag: "Oftalmologia Comunitária",
    title: "Ver o mundo com clareza é um direito",
    icon: Eye,
    color: "green" as const,
    impacto: ["2.300 pacientes", "11 municípios", "Desde 2019"],
    descricao: `Imagine uma criança que não consegue enxergar o quadro da sala de aula e é rotulada de desatenta ou com dificuldade de aprendizagem. Ou um trabalhador rural que, sem perceber, foi perdendo a visão ao longo dos anos e nunca teve acesso a um oftalmologista. Essas histórias são muito mais comuns do que imaginamos.

O projeto Oftalmologia Comunitária realiza triagens visuais em massa, consultas com médicos oftalmologistas voluntários e distribui óculos de grau gratuitamente para os atendidos. A diferença na vida das pessoas é imediata e visível — literalmente.

Além do atendimento clínico, realizamos campanhas de conscientização sobre saúde ocular e encaminhamos casos mais complexos (cataratas, glaucoma, doenças retinianas) para centros especializados parceiros, garantindo a continuidade do cuidado.`,
    acoes: [
      "Triagem visual comunitária em escolas e praças",
      "Consultas com médicos oftalmologistas voluntários",
      "Distribuição gratuita de óculos de grau",
      "Detecção precoce de catarata e glaucoma",
      "Encaminhamento para cirurgias em hospitais parceiros",
      "Orientação sobre saúde ocular e prevenção",
    ],
    bgGradient: "from-[#F1F5F0] to-[#E8F5E9]",
    accentColor: "text-[#2D6A4F]",
    iconBg: "bg-[#40916C]",
    borderColor: "border-[#52B788]/30",
  },
];

export const metadata = {
  title: "Nossos Projetos | Instituto Crescer Brasil",
  description: "Conheça os projetos de saúde do Instituto Crescer Brasil: Saúde do Idoso, Saúde da Mulher, Odontologia Móvel e Oftalmologia Comunitária.",
};

export default function ProjetosPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-linear-to-br from-[#1B4332] via-[#2D6A4F] to-[#40916C] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Nossas iniciativas
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
            Projetos que chegam onde o sistema ainda não chegou
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Cada projeto nasce de uma necessidade real, identificada nas comunidades que visitamos. Aqui, saúde não é um serviço distante — é um encontro humano que transforma.
          </p>
        </div>
      </section>

      {/* STATS RÁPIDOS */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-center">
            {[
              { icon: Users, value: "10.400+", label: "Pacientes atendidos" },
              { icon: MapPin, value: "47", label: "Municípios alcançados" },
              { icon: Calendar, value: "10+", label: "Anos de atuação" },
              { icon: TrendingUp, value: "320+", label: "Voluntários ativos" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon size={20} className="text-[#2D6A4F]" />
                <div className="text-left">
                  <p className="text-xl font-bold text-[#1B4332]">{value}</p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS DETALHADOS */}
      {projetos.map((p, i) => {
        const Icon = p.icon;
        return (
          <section
            key={p.id}
            id={p.id}
            className={`py-20 bg-gradient-to-br ${p.bgGradient} ${i % 2 !== 0 ? "bg-white" : ""}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
                {/* Texto */}
                <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${p.iconBg} flex items-center justify-center`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${p.accentColor}`}>{p.tag}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#1B4332] mb-5">{p.title}</h2>
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-6">
                    {p.descricao.split("\n\n").map((par, j) => (
                      <p key={j}>{par}</p>
                    ))}
                  </div>
                  <Button href="/doacoes" variant="primary">
                    Apoiar este projeto
                    <ArrowRight size={16} />
                  </Button>
                </div>

                {/* Cards de Ações + Impacto */}
                <div className={`space-y-4 ${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  {/* Impacto */}
                  <div className={`rounded-2xl bg-white border ${p.borderColor} p-6 shadow-sm`}>
                    <h3 className="font-bold text-[#1B4332] mb-4 text-sm uppercase tracking-wide">Números de Impacto</h3>
                    <div className="flex flex-wrap gap-3">
                      {p.impacto.map((item) => (
                        <span key={item} className={`inline-flex items-center gap-1.5 text-sm font-medium ${p.accentColor} bg-white border ${p.borderColor} px-3 py-1.5 rounded-full`}>
                          <TrendingUp size={13} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Ações */}
                  <div className={`rounded-2xl bg-white border ${p.borderColor} p-6 shadow-sm`}>
                    <h3 className="font-bold text-[#1B4332] mb-4 text-sm uppercase tracking-wide">O que realizamos</h3>
                    <ul className="space-y-2.5">
                      {p.acoes.map((acao) => (
                        <li key={acao} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <CheckCircle size={16} className={`${p.accentColor} mt-0.5 shrink-0`} />
                          {acao}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-[#1B4332]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Você pode ampliar o alcance desses projetos
          </h2>
          <p className="text-white/75 mb-8 text-base leading-relaxed">
            Cada doação, cada hora voluntária e cada parceria empresarial nos permite chegar a mais pessoas, em mais lugares, com mais qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/doacoes" size="lg" variant="secondary">
              <Heart size={18} />
              Fazer uma doação
            </Button>
            <Button href="/parcerias" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1B4332]">
              Ser voluntário
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

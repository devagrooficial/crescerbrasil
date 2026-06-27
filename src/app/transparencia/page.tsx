import {
  FileText, Download, BarChart3, CheckCircle, Shield, ExternalLink,
  Calendar, TrendingUp, PieChart, Users
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

const relatorios = [
  {
    ano: "2024",
    tipo: "Relatório Anual de Atividades",
    descricao: "Resumo completo de todas as ações, projetos e impacto social do Instituto no ano de 2024.",
    paginas: 48,
    arquivo: "/documentos/relatorio-anual-2024.pdf",
    destaque: true,
  },
  {
    ano: "2024",
    tipo: "Balanço Financeiro",
    descricao: "Demonstrações contábeis auditadas com receitas, despesas e destinação de recursos.",
    paginas: 22,
    arquivo: "/documentos/balanco-financeiro-2024.pdf",
    destaque: true,
  },
  {
    ano: "2023",
    tipo: "Relatório Anual de Atividades",
    descricao: "Resultados alcançados, comunidades atendidas e projetos executados em 2023.",
    paginas: 44,
    arquivo: "/documentos/relatorio-anual-2023.pdf",
    destaque: false,
  },
  {
    ano: "2023",
    tipo: "Balanço Financeiro",
    descricao: "Demonstrações contábeis com receitas de R$ 1,2M e aplicação detalhada por projeto.",
    paginas: 20,
    arquivo: "/documentos/balanco-financeiro-2023.pdf",
    destaque: false,
  },
  {
    ano: "2022",
    tipo: "Relatório Anual de Atividades",
    descricao: "Projetos executados, impacto durante a retomada pós-pandemia.",
    paginas: 38,
    arquivo: "/documentos/relatorio-anual-2022.pdf",
    destaque: false,
  },
  {
    ano: "2022",
    tipo: "Balanço Financeiro",
    descricao: "Demonstrações contábeis auditadas referentes ao exercício de 2022.",
    paginas: 18,
    arquivo: "/documentos/balanco-financeiro-2022.pdf",
    destaque: false,
  },
];

const destinacaoRecursos = [
  { area: "Projetos de Saúde", percentual: 72, cor: "bg-[#2D6A4F]" },
  { area: "Capacitação e Educação", percentual: 13, cor: "bg-[#457B9D]" },
  { area: "Gestão e Administrativo", percentual: 9, cor: "bg-[#E8A958]" },
  { area: "Comunicação e Captação", percentual: 6, cor: "bg-[#52B788]" },
];

const certificacoes = [
  { titulo: "OSCIP", subtitulo: "Organização da Sociedade Civil de Interesse Público", orgao: "Ministério da Justiça", ano: "2019" },
  { titulo: "Utilidade Pública Federal", subtitulo: "Reconhecimento federal de utilidade pública", orgao: "Presidência da República", ano: "2020" },
  { titulo: "Auditoria Independente", subtitulo: "Balanços auditados por empresa externa", orgao: "Deloitte (fictício)", ano: "Anual" },
  { titulo: "ISO 9001:2015", subtitulo: "Sistema de gestão da qualidade", orgao: "Bureau Veritas (fictício)", ano: "2021" },
];

export const metadata = {
  title: "Transparência | Instituto Crescer Brasil",
  description: "Portal de transparência do Instituto Crescer Brasil: relatórios anuais, balanços financeiros e prestação de contas.",
};

export default function TransparenciaPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-linear-to-br from-[#1B4332] via-[#2D6A4F] to-[#40916C] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Portal de Transparência
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
            Prestação de contas é parte do nosso compromisso
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Acreditamos que a confiança é a base de qualquer transformação social. Por isso, publicamos todas as nossas informações financeiras, relatórios de atividades e certificações de forma aberta e acessível.
          </p>
        </div>
      </section>

      {/* NÚMEROS DO EXERCÍCIO ATUAL */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-[#2D6A4F] uppercase tracking-widest mb-4 text-center">Exercício 2024</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: TrendingUp, value: "R$ 1.480.000", label: "Total captado" },
              { icon: Users, value: "4.100+", label: "Pessoas atendidas" },
              { icon: BarChart3, value: "R$ 1.065.600", label: "Aplicado em projetos (72%)" },
              { icon: PieChart, value: "R$ 133.200", label: "Gestão e administrativo (9%)" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center p-5 rounded-2xl bg-[#F1F5F0]">
                <Icon size={20} className="text-[#2D6A4F] mx-auto mb-2" />
                <p className="text-xl font-bold text-[#1B4332]">{value}</p>
                <p className="text-xs text-gray-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINAÇÃO DE RECURSOS */}
      <section className="py-20 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                tag="Onde vai cada real"
                title="Destinação transparente dos recursos"
                subtitle="A maior parte dos recursos captados vai diretamente para a execução dos projetos de saúde, com gestão enxuta e responsável."
              />
              <div className="space-y-4">
                {destinacaoRecursos.map(({ area, percentual, cor }) => (
                  <div key={area}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-gray-700">{area}</span>
                      <span className="text-sm font-bold text-[#1B4332]">{percentual}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full ${cor} rounded-full`} style={{ width: `${percentual}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-gray-400 leading-relaxed">
                * Dados referentes ao exercício fiscal de 2024. Para mais detalhes, consulte o Balanço Financeiro completo disponível abaixo.
              </p>
            </div>

            {/* Visão gráfica simplificada */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1B4332] mb-6 text-center">Composição das Receitas 2024</h3>
              <div className="space-y-4">
                {[
                  { fonte: "Doações Pessoas Físicas", valor: "R$ 592.000", pct: 40 },
                  { fonte: "Parcerias Empresariais", valor: "R$ 444.000", pct: 30 },
                  { fonte: "Editais e Subvenções", valor: "R$ 296.000", pct: 20 },
                  { fonte: "Outras Receitas", valor: "R$ 148.000", pct: 10 },
                ].map(({ fonte, valor, pct }) => (
                  <div key={fonte} className="flex items-center justify-between gap-4 p-3 rounded-xl bg-[#F8FAF9]">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-700">{fonte}</p>
                      <p className="text-xs text-gray-400">{valor}</p>
                    </div>
                    <span className="text-sm font-bold text-[#2D6A4F] shrink-0">{pct}%</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between">
                <span className="text-sm font-semibold text-gray-600">Total captado</span>
                <span className="text-sm font-bold text-[#1B4332]">R$ 1.480.000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATÓRIOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Documentos públicos"
            title="Relatórios e Balanços"
            subtitle="Todos os documentos estão disponíveis para download em PDF. Balanços auditados por empresa independente."
          />

          {/* Destaque 2024 */}
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {relatorios.filter(r => r.destaque).map((r) => (
              <div key={r.tipo + r.ano} className="bg-[#F1F5F0] border-2 border-[#52B788]/40 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2D6A4F] flex items-center justify-center shrink-0">
                      <FileText size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wide">{r.ano} · Mais recente</span>
                      <p className="font-bold text-[#1B4332] text-sm mt-0.5">{r.tipo}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{r.descricao}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{r.paginas} páginas · PDF</span>
                  <a
                    href={r.arquivo}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D6A4F] hover:underline"
                    download
                  >
                    <Download size={14} />
                    Baixar
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Histórico */}
          <h3 className="font-semibold text-[#1B4332] mb-4 text-sm uppercase tracking-wide">Exercícios Anteriores</h3>
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            {relatorios.filter(r => !r.destaque).map((r, i) => (
              <div
                key={r.tipo + r.ano}
                className={`flex items-center gap-4 p-5 ${i < relatorios.filter(r => !r.destaque).length - 1 ? "border-b border-gray-100" : ""} hover:bg-[#F8FAF9] transition-colors`}
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                  <FileText size={15} className="text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-gray-400">{r.ano}</span>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="text-sm font-semibold text-gray-700 truncate">{r.tipo}</span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{r.descricao}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-gray-300 hidden sm:inline">{r.paginas}p</span>
                  <a href={r.arquivo} download className="flex items-center gap-1 text-xs font-semibold text-[#2D6A4F] hover:underline">
                    <Download size={13} />
                    PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICAÇÕES */}
      <section className="py-20 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Reconhecimentos"
            title="Certificações e credenciais"
            subtitle="Nossa atuação é reconhecida por órgãos públicos e entidades independentes, garantindo a seriedade e legitimidade das nossas ações."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certificacoes.map((c) => (
              <div key={c.titulo} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center mx-auto mb-3">
                  <Shield size={22} className="text-[#2D6A4F]" />
                </div>
                <h3 className="font-bold text-[#1B4332] text-base mb-1">{c.titulo}</h3>
                <p className="text-gray-500 text-xs mb-3 leading-relaxed">{c.subtitulo}</p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-400">{c.orgao}</p>
                  <p className="text-xs font-semibold text-[#2D6A4F] mt-0.5">Desde {c.ano}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO REPORTAR */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#FFF3E0] flex items-center justify-center mx-auto mb-4">
            <ExternalLink size={24} className="text-[#E8A958]" />
          </div>
          <h2 className="text-2xl font-bold text-[#1B4332] mb-3">Encontrou algo que não está claro?</h2>
          <p className="text-gray-500 mb-6 text-sm leading-relaxed">
            A transparência é um processo contínuo. Se você tem dúvidas sobre qualquer documento, dado financeiro ou ação do Instituto, nossa equipe está à disposição para responder.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:transparencia@crescerbrasil.org.br"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#2D6A4F] text-[#2D6A4F] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#2D6A4F] hover:text-white transition-colors"
            >
              <CheckCircle size={16} />
              transparencia@crescerbrasil.org.br
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

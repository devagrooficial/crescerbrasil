"use client";

import { useState } from "react";
import {
  Heart, CreditCard, Smartphone, Package, Clock,
  CheckCircle, Shield, Lock, ArrowRight, Stethoscope, Eye, SmilePlus
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const valores = [20, 50, 100, 200, 500];

const impactos: Record<number, string> = {
  20: "Cobre um kit de higiene completo para um idoso em vulnerabilidade",
  50: "Financia uma consulta oftalmológica com distribuição de óculos",
  100: "Apoia um atendimento odontológico completo para uma criança",
  200: "Custeia uma consulta médica + psicológica para uma mulher em situação de risco",
  500: "Financia um dia inteiro de mutirão de saúde em uma comunidade rural",
};

type TabType = "financeiro" | "equipamentos" | "hora-tecnica";

export default function DoacoesPage() {
  const [valorSelecionado, setValorSelecionado] = useState<number>(100);
  const [valorCustom, setValorCustom] = useState("");
  const [tab, setTab] = useState<TabType>("financeiro");
  const [periodo, setPeriodo] = useState<"mensal" | "unico">("mensal");

  const valorFinal = valorCustom ? Number(valorCustom) : valorSelecionado;

  return (
    <>
      {/* HERO */}
      <section className="bg-linear-to-br from-[#1B4332] via-[#2D6A4F] to-[#40916C] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Faça a diferença
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
            Sua doação transforma vidas reais, em comunidades reais
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Cada contribuição chega diretamente a quem precisa — sem intermediários desnecessários, com total transparência e rastreabilidade de impacto.
          </p>
        </div>
      </section>

      {/* TABS DE DOAÇÃO */}
      <section className="py-16 bg-[#F8FAF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab navigation */}
          <div className="flex rounded-2xl bg-white border border-gray-200 p-1.5 mb-10 gap-1">
            {([
              { id: "financeiro", label: "Recurso Financeiro", icon: CreditCard },
              { id: "equipamentos", label: "Doação de Equipamentos", icon: Package },
              { id: "hora-tecnica", label: "Hora Técnica", icon: Clock },
            ] as { id: TabType; label: string; icon: typeof CreditCard }[]).map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-sm font-medium transition-all ${
                  tab === id ? "bg-[#2D6A4F] text-white shadow-sm" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

          {/* Tab: Financeiro */}
          {tab === "financeiro" && (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8">
                {/* Período */}
                <div className="flex gap-2 mb-8">
                  {(["mensal", "unico"] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPeriodo(p)}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${
                        periodo === p ? "border-[#2D6A4F] text-[#2D6A4F] bg-[#F1F5F0]" : "border-gray-200 text-gray-400 hover:border-gray-300"
                      }`}
                    >
                      {p === "mensal" ? "Doação Mensal" : "Doação Única"}
                    </button>
                  ))}
                </div>

                {/* Valores */}
                <div className="mb-3">
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">Escolha o valor</label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                    {valores.map((v) => (
                      <button
                        key={v}
                        onClick={() => { setValorSelecionado(v); setValorCustom(""); }}
                        className={`py-3 rounded-xl text-sm font-bold border-2 transition-all ${
                          valorSelecionado === v && !valorCustom
                            ? "border-[#2D6A4F] bg-[#2D6A4F] text-white"
                            : "border-gray-200 text-gray-600 hover:border-[#52B788]"
                        }`}
                      >
                        R$ {v}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">R$</span>
                    <input
                      type="number"
                      placeholder="Outro valor"
                      value={valorCustom}
                      onChange={(e) => { setValorCustom(e.target.value); setValorSelecionado(0); }}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors"
                    />
                  </div>
                </div>

                {/* Impacto */}
                {(valorFinal > 0 && impactos[valorFinal]) && (
                  <div className="flex items-start gap-3 bg-[#F1F5F0] rounded-xl p-4 mb-6">
                    <CheckCircle size={18} className="text-[#2D6A4F] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#1B4332] font-medium">{impactos[valorFinal]}</p>
                  </div>
                )}

                {/* Formas de pagamento */}
                <div className="mb-6">
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">Forma de pagamento</label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 border-2 border-[#2D6A4F] rounded-xl p-4 cursor-pointer bg-[#F1F5F0]">
                      <Smartphone size={20} className="text-[#2D6A4F]" />
                      <div>
                        <p className="text-sm font-semibold text-[#1B4332]">PIX</p>
                        <p className="text-xs text-gray-400">Instantâneo</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-[#52B788] transition-colors">
                      <CreditCard size={20} className="text-gray-400" />
                      <div>
                        <p className="text-sm font-semibold text-gray-600">Cartão</p>
                        <p className="text-xs text-gray-400">Crédito/Débito</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PIX Key Display */}
                <div className="bg-[#F8FAF9] border border-[#52B788]/30 rounded-2xl p-5 mb-6">
                  <p className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wide mb-2">Chave PIX</p>
                  <div className="flex items-center justify-between gap-3">
                    <code className="text-sm font-mono text-[#1B4332] break-all">08.035.647/0001-60</code>
                    <button
                      onClick={() => navigator.clipboard.writeText("08.035.647/0001-60")}
                      className="text-xs text-[#2D6A4F] font-semibold shrink-0 hover:underline"
                    >
                      Copiar
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">CNPJ — Instituto Crescer Brasil</p>
                </div>

                <button className="w-full bg-[#2D6A4F] text-white py-4 rounded-2xl font-bold text-base hover:bg-[#1B4332] transition-colors flex items-center justify-center gap-2">
                  <Heart size={20} />
                  Confirmar doação {valorFinal > 0 ? `de R$ ${valorFinal}` : ""}
                  {periodo === "mensal" ? "/mês" : ""}
                </button>

                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Shield size={12} /> Dados protegidos</span>
                  <span className="flex items-center gap-1"><Lock size={12} /> Pagamento seguro</span>
                  <span className="flex items-center gap-1"><CheckCircle size={12} /> Recibo por e-mail</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab: Equipamentos */}
          {tab === "equipamentos" && (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-[#1B4332] mb-2">Doação de Equipamentos</h2>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Equipamentos médicos, odontológicos, de informática ou outros materiais em bom estado são fundamentais para ampliar nosso atendimento. Preencha o formulário e nossa equipe logística entrará em contato.
              </p>
              <div className="grid gap-4">
                {[
                  { label: "Seu nome completo", type: "text", placeholder: "Maria da Silva" },
                  { label: "E-mail de contato", type: "email", placeholder: "email@exemplo.com" },
                  { label: "Telefone / WhatsApp", type: "tel", placeholder: "(11) 99999-9999" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Descrição dos equipamentos</label>
                  <textarea
                    rows={4}
                    placeholder="Descreva os itens que deseja doar: tipo, quantidade, estado de conservação e qualquer informação relevante..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors resize-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Cidade/Estado onde o item está</label>
                  <input
                    type="text"
                    placeholder="Ex: São Paulo – SP"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors"
                  />
                </div>
                <button className="w-full bg-[#2D6A4F] text-white py-4 rounded-2xl font-bold text-base hover:bg-[#1B4332] transition-colors flex items-center justify-center gap-2">
                  <Package size={18} />
                  Enviar solicitação de doação
                </button>
              </div>
            </div>
          )}

          {/* Tab: Hora Técnica */}
          {tab === "hora-tecnica" && (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-[#1B4332] mb-2">Doação de Hora Técnica</h2>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Médicos, dentistas, psicólogos, oftalmologistas e outros profissionais de saúde podem fazer parte dos nossos mutirões, doando horas de atendimento voluntário. Seu tempo vale vidas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {[
                  { icon: Stethoscope, label: "Médico Clínico Geral / Especialista" },
                  { icon: SmilePlus, label: "Odontologista" },
                  { icon: Eye, label: "Oftalmologista" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-2 p-4 bg-[#F1F5F0] rounded-xl">
                    <Icon size={24} className="text-[#2D6A4F]" />
                    <p className="text-xs font-medium text-[#1B4332]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4">
                {[
                  { label: "Nome completo", type: "text", placeholder: "Dr. João Souza" },
                  { label: "E-mail profissional", type: "email", placeholder: "joao@clinica.com" },
                  { label: "Telefone / WhatsApp", type: "tel", placeholder: "(11) 99999-9999" },
                  { label: "Número do CRM/CRO/CRP", type: "text", placeholder: "CRM-SP 123456" },
                  { label: "Especialidade", type: "text", placeholder: "Ex: Oftalmologista, Clínico Geral, Psicólogo..." },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Disponibilidade</label>
                  <textarea
                    rows={3}
                    placeholder="Informe os dias/períodos em que está disponível para participar de mutirões..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors resize-none"
                  />
                </div>
                <button className="w-full bg-[#2D6A4F] text-white py-4 rounded-2xl font-bold text-base hover:bg-[#1B4332] transition-colors flex items-center justify-center gap-2">
                  <Clock size={18} />
                  Quero ser voluntário de saúde
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* POR QUE CONFIAR */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Sua confiança importa"
            title="Por que confiar no Instituto Crescer Brasil?"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "OSCIP Certificada", desc: "Reconhecida pelo Ministério da Justiça como entidade de interesse público." },
              { icon: CheckCircle, title: "Auditoria Anual", desc: "Balanços financeiros auditados por empresa independente e publicados no nosso portal." },
              { icon: Lock, title: "Nota Fiscal", desc: "Toda doação financeira gera recibo eletrônico para dedução no IR." },
              { icon: ArrowRight, title: "Rastreio de Impacto", desc: "Você recebe relatórios periódicos sobre como sua doação está sendo aplicada." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-2xl bg-[#F8FAF9] border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-[#2D6A4F]" />
                </div>
                <h3 className="font-bold text-[#1B4332] mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

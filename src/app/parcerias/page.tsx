"use client";

import { useState } from "react";
import {
  Users, Building2, Heart, Wrench, CheckCircle, ArrowRight, Star, Handshake
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

type FormType = "voluntario" | "empresa";

const beneficiosVoluntario = [
  "Certificado de voluntariado reconhecido pelo MEC",
  "Horas complementares para estudantes da área da saúde",
  "Capacitação e treinamentos periódicos",
  "Rede de contatos com profissionais comprometidos",
  "Relatório de impacto das suas horas doadas",
  "Experiência prática em saúde pública comunitária",
];

const beneficiosEmpresa = [
  "Relatório de impacto social da parceria",
  "Uso do selo 'Empresa Parceira ICB' em materiais",
  "Dedução fiscal conforme legislação do terceiro setor",
  "Visibilidade nas redes sociais e site do Instituto",
  "Convite para eventos e mutirões exclusivos",
  "Relatórios trimestrais de destinação dos recursos",
];

const tiposParceiraEmpresa = [
  { id: "filantropica", icon: Heart, title: "Filantrópica", desc: "Doações financeiras, materiais ou equipamentos sem contrapartida comercial. Ideal para ESG e incentivos fiscais." },
  { id: "servico", icon: Wrench, title: "Prestação de Serviço", desc: "Sua empresa presta serviços remunerados para o Instituto (saúde, TI, logística, comunicação etc.) com preço social." },
  { id: "patrocinio", icon: Star, title: "Patrocínio de Projeto", desc: "Associe a marca da sua empresa a um dos nossos projetos de saúde, com visibilidade e relatório de impacto." },
];

export default function ParceriasPage() {
  const [formType, setFormType] = useState<FormType>("voluntario");
  const [tipoEmpresa, setTipoEmpresa] = useState("filantropica");

  return (
    <>
      {/* HERO */}
      <section className="bg-linear-to-br from-[#1B4332] via-[#2D6A4F] to-[#40916C] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Faça parte do movimento
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
            Juntos, chegamos muito mais longe
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Seja como voluntário, profissional de saúde ou empresa — sua parceria com o Instituto Crescer Brasil tem impacto direto nas vidas de pessoas em situação de vulnerabilidade.
          </p>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Por que se tornar parceiro"
            title="Uma parceria que vai além do bem"
            subtitle="Unir-se ao Instituto Crescer Brasil é uma decisão que transforma — a vida de outras pessoas e também a sua."
            center
          />
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pessoa Física */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#2D6A4F] flex items-center justify-center">
                  <Users size={22} className="text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-[#1B4332] text-lg">Pessoa Física / Voluntário</h2>
                  <p className="text-gray-400 text-sm">Doe seu tempo, conhecimento ou habilidades</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {beneficiosVoluntario.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-[#2D6A4F] mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setFormType("voluntario")}
                className="w-full bg-[#2D6A4F] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#1B4332] transition-colors flex items-center justify-center gap-2"
              >
                Cadastrar como voluntário <ArrowRight size={16} />
              </button>
            </div>

            {/* Empresa */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#457B9D] flex items-center justify-center">
                  <Building2 size={22} className="text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-[#1B4332] text-lg">Empresa Parceira</h2>
                  <p className="text-gray-400 text-sm">Filantropia, serviço ou patrocínio de projetos</p>
                </div>
              </div>
              <div className="space-y-3 mb-5">
                {tiposParceiraEmpresa.map(({ id, icon: Icon, title, desc }) => (
                  <div
                    key={id}
                    onClick={() => setTipoEmpresa(id)}
                    className={`flex items-start gap-3 p-3.5 rounded-xl cursor-pointer border-2 transition-all ${tipoEmpresa === id ? "border-[#457B9D] bg-[#D6EAF8]/30" : "border-gray-100 hover:border-gray-200"}`}
                  >
                    <Icon size={18} className={tipoEmpresa === id ? "text-[#457B9D] mt-0.5" : "text-gray-400 mt-0.5"} />
                    <div>
                      <p className={`text-sm font-semibold ${tipoEmpresa === id ? "text-[#457B9D]" : "text-gray-600"}`}>{title}</p>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <ul className="space-y-2 mb-6">
                {beneficiosEmpresa.slice(0, 3).map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-xs text-gray-500">
                    <CheckCircle size={13} className="text-[#457B9D] mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setFormType("empresa")}
                className="w-full bg-[#457B9D] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#2d5d7a] transition-colors flex items-center justify-center gap-2"
              >
                Cadastrar empresa <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="py-20 bg-white" id="formulario">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 bg-[#F8FAF9] rounded-2xl p-1.5 mb-10 border border-gray-200">
            {(["voluntario", "empresa"] as FormType[]).map((t) => (
              <button
                key={t}
                onClick={() => setFormType(t)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all ${
                  formType === t ? "bg-[#2D6A4F] text-white shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {t === "voluntario" ? <Users size={15} /> : <Building2 size={15} />}
                {t === "voluntario" ? "Voluntário / Pessoa Física" : "Empresa Parceira"}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#2D6A4F] flex items-center justify-center">
                <Handshake size={18} className="text-white" />
              </div>
              <h2 className="font-bold text-[#1B4332] text-xl">
                {formType === "voluntario" ? "Cadastro de Voluntário" : "Credenciamento de Empresa"}
              </h2>
            </div>

            <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
              {formType === "voluntario" ? (
                <>
                  {[
                    { label: "Nome completo", type: "text", placeholder: "Seu nome" },
                    { label: "CPF", type: "text", placeholder: "000.000.000-00" },
                    { label: "E-mail", type: "email", placeholder: "email@exemplo.com" },
                    { label: "Telefone / WhatsApp", type: "tel", placeholder: "(11) 99999-9999" },
                    { label: "Profissão", type: "text", placeholder: "Ex: Médico, Enfermeiro, Educador, Motorista..." },
                    { label: "Cidade / Estado", type: "text", placeholder: "Ex: Goiânia – GO" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors" />
                    </div>
                  ))}
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Como pode contribuir?</label>
                    <textarea rows={3} placeholder="Descreva sua experiência e como imagina contribuir com o Instituto..." className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors resize-none" />
                  </div>
                </>
              ) : (
                <>
                  {[
                    { label: "Razão Social", type: "text", placeholder: "Nome da empresa" },
                    { label: "CNPJ", type: "text", placeholder: "00.000.000/0001-00" },
                    { label: "Nome do Responsável", type: "text", placeholder: "Nome do representante" },
                    { label: "Cargo", type: "text", placeholder: "Ex: Diretor de ESG, Presidente..." },
                    { label: "E-mail corporativo", type: "email", placeholder: "responsavel@empresa.com" },
                    { label: "Telefone", type: "tel", placeholder: "(11) 99999-9999" },
                    { label: "Cidade / Estado (sede)", type: "text", placeholder: "Ex: São Paulo – SP" },
                    { label: "Porte da empresa", type: "text", placeholder: "MEI / Pequena / Média / Grande" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors" />
                    </div>
                  ))}
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Tipo de parceria de interesse</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors bg-white">
                      <option>Doação filantrópica (recursos/equipamentos)</option>
                      <option>Prestação de serviço remunerado para o Instituto</option>
                      <option>Patrocínio de projeto específico</option>
                      <option>Voluntariado corporativo</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Mensagem / Proposta</label>
                    <textarea rows={3} placeholder="Descreva sua proposta de parceria ou como imagina que sua empresa pode contribuir..." className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors resize-none" />
                  </div>
                </>
              )}

              <div className="flex items-start gap-3">
                <input type="checkbox" id="lgpd" className="mt-1 accent-[#2D6A4F]" />
                <label htmlFor="lgpd" className="text-xs text-gray-500 leading-relaxed">
                  Concordo com o tratamento dos meus dados para fins de credenciamento, conforme a Lei Geral de Proteção de Dados (LGPD).
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2D6A4F] text-white py-4 rounded-2xl font-bold text-base hover:bg-[#1B4332] transition-colors flex items-center justify-center gap-2"
              >
                <Handshake size={18} />
                Enviar cadastro de parceria
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Globe, Share2, Rss } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logoinstitutocrescer.jpeg"
                alt="Instituto Crescer Brasil"
                width={180}
                height={72}
                className="h-16 w-auto object-contain rounded-lg"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformando vidas através do acesso à saúde, educação e do fortalecimento da agricultura familiar em comunidades vulneráveis do Brasil.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage transition-colors">
                <Globe size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage transition-colors">
                <Share2 size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage transition-colors">
                <Rss size={16} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-sage-light mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { href: "/", label: "Página Inicial" },
                { href: "/sobre", label: "Sobre Nós" },
                { href: "/projetos", label: "Nossos Projetos" },
                { href: "/doacoes", label: "Faça uma Doação" },
                { href: "/parcerias", label: "Seja Parceiro" },
                { href: "/transparencia", label: "Transparência" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-sage-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projetos */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-sage-light mb-4">Projetos de Saúde</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                "Saúde do Idoso",
                "Saúde da Mulher",
                "Odontologia Móvel",
                "Oftalmologia Comunitária",
                "Capacitação Rural",
                "Educação no Campo",
              ].map((p) => (
                <li key={p}>
                  <Link href="/projetos" className="hover:text-sage-light transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-sage-light mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-sage mt-0.5 shrink-0" />
                <span>R. Thomé Fontes, 249<br />Chapada dos Guimarães – MT, 78195-000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-sage shrink-0" />
                <a href="mailto:contato@crescerbrasil.org.br" className="hover:text-sage-light transition-colors">
                  contato@crescerbrasil.org.br
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-white/5 rounded-lg text-xs text-gray-400">
              <p className="font-medium text-gray-300 mb-1">ANMAB-MT – Associação Nós do MAB</p>
              <p className="font-medium text-gray-300 mb-1">CNPJ: 08.035.647/0001-60</p>
              <p>Organização da Sociedade Civil de Interesse Público – OSCIP</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Instituto Crescer Brasil. Todos os direitos reservados.</p>
          <p>Feito com ❤️ para transformar vidas</p>
        </div>
      </div>
    </footer>
  );
}

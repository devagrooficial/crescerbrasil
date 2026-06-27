"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/projetos", label: "Nossos Projetos" },
  { href: "/parcerias", label: "Parcerias" },
  { href: "/transparencia", label: "Transparência" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-sage-light/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logoinstitutocrescer.jpeg"
              alt="Instituto Crescer Brasil"
              width={200}
              height={200}
              priority
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-forest hover:bg-cream rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/doacoes"
              className="hidden sm:flex items-center gap-2 bg-forest text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-forest-dark transition-colors"
            >
              <Heart size={16} />
              Doe Agora
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-cream transition-colors"
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-forest hover:bg-cream rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/doacoes"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-forest text-white px-5 py-3 rounded-full text-sm font-semibold"
            >
              <Heart size={16} />
              Doe Agora
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

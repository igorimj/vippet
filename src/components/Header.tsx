"use client";

import { useState } from "react";
import { business } from "@/data/business";
import { WhatsAppIcon } from "./Illustrations";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  ...(business.reviews.length > 0 ? [{ href: "#avaliacoes", label: "Avaliações" }] : []),
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-clay-200/70 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={business.logo}
            alt={`Logo ${business.name}`}
            className="h-11 w-auto rounded-md sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/80 transition-colors hover:text-sage-700"
            >
              {link.label}
            </a>
          ))}
          {business.whatsapp && (
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-sage-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sage-700"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          )}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-clay-300 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-clay-200/70 bg-cream px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-ink/85 hover:bg-sage-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {business.whatsapp && (
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-sage-600 px-4 py-3 text-sm font-medium text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar pelo WhatsApp
            </a>
          )}
        </nav>
      )}
    </header>
  );
}

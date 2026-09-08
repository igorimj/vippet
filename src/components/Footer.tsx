import { business } from "@/data/business";
import { WhatsAppIcon } from "./Illustrations";

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-clay-200/70 bg-sage-900 text-cream/90">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-xl text-cream">{business.name}</p>
            <p className="mt-2 text-sm text-cream/70">{business.category}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-cream/50">
              Endereço
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/80">
              {business.address.full}
            </p>
            <a
              href={business.googleMapsShortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-clay-200 hover:text-clay-100"
            >
              Ver no Google Maps →
            </a>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-cream/50">
              Contato
            </h3>
            <div className="mt-3 space-y-2 text-sm text-cream/80">
              {business.phone && <p>{business.phone}</p>}
              {business.whatsapp && (
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-medium text-clay-200 hover:text-clay-100"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              )}
              {!business.phone && !business.whatsapp && (
                <p className="text-cream/50">
                  Contato disponível no perfil do Google Maps.
                </p>
              )}
            </div>

            {business.hours && (
              <>
                <h3 className="mt-6 text-sm font-medium uppercase tracking-wide text-cream/50">
                  Horário
                </h3>
                <ul className="mt-3 space-y-1 text-sm text-cream/80">
                  {business.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span>{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-xs text-cream/50">
          © {business.currentYear} {business.name}. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}

import { business } from "@/data/business";
import { BubbleIcon } from "./Illustrations";

export default function ServicesSection() {
  if (business.services.length === 0) return null;

  return (
    <section id="servicos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Serviços
        </h2>
        <p className="mt-3 max-w-prose text-ink/70">
          Segmento de atuação identificado no perfil público da empresa.
          Para detalhes específicos de cada serviço, entre em contato
          diretamente.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {business.services.map((service) => (
            <div
              key={service.name}
              className="group rounded-2xl border border-clay-200/70 bg-cream p-7 transition-shadow hover:shadow-md"
            >
              <BubbleIcon className="h-10 w-10" />
              <h3 className="mt-4 font-display text-xl text-ink">
                {service.name}
              </h3>
              {service.description && (
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

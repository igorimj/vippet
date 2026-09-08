import { business } from "@/data/business";
import { DogBathIllustration, PawDivider, WhatsAppIcon } from "./Illustrations";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-24 lg:pt-24">
        <div>
          <p className="font-display text-sm italic text-sage-700">
            {business.address.neighborhood}, {business.address.city} · {business.category}
          </p>

          <h1 className="mt-4 text-balance font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            {business.name}
          </h1>

          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/75">
            Cuidado de banho e tosa pensado para o bem-estar do seu cão ou
            gato, com atenção à higiene e ao conforto do animal do início ao
            fim do atendimento.
          </p>

          <PawDivider className="mt-8 h-5 w-28 text-clay-400" />

          <div className="mt-8 flex flex-wrap gap-4">
            {business.whatsapp && (
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-sage-600 px-6 py-3.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-sage-700"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Falar pelo WhatsApp
              </a>
            )}
            <a
              href="#localizacao"
              className="flex items-center gap-2 rounded-full border border-clay-400 px-6 py-3.5 text-base font-medium text-clay-700 transition-colors hover:bg-clay-100"
            >
              Ver localização
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <DogBathIllustration className="w-full" />
        </div>
      </div>
    </section>
  );
}

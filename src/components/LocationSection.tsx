import { business } from "@/data/business";
import { PinIcon } from "./Illustrations";

export default function LocationSection() {
  const { lat, lng } = business.coordinates;
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&hl=pt-BR&z=17&output=embed`;

  return (
    <section id="localizacao" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Onde estamos
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="flex flex-col justify-between rounded-2xl border border-clay-200/70 bg-cream p-7">
            <div>
              <PinIcon className="h-11 w-11" />
              <p className="mt-4 text-base leading-relaxed text-ink/80">
                {business.address.full}
              </p>
            </div>

            <a
              href={business.googleMapsShortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-sage-600 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-sage-700"
            >
              Como chegar
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-clay-200/70">
            <iframe
              title={`Mapa de localização — ${business.name}`}
              src={embedSrc}
              className="h-80 w-full lg:h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

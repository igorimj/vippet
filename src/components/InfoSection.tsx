import { business } from "@/data/business";
import { ClockIcon, LeafIcon, PhoneIcon, PinIcon } from "./Illustrations";

export default function InfoSection() {
  const cards = [
    {
      icon: <LeafIcon className="h-10 w-10" />,
      title: "Segmento",
      body: business.category,
    },
    {
      icon: <PinIcon className="h-10 w-10" />,
      title: "Endereço",
      body: business.address.full,
    },
    ...(business.phone
      ? [
          {
            icon: <PhoneIcon className="h-10 w-10" />,
            title: "Telefone",
            body: business.phone,
          },
        ]
      : []),
    ...(business.hours
      ? [
          {
            icon: <ClockIcon className="h-10 w-10" />,
            title: "Horário de funcionamento",
            body: "Confira ao lado",
          },
        ]
      : []),
  ];

  return (
    <section className="bg-sage-50/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-clay-200/70 bg-cream p-6 shadow-[0_1px_2px_rgba(79,50,29,0.06)]"
              >
                {card.icon}
                <h3 className="mt-4 font-display text-lg text-ink">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          {business.hours && (
            <div className="rounded-2xl border border-clay-200/70 bg-cream p-7">
              <h3 className="font-display text-xl text-ink">
                Horário de funcionamento
              </h3>
              <ul className="mt-5 divide-y divide-clay-100">
                {business.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-2.5 text-sm"
                  >
                    <span className="text-ink/70">{h.day}</span>
                    <span className="font-medium text-ink">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

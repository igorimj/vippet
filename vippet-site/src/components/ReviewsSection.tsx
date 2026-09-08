import { business } from "@/data/business";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "fill-clay-500" : "fill-clay-200"}`}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  if (business.reviews.length === 0) return null;

  return (
    <section id="avaliacoes" className="bg-sage-50/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Avaliações
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {business.reviews.map((review) => (
            <figure
              key={`${review.author}-${review.date ?? ""}`}
              className="rounded-2xl border border-clay-200/70 bg-cream p-6"
            >
              <Stars rating={review.rating} />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink/80">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-ink">
                {review.author}
                {review.date && (
                  <span className="ml-2 font-normal text-ink/50">
                    {review.date}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        <a
          href={business.googleMapsShortUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-sage-700 hover:text-sage-800"
        >
          Veja mais avaliações no Google →
        </a>
      </div>
    </section>
  );
}

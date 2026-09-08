/**
 * Ilustrações decorativas em SVG, desenhadas para este site.
 * IMPORTANTE: são elementos gráficos ilustrativos do universo pet — não são
 * fotografias reais do estabelecimento, já que nenhuma foto real pôde ser
 * confirmada nas fontes públicas consultadas.
 */

export function DogBathIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      className={className}
      role="img"
      aria-label="Ilustração decorativa de um cão sendo banhado com carinho"
    >
      <circle cx="240" cy="240" r="220" fill="#EFE7D8" />
      <path
        d="M110 320c0-30 24-40 40-40h180c16 0 40 10 40 40s-30 60-130 60-130-30-130-60Z"
        fill="#C4D8BD"
      />
      <g>
        <ellipse cx="240" cy="220" rx="98" ry="82" fill="#FAF7F2" stroke="#8A5730" strokeWidth="4" />
        <path
          d="M150 190c-18-14-26-42-10-60 14-16 40-14 50 4"
          stroke="#8A5730"
          strokeWidth="4"
          fill="#E8CFB6"
          strokeLinecap="round"
        />
        <path
          d="M330 190c18-14 26-42 10-60-14-16-40-14-50 4"
          stroke="#8A5730"
          strokeWidth="4"
          fill="#E8CFB6"
          strokeLinecap="round"
        />
        <circle cx="205" cy="215" r="7" fill="#4F321D" />
        <circle cx="275" cy="215" r="7" fill="#4F321D" />
        <path
          d="M225 245c6 8 24 8 30 0"
          stroke="#4F321D"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="240" cy="230" rx="10" ry="7" fill="#4F321D" />
      </g>
      <g opacity="0.8">
        <circle cx="120" cy="140" r="10" fill="#A2C096" />
        <circle cx="150" cy="110" r="6" fill="#A2C096" />
        <circle cx="345" cy="150" r="8" fill="#A2C096" />
        <circle cx="370" cy="120" r="5" fill="#A2C096" />
        <circle cx="105" cy="190" r="5" fill="#A2C096" />
      </g>
    </svg>
  );
}

export function PawDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <circle cx="10" cy="12" r="3.4" />
      <circle cx="60" cy="7" r="3.4" />
      <circle cx="110" cy="12" r="3.4" />
      <path d="M60 12c8 0 14 6 14 12H46c0-6 6-12 14-12Z" opacity="0.9" />
    </svg>
  );
}

export function BubbleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="16" fill="#E1EBDE" stroke="#5F8A4F" strokeWidth="2" />
      <circle cx="18" cy="18" r="3.5" fill="#FAF7F2" />
    </svg>
  );
}

export function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M14 34C10 22 18 10 34 10c2 12-6 24-20 24Z"
        fill="#C4D8BD"
        stroke="#4A6D3E"
        strokeWidth="2"
      />
      <path d="M16 32 30 14" stroke="#4A6D3E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 6c-8 0-14 6-14 14 0 10 14 22 14 22s14-12 14-22c0-8-6-14-14-14Z"
        fill="#E8CFB6"
        stroke="#8A5730"
        strokeWidth="2"
      />
      <circle cx="24" cy="20" r="5.5" fill="#FAF7F2" stroke="#8A5730" strokeWidth="2" />
    </svg>
  );
}

export function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="16" fill="#F5E9DE" stroke="#8A5730" strokeWidth="2" />
      <path d="M24 15v9l7 4" stroke="#8A5730" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="14" y="6" width="20" height="36" rx="4" fill="#E1EBDE" stroke="#4A6D3E" strokeWidth="2" />
      <circle cx="24" cy="34" r="1.6" fill="#4A6D3E" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
      <path d="M16.02 3C9.4 3 4 8.38 4 15c0 2.32.63 4.5 1.74 6.36L4 29l7.86-1.7A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.62 28 15S22.63 3 16.02 3Zm0 21.7a9.6 9.6 0 0 1-4.9-1.34l-.35-.2-4.66 1 1.02-4.53-.23-.37A9.62 9.62 0 1 1 25.6 15a9.6 9.6 0 0 1-9.58 9.7Zm5.3-7.2c-.29-.15-1.7-.84-1.96-.93-.26-.1-.46-.15-.65.15-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.5-.65-.5h-.56c-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.02c.15.19 2.06 3.15 5 4.42.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
    </svg>
  );
}

/**
 * ============================================================================
 * DADOS DA EMPRESA — VIPPET Banho e Tosa
 * ============================================================================
 * Este é o ÚNICO arquivo que você precisa editar para atualizar informações
 * exibidas no site (endereço, telefone, horários, serviços, avaliações...).
 *
 * REGRA IMPORTANTE: cada seção do site só é renderizada se o campo
 * correspondente estiver preenchido aqui. Campos deixados como `null`,
 * `undefined` ou `[]` fazem a seção correspondente ser OMITIDA do site
 * automaticamente — isso evita mostrar informação não confirmada.
 *
 * Origem dos dados atuais: perfil público do Google Maps localizado a partir
 * do link fornecido (https://maps.app.goo.gl/HQRwqKX3MKPJzhro6), que aponta
 * para o estabelecimento "VIPPET Banho e Tosa", em Sobradinho II, Brasília/DF.
 *
 * Os campos abaixo marcados com "// TODO (não confirmado publicamente)"
 * NÃO puderam ser confirmados a partir das fontes públicas acessíveis no
 * momento da geração deste site e por isso foram deixados em branco, para
 * não inventar informação. Preencha-os manualmente assim que tiver a
 * informação correta (ex.: copiando diretamente do perfil do Google Maps
 * da empresa, ou de materiais oficiais do estabelecimento).
 * ============================================================================
 */

export interface BusinessHours {
  day: string;
  hours: string; // ex: "08:00 – 18:00" ou "Fechado"
}

export interface Review {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date?: string;
}

export interface Service {
  name: string;
  description?: string;
}

export const business = {
  // Nome exatamente como consta no perfil público do Google Maps
  name: "VIPPET Banho e Tosa",

  // Categoria/segmento identificado publicamente (o próprio nome do
  // estabelecimento e sites de diretório o classificam neste segmento)
  category: "Banho e Tosa · Higiene e Embelezamento Animal",

  // Descrição pública oficial da empresa (bio do Google Maps).
  // TODO (não confirmado publicamente): nenhuma descrição textual própria
  // foi localizada nas fontes públicas acessadas. Deixe em branco até
  // confirmar o texto exato usado pela empresa, ou preencha aqui.
  description: null as string | null,

  address: {
    line1: "SH Mansões Sobradinho, Condomínio Mini-Chácaras, Es. 11-B",
    neighborhood: "Sobradinho II",
    city: "Brasília",
    state: "DF",
    zip: "73083-280",
    full: "SH Mansões Sobradinho, Condomínio Mini-Chácaras, Es. 11-B – Sobradinho II, Brasília - DF, 73083-280",
  },

  coordinates: {
    lat: -15.6366753,
    lng: -47.8445001,
  },

  // Link curto fornecido e URL completa do perfil no Google Maps
  googleMapsShortUrl: "https://maps.app.goo.gl/HQRwqKX3MKPJzhro6",
  googleMapsUrl:
    "https://www.google.com/maps/place/VIPPET+Banho+e+Tosa/@-15.6366753,-47.8445001,19z",

  // TODO (não confirmado publicamente): telefone/celular da empresa.
  // Ao preencher, use apenas dígitos com DDI+DDD, ex: "556199999999".
  phone: null as string | null,

  // TODO (não confirmado publicamente): número de WhatsApp da empresa.
  // Preencha SOMENTE se tiver certeza de que é WhatsApp. Formato: DDI+DDD+número,
  // apenas dígitos, ex: "556199999999" (o site monta o link wa.me automaticamente).
  whatsapp: null as string | null,

  // TODO (não confirmado publicamente): horário de funcionamento.
  // Preencha por dia da semana, ex.:
  // hours: [
  //   { day: "Segunda-feira", hours: "08:00 – 18:00" },
  //   { day: "Terça-feira", hours: "08:00 – 18:00" },
  //   { day: "Domingo", hours: "Fechado" },
  // ],
  hours: null as BusinessHours[] | null,

  // Serviços confirmados publicamente. Até o momento, a única informação
  // confirmada é o próprio segmento de atuação (banho e tosa), presente no
  // nome da empresa e na categoria pública. Descrições específicas de cada
  // serviço (o que inclui, duração, etc.) NÃO foram confirmadas e por isso
  // não foram adicionadas — edite/complete a lista abaixo quando tiver a
  // informação oficial.
  services: [
    { name: "Banho e Tosa" } as Service,
    // TODO (não confirmado publicamente): adicione outros serviços reais
    // assim que confirmados publicamente, ex.:
    // { name: "Tosa higiênica", description: "..." },
  ],

  // TODO (não confirmado publicamente): avaliações reais do Google.
  // Copie o texto e a nota exatamente como aparecem no perfil público, ex.:
  // reviews: [
  //   { author: "Fulano da Silva", rating: 5, text: "...", date: "há 2 meses" },
  // ],
  reviews: [] as Review[],

  // TODO (não confirmado publicamente / sem acesso técnico às fotos do
  // perfil): nenhuma foto real do estabelecimento foi incorporada. As
  // imagens usadas no site são ilustrativas e genéricas do universo pet,
  // claramente não apresentadas como fotos reais da loja.
  photos: [] as string[],

  currentYear: new Date().getFullYear(),
};

export type Business = typeof business;

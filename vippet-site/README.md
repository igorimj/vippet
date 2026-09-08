# VIPPET Banho e Tosa — Site Institucional

Site institucional one-page para a **VIPPET Banho e Tosa**, em Sobradinho II, Brasília/DF, construído com **Next.js 14 (App Router) + React + TypeScript + Tailwind CSS**.

## ⚠️ Sobre as informações usadas

Este site foi gerado usando **exclusivamente** dados que puderam ser confirmados publicamente a partir do link do Google Maps fornecido:

- ✅ **Nome**: VIPPET Banho e Tosa
- ✅ **Categoria/segmento**: Banho e Tosa (identificado pelo próprio nome do estabelecimento e por diretórios públicos)
- ✅ **Endereço**: SH Mansões Sobradinho, Condomínio Mini-Chácaras, Es. 11-B — Sobradinho II, Brasília - DF, 73083-280
- ✅ **Coordenadas geográficas**: -15.6366753, -47.8445001
- ✅ **Link do perfil no Google Maps**

**Não foi possível confirmar publicamente** (por isso NÃO foram inventados nem incluídos no site): telefone, número de WhatsApp, horário de funcionamento, lista detalhada de serviços, avaliações de clientes e fotos reais do estabelecimento. O acesso automatizado ao perfil completo do Google Maps não retorna esses dados sem JavaScript/interação manual.

O site foi construído para que essas seções **apareçam automaticamente assim que você preencher os dados reais** em `src/data/business.ts` — veja a seção "Como atualizar informações" abaixo. Até lá, essas seções (WhatsApp, horários, avaliações) ficam ocultas, e nenhuma foto genérica é apresentada como sendo real (as ilustrações usadas são desenhos decorativos, claramente não fotográficos).

Recomendo fortemente conferir e completar `src/data/business.ts` com os dados reais direto do perfil da empresa no Google Maps (ou de materiais oficiais dela) antes de publicar.

---

## 1. Como instalar as dependências

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior instalado.

```bash
npm install
```

## 2. Como executar localmente

```bash
npm run dev
```

Acesse `http://localhost:3000` no navegador.

## 3. Como criar o repositório no GitHub

```bash
git init
git add .
git commit -m "Site institucional VIPPET Banho e Tosa"
```

Crie um repositório vazio no GitHub (via site ou `gh repo create`), depois:

```bash
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git branch -M main
git push -u origin main
```

## 4. Como publicar no Cloudflare Pages (gratuito)

1. Acesse [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Selecione o repositório do GitHub criado no passo anterior.
3. Configure o build:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. Clique em **Save and Deploy**.

O projeto já está configurado com `output: "export"` em `next.config.js`, gerando arquivos estáticos na pasta `out/` — 100% compatível com Cloudflare Pages, sem custo e sem necessidade de servidor.

## 5. Como conectar um domínio próprio depois

No painel do projeto no Cloudflare Pages, vá em **Custom domains** → **Set up a custom domain** → digite seu domínio (ex.: `vippetbanhoetosa.com.br`) → siga as instruções de DNS exibidas na tela. Se o domínio já estiver na Cloudflare, a configuração é automática.

## 6. Como atualizar informações manualmente

Todos os dados exibidos no site ficam em **um único arquivo**:

```
src/data/business.ts
```

Edite os campos marcados com `// TODO (não confirmado publicamente)` assim que tiver a informação correta e confirmada:

| Campo | O que faz |
|---|---|
| `phone` | Exibe o telefone nos cards de informação e no rodapé |
| `whatsapp` | Ativa os botões de WhatsApp (header, hero, flutuante e rodapé) — use apenas dígitos, ex. `"556199999999"` |
| `hours` | Ativa a seção/lista de horário de funcionamento |
| `services` | Lista de serviços exibidos na seção "Serviços" |
| `reviews` | Ativa a seção de avaliações (copie texto e nota exatamente como aparecem no Google) |
| `photos` | Reservado para uso futuro com fotos reais confirmadas |

Cada seção do site **aparece ou desaparece automaticamente** dependendo de esses campos estarem preenchidos ou não — não é necessário mexer em nenhum componente visual, apenas neste arquivo de dados.

Depois de editar, rode `npm run build` novamente (ou apenas faça `git push` — a Cloudflare Pages rebuilda automaticamente a cada push).

---

## Estrutura do projeto

```
src/
  app/
    layout.tsx      → metadados, SEO, fontes, dados estruturados (Schema.org)
    page.tsx         → composição da página única
    globals.css       → estilos globais e acessibilidade
  components/
    Header.tsx           → menu fixo + WhatsApp (condicional)
    Hero.tsx              → seção inicial
    InfoSection.tsx        → cards de informação (endereço, categoria, telefone, horário)
    ServicesSection.tsx     → seção de serviços
    ReviewsSection.tsx       → seção de avaliações (condicional)
    LocationSection.tsx       → mapa incorporado + "Como chegar"
    Footer.tsx                 → rodapé
    WhatsAppFloating.tsx        → botão flutuante (condicional)
    Illustrations.tsx            → ilustrações SVG decorativas (não são fotos reais)
  data/
    business.ts                   → ÚNICA fonte de dados do site
```

## Tecnologias

- Next.js 14 (App Router, export estático)
- React 18 + TypeScript
- Tailwind CSS
- Sem banco de dados, sem login, sem backend — 100% estático

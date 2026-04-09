# VivaSend – Next.js + Tailwind CSS

Moderni VivaSend svetainė, sukurta su Next.js 14 ir Tailwind CSS.

## Technologijos

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Geist** šriftų šeima (Vercel)

---

## Kaip paleisti lokaliai

### 1. Instaliuoti priklausomybes

```bash
npm install
```

### 2. Sukonfigūruoti chatbotą (neprivaloma)

Nukopijuokite `.env.local.example` į `.env.local` ir įklijuokite Anthropic API raktą:

```bash
cp .env.local.example .env.local
```

Tada atidarykite `.env.local` ir pakeiskite:
```
NEXT_PUBLIC_ANTHROPIC_API_KEY=sk-ant-api03-JŪSŲ-RAKTAS
```

API raktą galite gauti: https://console.anthropic.com/

> Jei rakto nenurodysite, chatbotas veiks be AI ir rodys kontaktinę informaciją.

### 3. Paleisti development serverį

```bash
npm run dev
```

Atidarykite naršyklėje: [http://localhost:3000](http://localhost:3000)

---

## Build produkcijai

```bash
npm run build
npm run start
```

---

## Projekto struktūra

```
src/
├── app/
│   ├── layout.tsx       # Root layout su Geist šriftu ir metadata
│   ├── page.tsx         # Pagrindinis puslapis
│   └── globals.css      # Globalūs stiliai ir animacijos
└── components/
    ├── Navbar.tsx        # Navigacija su hamburger meniu
    ├── Hero.tsx          # Hero sekcija su statistikomis
    ├── LogoBar.tsx       # Klientų logotipų juosta
    ├── Features.tsx      # 9 funkcijų kortelės
    ├── AutomationSection.tsx  # Automatizacijos sekcija su flow
    ├── DesignSection.tsx      # Dizaino sekcija su el. laiško preview
    ├── Pricing.tsx       # Kainų planai (Standard / Pro / Enterprise)
    ├── Clients.tsx       # Klientų sekcija su CTA
    ├── Footer.tsx        # Footer su nuorodomis
    ├── Chatbot.tsx       # AI chatbotas (Anthropic API)
    └── VivaSendLogo.tsx  # SVG logotipas
```

---

## Subdomenų nukreipimas

Visos registracijos/prisijungimo nuorodos jau nukreipia į `vivasend.app` subdomeną:

- **Registracija:** `https://auth.sender.net/register?...redirect_uri=https://app.vivasend.com/`
- **Prisijungimas:** `https://auth.sender.net/oauth/login?...redirect_uri=https://app.vivasend.com/`

---

## Deploy ant Vercel

```bash
# Instaliuoti Vercel CLI
npm i -g vercel

# Deplointi
vercel
```

Nepamirškite `NEXT_PUBLIC_ANTHROPIC_API_KEY` pridėti prie Vercel Environment Variables.

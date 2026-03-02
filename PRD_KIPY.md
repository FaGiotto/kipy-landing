# PRD — Kipy Landing Page

## 1. Panoramica del Progetto

**Prodotto:** Kipy
**Payoff:** RENTRI Facile. Zero scartoffie.
**Obiettivo:** Landing page per acquisire lead di piccole imprese obbligate alla compliance RENTRI (tracciabilità rifiuti speciali).
**Data creazione:** 2026-03-02

---

## 2. Contesto e Problema

Il RENTRI (Registro Elettronico Nazionale per la Tracciabilità dei Rifiuti) è diventato obbligatorio per migliaia di piccole imprese italiane: officine meccaniche, studi dentistici, laboratori, artigiani. Il portale ministeriale è lento, macchinoso e richiede operazioni manuali ripetitive. Le sanzioni per non conformità arrivano fino a **30.000€**.

---

## 3. Target Utenti

| Segmento | Descrizione | Pain principale |
|---|---|---|
| Meccanici / Officine | 1-20 dipendenti, olio esausto, filtri | Compilazione manuale FIR cartaceo |
| Dentisti / Studi medici | Rifiuti speciali sanitari | Timore sanzioni, burocrazia |
| Piccole imprese artigiane | Verniciatori, stampatori, ecc. | Tempo perso, errori di compilazione |

---

## 4. Proposta di Valore

- **One-click:** Genera FIR e MUD precompilati in un click
- **Scanner xFIR:** Scansiona e importa il codice QR del formulario
- **Firma FaceID:** Firma digitale direttamente dallo smartphone
- **Costo:** 149€/anno, tutto incluso

---

## 5. Brand & Design

### Identità Visiva
- **Nome:** Kipy
- **Payoff:** RENTRI Facile. Zero scartoffie.
- **Stile:** Minimalista, Apple-style, clean
- **Palette:** Blu profondo (#1E3A5F) + Verde caldo (#2E7D5E) + Bianco (#FFFFFF) + Grigio chiaro (#F8F9FA)
- **Font:** Inter (Google Fonts) — peso 300/400/600/700
- **Tono di voce:** Diretto, rassicurante, anti-burocratico

### Principi UX
- Massimo 3 sezioni visibili senza scroll
- CTA principale sempre visibile
- Nessun gergo tecnico
- Prova sociale con numeri reali

---

## 6. Struttura della Landing Page

### 6.1 Hero Section
- **Headline:** "Il RENTRI diventa facile"
- **Subheadline:** Descrizione del problema e della soluzione in 2 righe
- **CTA primaria:** "Inizia gratis — 30 giorni"
- **CTA secondaria:** "Scopri come funziona"
- **Elemento visivo:** Mockup app o screenshot dashboard

### 6.2 Pain Points
- 3 card con icone: Sanzioni fino a 30.000€ / Ore perse in burocrazia / Errori nei formulari
- Tono empatico ma diretto

### 6.3 Features
- **Modelli One-Click:** FIR e MUD precompilati in secondi
- **Scanner xFIR:** Importa automaticamente i dati dal QR code
- **Firma FaceID:** Firma legale dal tuo telefono, senza stampare nulla

### 6.4 Tabella Comparativa (AGGRESSIVA)
Confronto Kipy vs Portale Ministeriale RENTRI:

| Funzione | Kipy | Portale Ministeriale |
|---|---|---|
| Compilazione FIR | 1 click | 15+ minuti manuali |
| Firma | FaceID / digitale | Stampare, firmare, scansionare |
| Scanner xFIR | ✅ Automatico | ❌ Non disponibile |
| App mobile | ✅ iOS + Android | ❌ Solo browser desktop |
| Supporto | Chat 7 giorni | Ticketing lento |
| Aggiornamenti normativi | ✅ Automatici | ❌ Manuali, a tuo rischio |
| Costo errori | Zero | Sanzioni fino a 30.000€ |

### 6.5 Prezzi
- **Piano unico:** 149€/anno
- Include tutto: FIR illimitati, MUD, supporto, aggiornamenti
- CTA: "Attiva ora — 30 giorni di prova gratuita"
- Garanzia soddisfatti o rimborsati 30 giorni

### 6.6 FAQ
1. Il RENTRI è obbligatorio per la mia azienda?
2. Kipy è conforme alle normative vigenti?
3. Posso usarlo da smartphone?
4. Cosa succede dopo i 30 giorni di prova?
5. Come migro i dati dal portale ministeriale?

### 6.7 Form Contatti
- **Provider:** Formspree (endpoint configurabile)
- **Campi:** Nome, Email, Telefono (opzionale), Messaggio
- **CTA form:** "Mandaci un messaggio"

---

## 7. Requisiti Tecnici

| Requisito | Scelta |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS |
| Icone | Lucide Icons |
| Form | Formspree |
| Deploy | Vercel (consigliato) |
| Performance | Core Web Vitals > 90 |
| SEO | Meta tags, OG tags, structured data |

---

## 8. KPI e Obiettivi

- **Conversion Rate target:** ≥ 5% visitatori → lead
- **Bounce Rate target:** < 50%
- **Time to First Byte:** < 200ms
- **Lighthouse Score:** > 90 su tutte le metriche

---

## 9. Roadmap MVP

1. [x] PRD definito
2. [ ] Landing page sviluppata
3. [ ] Form Formspree configurato
4. [ ] Deploy su Vercel
5. [ ] Google Analytics / Plausible integrato
6. [ ] A/B test headline

---

## 10. Note Legali

- Privacy Policy obbligatoria (GDPR)
- Cookie banner
- P.IVA e sede legale in footer

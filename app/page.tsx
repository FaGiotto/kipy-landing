"use client";

import { useState, useEffect } from "react";
import {
  AlertTriangle,
  Clock,
  FileX,
  Zap,
  Scan,
  Fingerprint,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Shield,
  Menu,
  Mail,
} from "lucide-react";

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Navigazione principale"
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "bg-white border-gray-200" : "bg-[#E8EBF4] border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="#"
          aria-label="Kipy — torna alla home"
          className="flex items-center gap-2 rounded opacity-100 hover:opacity-75 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F]"
        >
          <div aria-hidden="true" className="w-8 h-8 rounded-lg bg-[#1E3A5F] flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <span className="font-bold text-[#1E3A5F] text-xl tracking-tight">kipy</span>
        </a>

        <div className="hidden md:flex items-center gap-8" role="list">
          {[
            { label: "Funzionalità", href: "#features" },
            { label: "Confronto", href: "#compare" },
            { label: "Prezzi", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              role="listitem"
              className="text-sm text-gray-600 hover:text-[#1E3A5F] underline decoration-transparent hover:decoration-[#1E3A5F] underline-offset-4 transition-all duration-200 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#1E3A5F] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#162d4a] transition-colors font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F]"
          >
            Inizia gratis
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Chiudi menu di navigazione" : "Apri menu di navigazione"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu aria-hidden="true" className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="md:hidden bg-[#E8EBF4] border-t border-gray-200 px-4 py-4 flex flex-col gap-4"
      >
        {[
          { label: "Funzionalità", href: "#features" },
          { label: "Confronto", href: "#compare" },
          { label: "Prezzi", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-gray-700 hover:text-[#1E3A5F] transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F]"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="bg-[#1E3A5F] text-white text-sm px-4 py-2 rounded-lg text-center font-medium hover:bg-[#162d4a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => setOpen(false)}
        >
          Inizia gratis
        </a>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-32 pb-20 px-4 sm:px-6 bg-[#E8EBF4]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#2E7D5E]/10 text-[#2E7D5E] text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <Shield aria-hidden="true" className="w-3.5 h-3.5" />
          100% conforme al D.Lgs. 116/2020
        </div>

        <h1
          id="hero-heading"
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#0f1923] leading-tight tracking-tight mb-6"
        >
          Il RENTRI diventa
          <br />
          <span className="text-[#2E7D5E]">finalmente facile.</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Meccanici, dentisti, artigiani: basta perdere ore sul portale ministeriale.
          Con Kipy compili il FIR in{" "}
          <strong className="text-[#1E3A5F]">un click</strong>, firmi con{" "}
          <strong className="text-[#1E3A5F]">FaceID</strong> e dormi sereno.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#1E3A5F] text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-[#162d4a] transition-all shadow-lg shadow-[#1E3A5F]/20 hover:shadow-xl hover:shadow-[#1E3A5F]/30 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F]"
          >
            Inizia gratis — 30 giorni
            <ArrowRight aria-hidden="true" className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#1E3A5F] px-8 py-4 rounded-xl text-base font-semibold border border-gray-200 hover:border-[#1E3A5F]/30 hover:bg-slate-50 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F]"
          >
            Scopri come funziona
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── PAIN POINTS ──────────────────────────────────────────────────────────────

function PainPoints() {
  const pains = [
    {
      icon: AlertTriangle,
      title: "Sanzioni fino a 30.000€",
      desc: "Un FIR sbagliato, un registro non aggiornato, una firma mancante. L'ARPA non perdona e le multe sono salatissime.",
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      icon: Clock,
      title: "Ore perse ogni settimana",
      desc: "Il portale ministeriale è lento, incomprensibile, va giù nei momenti peggiori. Stai perdendo tempo prezioso che potresti dedicare al lavoro vero.",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: FileX,
      title: "Errori di compilazione",
      desc: "Codici CER sbagliati, quantità errate, firme mancanti. Con la carta è facile sbagliare, e gli errori ti costano caro.",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  return (
    <section aria-labelledby="pain-heading" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div aria-hidden="true" className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            La situazione oggi
          </div>
          <h2 id="pain-heading" className="text-4xl font-bold text-[#0f1923] mb-4">
            Il RENTRI è un incubo.<br />
            <span className="text-gray-500 font-normal">Non deve esserlo.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ogni settimana migliaia di imprenditori italiani perdono ore su schermate anni &apos;90.
            Tu hai un&apos;impresa da mandare avanti, non un corso di informatica da frequentare.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
          {pains.map((pain) => (
            <li key={pain.title} className={`${pain.bg} rounded-2xl p-8 border border-gray-100`}>
              <div aria-hidden="true" className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white shadow-sm">
                <pain.icon className={`w-6 h-6 ${pain.color}`} />
              </div>
              <h3 className="text-xl font-bold text-[#0f1923] mb-3">{pain.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm">{pain.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────

function Features() {
  const features = [
    {
      icon: Zap,
      title: "Modelli One-Click",
      subtitle: "FIR e MUD in secondi",
      desc: "Seleziona il tipo di rifiuto e Kipy precompila tutto: codice CER, quantità, trasportatore, destinatario. Nessun copia-incolla, nessun errore.",
      detail: "Template pronti per Olio, Filtri, Batterie e oltre 500 codici CER.",
    },
    {
      icon: Scan,
      title: "Scanner xFIR",
      subtitle: "Importa automaticamente",
      desc: "Inquadra il QR code del formulario cartaceo con la fotocamera e Kipy importa tutti i dati in automatico. Fine del data entry manuale.",
      detail: "Compatibile con tutti i FIR del Registro Nazionale Trasportatori.",
    },
    {
      icon: Fingerprint,
      title: "Firma con FaceID",
      subtitle: "Legale, sicura, istantanea",
      desc: "La tua firma digitale qualificata direttamente dallo smartphone con Face ID o Touch ID. Niente più stampanti, scanner e raccomandate.",
      detail: "Firma conforme al Regolamento eIDAS e D.Lgs. 82/2005.",
    },
  ];

  return (
    <section id="features" aria-labelledby="features-heading" className="py-20 px-4 sm:px-6 bg-[#E8EBF4]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div aria-hidden="true" className="inline-flex items-center gap-2 bg-[#2E7D5E]/10 text-[#2E7D5E] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Kipy risolve tutto questo
          </div>
          <h2 id="features-heading" className="text-4xl font-bold text-[#0f1923] mb-4">
            Tutto quello che serve,<br />
            <span className="text-[#2E7D5E]">niente di superfluo.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Tre funzionalità progettate per chi non ha tempo da perdere.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
          {features.map((f) => (
            <li
              key={f.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div aria-hidden="true" className="w-12 h-12 rounded-xl bg-[#1E3A5F] flex items-center justify-center mb-6 group-hover:bg-[#2E7D5E] transition-colors">
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs font-semibold text-[#2E7D5E] uppercase tracking-wider mb-2">{f.subtitle}</p>
              <h3 className="text-xl font-bold text-[#0f1923] mb-3">{f.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm mb-4">{f.desc}</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">{f.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── COMPARISON TABLE ──────────────────────────────────────────────────────────

function ComparisonTable() {
  const rows = [
    { feature: "Compilazione FIR", kipy: "1 click, 30 secondi", official: "15–30 minuti manuali" },
    { feature: "Firma del documento", kipy: "FaceID dallo smartphone", official: "Stampare, firmare, scansionare" },
    { feature: "Scanner xFIR", kipy: "Automatico con QR code", official: "Non disponibile" },
    { feature: "App mobile", kipy: "iOS e Android", official: "Solo browser desktop" },
    { feature: "Supporto clienti", kipy: "Chat 7 giorni su 7", official: "Ticket con lunghi tempi di risposta" },
    { feature: "Aggiornamenti normativi", kipy: "Automatici e inclusi", official: "Manuali, a carico dell'utente" },
    { feature: "Backup e disponibilità", kipy: "Cloud sempre disponibile", official: "Dipendente dalla disponibilità del portale" },
    { feature: "Rischio sanzioni", kipy: "Minimizzato", official: "Elevato per errori umani" },
  ];

  return (
    <section id="compare" aria-labelledby="compare-heading" className="py-20 px-4 sm:px-6 bg-[#0f1923]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div aria-hidden="true" className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Confronto onesto
          </div>
          <h2 id="compare-heading" className="text-4xl font-bold text-white mb-4">
            Kipy vs. Portale Ministeriale
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Il portale RENTRI è nato per la compliance, non per la tua produttività.
            Il risultato? Ore perse, stress, e rischio di errori costosi.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10">
          <table className="w-full border-collapse">
            <caption className="sr-only">
              Confronto tra le funzionalità di Kipy e del Portale Ministeriale RENTRI
            </caption>
            <thead>
              <tr className="bg-white/5">
                <th scope="col" className="text-left px-6 py-4 text-white/60 text-sm font-medium">
                  Funzionalità
                </th>
                <th scope="col" className="px-6 py-4 text-center text-white font-bold text-sm">
                  Kipy
                </th>
                <th scope="col" className="px-6 py-4 text-center text-white/60 text-sm font-medium">
                  Portale RENTRI
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                >
                  <th scope="row" className="px-6 py-4 text-left text-white/70 text-sm font-normal">
                    {row.feature}
                  </th>
                  <td className="px-6 py-4 text-center text-white text-sm font-medium">
                    {row.kipy}
                  </td>
                  <td className="px-6 py-4 text-center text-red-300 text-sm">
                    {row.official}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bg-[#2E7D5E]/20 px-6 py-5 text-center border-t border-white/10">
            <p className="text-white/80 text-sm mb-3">
              Continui ad usare il portale ministeriale o passi a qualcosa che funziona davvero?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#2E7D5E] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#236349] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Prova Kipy gratis per 30 giorni
              <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ──────────────────────────────────────────────────────────────────

function Pricing() {
  const included = [
    "FIR illimitati",
    "MUD annuale automatico",
    "Scanner xFIR integrato",
    "Firma digitale FaceID",
    "App iOS + Android",
    "Backup cloud sicuro",
    "Aggiornamenti normativi automatici",
    "Supporto via chat 7 giorni su 7",
    "Importazione dati dal portale RENTRI",
    "Report conformità scaricabili",
  ];

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div aria-hidden="true" className="inline-flex items-center gap-2 bg-[#2E7D5E]/10 text-[#2E7D5E] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Prezzi
          </div>
          <h2 id="pricing-heading" className="text-4xl font-bold text-[#0f1923] mb-4">
            Semplice come il prodotto.
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Un piano unico. Nessuna sorpresa. Tutto incluso.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-[#1E3A5F] rounded-3xl p-8 text-white shadow-2xl shadow-[#1E3A5F]/30">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-white/70 text-sm mb-1">Piano Pro Annuale</p>
                  <p className="flex items-end gap-2">
                    <span className="text-5xl font-bold">149€</span>
                    <span className="text-white/70 pb-1">/anno</span>
                  </p>
                  <p className="text-[#6ec4a0] text-sm mt-1 font-medium">= 12,40€/mese • IVA inclusa</p>
                  <p className="text-white/50 text-xs mt-1">Interamente deducibile come spesa aziendale.</p>
                </div>
                <div aria-label="Piano tutto incluso" className="bg-[#2E7D5E] text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap self-start flex-shrink-0">
                  TUTTO INCLUSO
                </div>
              </div>

              <ul aria-label="Funzionalità incluse nel piano" className="space-y-2.5 mb-8 list-none p-0">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div aria-hidden="true" className="w-5 h-5 rounded-full bg-[#2E7D5E]/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#6ec4a0]" />
                    </div>
                    <span className="text-white/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block w-full bg-white text-[#1E3A5F] text-center py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors text-base shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Inizia la prova gratuita
              </a>

              <p className="text-center text-white/60 text-xs mt-4">
                30 giorni gratis. Nessuna carta richiesta. Annulli quando vuoi.
              </p>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
            <p className="text-amber-900 text-sm font-medium">
              Considera che una singola sanzione RENTRI parte da <strong>3.000€</strong>.
              Kipy costa meno del 5% della multa minima.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "Il RENTRI è obbligatorio per la mia azienda?",
      a: "Se la tua impresa produce rifiuti speciali — oli esausti, rifiuti sanitari, solventi, metalli, carta e plastica industriale — sì, il RENTRI è obbligatorio. A partire dal 2024 l'obbligo si è esteso anche alle piccole imprese con meno di 10 dipendenti in molte categorie produttive. Kipy ti aiuta a scoprirlo in 2 minuti con il nostro verificatore gratuito.",
    },
    {
      q: "Kipy è conforme alle normative vigenti?",
      a: "Sì. Kipy è sviluppato in costante collaborazione con esperti legali di diritto ambientale e segue il D.Lgs. 116/2020, il D.M. 4 agosto 2023 e le relative circolari MASE. Ogni aggiornamento normativo viene recepito automaticamente — non devi fare nulla.",
    },
    {
      q: "Posso usarlo da smartphone senza PC?",
      a: "Assolutamente sì. Kipy è progettato mobile-first. Puoi compilare FIR, firmare con FaceID, scannerizzare QR code e inviare documenti direttamente dal tuo iPhone o Android. L'app è disponibile su App Store e Google Play.",
    },
    {
      q: "Cosa succede dopo i 30 giorni di prova?",
      a: "Al termine della prova gratuita puoi attivare il piano annuale a 149€. Se decidi di non continuare, i tuoi dati restano disponibili per l'esportazione per altri 90 giorni. Non addebitiamo nulla automaticamente: sei tu a decidere.",
    },
    {
      q: "Come migro i dati dal portale ministeriale?",
      a: "Kipy include uno strumento di importazione guidata che legge l'export CSV del portale RENTRI e carica tutto nel tuo account in pochi minuti. Il nostro team di supporto ti assiste gratuitamente durante la migrazione.",
    },
  ];

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-4xl font-bold text-[#0f1923] mb-4">Domande frequenti</h2>
          <p className="text-gray-600 text-lg">Risposte dirette, senza giri di parole.</p>
        </div>

        <dl className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            const btnId = `faq-btn-${i}`;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <dt>
                  <button
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1E3A5F]"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                  >
                    <span className="font-semibold text-[#0f1923] pr-4">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp aria-hidden="true" className="w-5 h-5 text-[#1E3A5F] flex-shrink-0" />
                    ) : (
                      <ChevronDown aria-hidden="true" className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                </dt>
                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className="px-6 pb-6 text-gray-700 leading-relaxed text-sm"
                >
                  {faq.a}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────

function ContactForm() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojnovaq";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "Ciao, vorrei ricevere maggiori informazioni su Kipy e capire se fa al caso mio." });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 px-4 sm:px-6 bg-[#DDE1EE]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <div aria-hidden="true" className="inline-flex items-center gap-2 bg-[#2E7D5E]/10 text-[#2E7D5E] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Contatti
            </div>
            <h2 id="contact-heading" className="text-4xl font-bold text-[#0f1923] mb-4">
              Parliamo.<br />
              <span className="text-gray-500 font-normal">Senza impegno.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Hai domande specifiche sulla tua situazione? Vuoi vedere Kipy in azione prima di decidere?
              Scrivici: rispondiamo entro 24 ore, di solito molto prima.
            </p>

            <div className="flex items-center gap-3">
              <div aria-hidden="true" className="w-10 h-10 rounded-lg bg-[#1E3A5F]/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#1E3A5F]" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Email</p>
                <a
                  href="mailto:ciao@kipyrentri.it?subject=Informazioni%20su%20Kipy"
                  className="font-medium text-[#0f1923] hover:text-[#1E3A5F] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F]"
                >
                  ciao@kipyrentri.it
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {status === "success" ? (
              <div role="status" aria-live="polite" className="text-center py-8">
                <div aria-hidden="true" className="w-16 h-16 bg-[#2E7D5E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-[#2E7D5E]" />
                </div>
                <h3 className="text-xl font-bold text-[#0f1923] mb-2">Messaggio inviato!</h3>
                <p className="text-gray-600">Ti risponderemo entro 24 ore.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nome e cognome <span aria-hidden="true" className="text-red-600">*</span>
                    <span className="sr-only">(campo obbligatorio)</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    autoComplete="name"
                    placeholder="Mario Rossi"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/30 focus:border-[#1E3A5F] text-sm transition-all text-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span aria-hidden="true" className="text-red-600">*</span>
                    <span className="sr-only">(campo obbligatorio)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    autoComplete="email"
                    placeholder="mario@officina.it"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/30 focus:border-[#1E3A5F] text-sm transition-all text-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Messaggio <span aria-hidden="true" className="text-red-600">*</span>
                    <span className="sr-only">(campo obbligatorio)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    rows={4}
                    placeholder=""
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/30 focus:border-[#1E3A5F] text-sm transition-all resize-none text-gray-900"
                  />
                </div>

                {status === "error" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="bg-red-50 border border-red-300 text-red-800 text-sm px-4 py-3 rounded-xl"
                  >
                    Errore nell&apos;invio del messaggio. Riprova oppure scrivici direttamente a{" "}
                    <a href="mailto:ciao@kipyrentri.it?subject=Informazioni%20su%20Kipy" className="underline font-medium">ciao@kipyrentri.it</a>.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  aria-disabled={status === "loading"}
                  className="w-full bg-[#1E3A5F] text-white py-4 rounded-xl font-semibold hover:bg-[#162d4a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F]"
                >
                  {status === "loading" ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                      ></span>
                      <span role="status" aria-live="polite">Invio in corso…</span>
                    </>
                  ) : (
                    <>
                      Invia messaggio
                      <ArrowRight aria-hidden="true" className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Inviando il modulo accetti la nostra{" "}
                  <a
                    href="/privacy"
                    className="underline hover:text-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F] rounded"
                  >
                    Privacy Policy
                  </a>
                  . I tuoi dati non vengono ceduti a terzi.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer aria-label="Piè di pagina" className="bg-[#0f1923] py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2" aria-label="Kipy">
            <div aria-hidden="true" className="w-7 h-7 rounded-lg bg-[#1E3A5F] flex items-center justify-center">
              <span className="text-white font-bold text-xs">K</span>
            </div>
            <span aria-hidden="true" className="font-bold text-white text-lg tracking-tight">kipy</span>
          </div>

          {/* Disclaimer + privacy */}
          <div className="flex-1">
            <p className="text-white/50 text-[11px] leading-relaxed">
              Kipy è un progetto indipendente in fase di ricerca e sviluppo finalizzato alla semplificazione
              degli adempimenti RENTRI. Il servizio è attualmente in fase di pre-lancio (Early Access):
              l&apos;iscrizione alla waitlist è gratuita e non costituisce un acquisto, né garantisce l&apos;accesso
              immediato al software. Tutti i nomi di prodotti, loghi e marchi citati (inclusi RENTRI e MASE)
              sono di proprietà dei rispettivi detentori e sono utilizzati esclusivamente a scopo illustrativo.
              Progetto a cura del Team di Sviluppo Kipy.{" "}
              <a
                href="/privacy"
                className="underline underline-offset-2 hover:text-white/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* Skip link — WCAG 2.4.1 */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#1E3A5F] focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-[#1E3A5F]"
      >
        Vai al contenuto principale
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <PainPoints />
        <Features />
        <ComparisonTable />
        <Pricing />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}

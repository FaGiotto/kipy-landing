import type { Metadata } from "next";
import BackButton from "./BackButton";

export const metadata: Metadata = {
  title: "Privacy Policy — Kipy",
  description: "Informativa sul trattamento dei dati personali del progetto Kipy, ai sensi del Regolamento UE 2016/679 (GDPR).",
  alternates: {
    canonical: "https://www.kipyrentri.it/privacy",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const sections = [
  {
    number: "1",
    title: "Titolare del Trattamento",
    content: (
      <p>
        Il trattamento dei dati personali relativi al progetto Kipy è gestito dal Team di Sviluppo
        Kipy, contattabile all&apos;indirizzo email:{" "}
        <a
          href="mailto:ciao@kipyrentri.it"
          className="text-[#1E3A5F] underline underline-offset-2 hover:text-[#2E7D5E] transition-colors"
        >
          ciao@kipyrentri.it
        </a>
        .
      </p>
    ),
  },
  {
    number: "2",
    title: "Dati Raccolti",
    content: (
      <>
        <p className="mb-3">
          Raccogliamo i seguenti dati forniti volontariamente dall&apos;utente tramite il modulo di
          contatto presente sulla landing page:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Nome e Cognome</li>
          <li>Indirizzo Email</li>
          <li>Messaggio</li>
        </ul>
      </>
    ),
  },
  {
    number: "3",
    title: "Finalità del Trattamento",
    content: (
      <>
        <p className="mb-3">I dati sono raccolti esclusivamente per:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Gestire l&apos;iscrizione alla lista d&apos;attesa (waitlist) di Kipy</li>
          <li>Inviare aggiornamenti sullo sviluppo del software</li>
          <li>Rispondere a richieste dirette degli utenti</li>
        </ul>
        <p className="mt-3">
          I dati non vengono ceduti a terzi né utilizzati per finalità commerciali diverse da quelle
          indicate.
        </p>
      </>
    ),
  },
  {
    number: "4",
    title: "Servizi Terzi Utilizzati",
    content: (
      <>
        <p className="mb-3">Per il funzionamento del sito utilizziamo i seguenti servizi:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>
            <strong className="text-gray-800">Vercel</strong> — Hosting e distribuzione del sito
          </li>
          <li>
            <strong className="text-gray-800">Formspree</strong> — Gestione e ricezione dei moduli
            di contatto
          </li>
          <li>
            <strong className="text-gray-800">Aruba</strong> — Gestione del dominio e dell&apos;email
          </li>
        </ul>
        <p className="mt-3">
          Ciascun servizio è soggetto alla propria informativa sulla privacy. Ti invitiamo a
          consultarle sui rispettivi siti ufficiali.
        </p>
      </>
    ),
  },
  {
    number: "5",
    title: "Diritti dell'Interessato",
    content: (
      <p>
        Ai sensi del Regolamento UE 2016/679 (GDPR), hai il diritto di richiedere in qualsiasi
        momento l&apos;accesso, la rettifica o la cancellazione dei tuoi dati personali. Per esercitare
        questi diritti scrivi a{" "}
        <a
          href="mailto:ciao@kipyrentri.it"
          className="text-[#1E3A5F] underline underline-offset-2 hover:text-[#2E7D5E] transition-colors"
        >
          ciao@kipyrentri.it
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#E8EBF4] px-4 sm:px-6 py-12">
      <div className="max-w-2xl mx-auto">

        {/* Back link */}
        <BackButton />

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-7 h-7 rounded-lg bg-[#1E3A5F] flex items-center justify-center" aria-hidden="true">
              <span className="text-white font-bold text-xs">K</span>
            </div>
            <span className="font-bold text-[#1E3A5F] text-lg tracking-tight">kipy</span>
          </div>
          <h1 className="text-4xl font-bold text-[#0f1923] mb-3">Informativa Privacy</h1>
          <p className="text-sm text-gray-400">
            Ai sensi del Regolamento UE 2016/679 (GDPR) — Ultimo aggiornamento: 2 marzo 2026
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.number} aria-labelledby={`section-${s.number}`}>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-xs font-bold text-[#2E7D5E] bg-[#2E7D5E]/10 px-2 py-0.5 rounded-full">
                  {s.number}
                </span>
                <h2 id={`section-${s.number}`} className="text-lg font-bold text-[#0f1923]">
                  {s.title}
                </h2>
              </div>
              <div className="text-gray-600 leading-relaxed text-sm pl-8">
                {s.content}
              </div>
            </section>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-500">Nota:</strong> Kipy è attualmente un progetto di
            ricerca e sviluppo in fase di pre-lancio. Questa informativa verrà aggiornata con
            l&apos;evoluzione commerciale del servizio.
          </p>
        </div>

      </div>
    </main>
  );
}

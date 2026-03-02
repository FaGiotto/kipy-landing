import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kipy — RENTRI Facile. Zero scartoffie.",
  description: "Gestisci il RENTRI in un click. FIR e MUD precompilati, firma con FaceID, scanner xFIR automatico. 149€/anno tutto incluso.",
  keywords:
    "RENTRI, software RENTRI, gestione rifiuti speciali, FIR rifiuti, MUD annuale, tracciabilità rifiuti, compliance RENTRI PMI, D.Lgs 116/2020, portale RENTRI alternativa, rifiuti speciali piccole imprese",
  metadataBase: new URL("https://www.kipyrentri.it"),
  openGraph: {
    title: "Kipy — RENTRI Facile. Zero scartoffie.",
    description: "Stop alla burocrazia. Gestisci il RENTRI in secondi, non in ore.",
    type: "website",
    url: "https://www.kipyrentri.it",
    siteName: "Kipy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kipy — RENTRI Facile. Zero scartoffie.",
    description:
      "Gestisci il RENTRI in un click. FIR e MUD precompilati, firma con FaceID. 149€/anno.",
  },
  alternates: {
    canonical: "https://www.kipyrentri.it",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={nunito.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

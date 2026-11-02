import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "@/styles/globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0B0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://elomktc.com"),
  title: "Eloisa Cunha | Marketing & Comunicação",
  description:
    "Conteúdo, posicionamento e comunicação para aproximar marcas dos seus públicos e gerar resultados reais.",
  keywords: [
    "Eloisa Cunha",
    "Marketing e Comunicação",
    "Copywriting",
    "Gestão de Redes Sociais",
    "Planejamento Estratégico",
    "SEO",
    "Sites e Landing Pages",
  ],
  authors: [{ name: "Eloisa Cunha" }],
  creator: "Eloisa Cunha",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://elomktc.com",
    title: "Eloisa Cunha | Marketing & Comunicação",
    description:
      "Conteúdo, posicionamento e comunicação para aproximar marcas dos seus públicos e gerar resultados reais.",
    siteName: "Eloisa Cunha | Marketing & Comunicação",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eloisa Cunha | Marketing & Comunicação",
    description:
      "Conteúdo, posicionamento e comunicação para aproximar marcas dos seus públicos e gerar resultados reais.",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#0B0B0F] font-sans antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

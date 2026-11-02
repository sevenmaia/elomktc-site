import { Metadata } from "next";
import { OrcamentoHero } from "@/components/orcamento/OrcamentoHero";
import { OrcamentoPageClient } from "@/components/orcamento/OrcamentoPageClient";
import { OrcamentoDuvidasBanner } from "@/components/orcamento/OrcamentoDuvidasBanner";

export const metadata: Metadata = {
  title: "Solicitar Orçamento | Eloisa Cunha — Marketing & Comunicação",
  description:
    "Conte sobre o seu projeto. Assim posso entender o que você precisa e preparar uma proposta personalizada.",
  openGraph: {
    title: "Solicitar Orçamento | Eloisa Cunha",
    description:
      "Conte sobre o seu projeto e receba uma proposta personalizada com estratégia, copy e foco em resultados.",
    images: ["/images/eloisa-cunha.jpg"],
  },
};

export default function OrcamentoPage() {
  return (
    <main className="min-h-screen bg-[#FCFBFD]">
      {/* Hero Section */}
      <OrcamentoHero />

      {/* Main Section with Project Selector & Form */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OrcamentoPageClient />
        </div>
      </section>

      {/* Bottom Conversion Banner: Ainda com dúvidas? Chame no WhatsApp */}
      <OrcamentoDuvidasBanner />
    </main>
  );
}

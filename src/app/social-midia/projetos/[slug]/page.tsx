import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";
import { ContactBanner } from "@/components/ContactBanner";
import { SOCIAL_CONTENT } from "@/content/social-content";

type ProjectPageProps = {
  params: { slug: string };
};

const CASE_TONES = {
  violet: "from-[#1B1023] via-[#602375] to-[#B24BD3]",
  plum: "from-[#140E1B] via-[#4E205A] to-[#C25DE4]",
  lilac: "from-[#30203B] via-[#804290] to-[#DDB8EB]",
  wine: "from-[#201018] via-[#6B2D4E] to-[#CA7899]",
};

function getCase(slug: string) {
  return SOCIAL_CONTENT.projects.items.find((item) => item.id === slug);
}

export function generateStaticParams() {
  return SOCIAL_CONTENT.projects.items.map((item) => ({ slug: item.id }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getCase(params.slug);

  if (!project) return { title: "Projeto não encontrado | Eloisa Cunha" };

  return {
    title: `${project.client} | Social Media | Eloisa Cunha`,
    description: project.description,
  };
}

function CaseVisual({
  client,
  tone,
}: {
  client: string;
  tone: keyof typeof CASE_TONES;
}) {
  return (
    <div
      className={`relative min-h-[300px] overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br ${CASE_TONES[tone]} p-7 sm:min-h-[430px] sm:p-10`}
    >
      <div className="absolute left-[4%] top-[-20%] h-[65%] w-[50%] rounded-full bg-[#C677E0]/35 blur-3xl" />
      <div className="absolute bottom-[-28%] right-[-10%] h-[70%] w-[64%] rounded-full border border-white/20 bg-black/15" />
      <div className="relative flex h-full min-h-[240px] items-center justify-center sm:min-h-[350px]">
        <div className="absolute left-[13%] top-[16%] h-[70%] w-[30%] -rotate-[12deg] rounded-[28px] border border-white/45 bg-[#16111D] p-2 shadow-2xl">
          <div className="h-full rounded-[22px] border border-white/10 bg-[#28192F]" />
        </div>
        <div className="relative z-10 h-[84%] w-[36%] rounded-[30px] border border-white/50 bg-[#130F17] p-2.5 shadow-2xl">
          <div className="flex h-full flex-col justify-between rounded-[23px] border border-white/10 bg-[#211526] p-4">
            <span className="h-1.5 w-12 rounded-full bg-white/25" />
            <p className="font-heading text-center text-[clamp(16px,2.8vw,32px)] font-black leading-none text-white">
              {client}
            </p>
            <span className="mx-auto h-1.5 w-16 rounded-full bg-white/25" />
          </div>
        </div>
        <div className="absolute bottom-[13%] right-[13%] h-[64%] w-[28%] rotate-[11deg] rounded-[26px] border border-white/35 bg-[#201524]/80 p-2 shadow-2xl">
          <div className="h-full rounded-[20px] border border-white/10 bg-[#43204D]" />
        </div>
      </div>
      <span className="absolute bottom-5 left-5 rounded-md border border-white/25 bg-black/20 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-white/90">
        MOCKUP DE ESTRUTURA — INSERIR PEÇAS AUTORIZADAS
      </span>
    </div>
  );
}

function PendingCase({ project }: { project: NonNullable<ReturnType<typeof getCase>> }) {
  return (
    <section className="bg-white py-20 text-[#0B0B0F] sm:py-28">
      <div className="mx-auto max-w-[760px] px-5 text-center sm:px-8">
        <p className="text-[11px] font-bold tracking-[0.2em] text-[#A40DDB]">
          PORTFÓLIO EM PREPARAÇÃO
        </p>
        <h1 className="mt-3 font-heading text-[38px] font-black leading-[1.04] tracking-tight sm:text-[56px]">
          {project.client}<span className="text-[#A40DDB]">.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-[#555160]">
          {project.description}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-[#777080]">
          A página detalhada será publicada quando as peças e as informações autorizadas deste case forem disponibilizadas.
        </p>
        <Link
          href="/social-midia#projetos"
          className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#0B0B0F] px-6 py-3.5 text-[13px] font-bold text-white transition-colors hover:bg-[#2A2530]"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar aos projetos
        </Link>
      </div>
    </section>
  );
}

export default function SocialProjectPage({ params }: ProjectPageProps) {
  const project = getCase(params.slug);
  if (!project) notFound();

  if (!project.detail) return <PendingCase project={project} />;

  const galleryItems = ["Post", "Carrossel", "Stories", "Vídeo"];

  return (
    <main className="bg-[#0A0910] text-white">
      <section className="overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-12 flex flex-wrap items-center gap-2 text-[12px] text-[#B7B2C0] sm:mb-16"
          >
            <Link href="/social-midia#projetos" className="transition-colors hover:text-white">
              Projetos
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#7E7789]" />
            <Link href="/social-midia" className="transition-colors hover:text-white">
              Social Media
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#7E7789]" />
            <span aria-current="page" className="text-white">{project.client}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="mb-4 text-[11px] font-bold tracking-[0.2em] text-[#D88AF0]">
                {project.detail.eyebrow}
              </p>
              <h1 className="max-w-[12ch] font-heading text-[48px] font-black leading-[0.98] tracking-tight sm:text-[68px] lg:text-[76px]">
                {project.detail.title.replace(".", "")}
                <span className="text-[#C75BE7]">.</span>
              </h1>
              <p className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-[#CAC5D0] sm:text-[19px]">
                {project.detail.summary}
              </p>
              <Link
                href="/social-midia#projetos"
                className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-[13px] font-bold text-white transition-colors hover:border-[#C75BE7] hover:bg-white/5"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar aos projetos
              </Link>
            </div>
            <CaseVisual client={project.client} tone={project.coverTone} />
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:mt-14 sm:grid-cols-3">
            {[
              ["Cliente", project.client],
              ["Atuação", "Conteúdo e posicionamento digital"],
              ["Status do case", "Peças e informações em atualização"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#111019] px-6 py-6">
                <p className="text-[11px] font-bold tracking-[0.16em] text-[#C677E0]">{label}</p>
                <p className="mt-2 text-[14px] font-semibold leading-relaxed text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111019] py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#C677E0]">SOBRE O PROJETO</p>
            <h2 className="mt-4 max-w-[12ch] font-heading text-[38px] font-black leading-[1.04] tracking-tight sm:text-[52px]">
              Estratégia para fortalecer presença e propósito<span className="text-[#C75BE7]">.</span>
            </h2>
          </div>
          <div className="grid gap-9 sm:grid-cols-2">
            <div>
              <h3 className="font-heading text-[20px] font-black">O contexto</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#B6B1BF]">{project.detail.context}</p>
            </div>
            <div>
              <h3 className="font-heading text-[20px] font-black">Próximas informações</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#B6B1BF]">{project.detail.approach}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0910] py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#C677E0]">ALGUMAS ENTREGAS</p>
              <h2 className="mt-3 font-heading text-[38px] font-black leading-[1.04] tracking-tight sm:text-[52px]">
                Conteúdos do case<span className="text-[#C75BE7]">.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[14px] leading-relaxed text-[#AAA5B3]">
              A galeria recebe somente peças autorizadas. Os espaços abaixo indicam os formatos previstos para este case.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <div key={item} className="flex aspect-[4/5] flex-col justify-between rounded-xl border border-white/10 bg-[#15131D] p-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#A40DDB]/15 text-[#D88AF0]">
                  <ImageIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[12px] font-bold tracking-[0.15em] text-[#C677E0]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-heading text-[22px] font-black">{item}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#918B9B]">Arquivo autorizado a inserir.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0A0910] pb-12 pt-4 sm:pb-16">
        <div className="mx-auto flex max-w-[1240px] justify-end px-5 sm:px-8">
          <Link
            href="/social-midia/projetos/easycon"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-[#D88AF0] transition-colors hover:text-white"
          >
            Próximo projeto
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}

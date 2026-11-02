import Link from "next/link";
import { ArrowRight, FolderOpen } from "lucide-react";
import { SOCIAL_CONTENT, SocialProjectCase } from "@/content/social-content";

const COVER_TONES = {
  violet: "from-[#271331] via-[#71258A] to-[#C677E0]",
  plum: "from-[#19111D] via-[#522058] to-[#B84CDD]",
  lilac: "from-[#382144] via-[#8F42A4] to-[#E2B7F2]",
  wine: "from-[#25121C] via-[#662B50] to-[#B76C8D]",
};

function CaseCover({ item }: { item: SocialProjectCase }) {
  return (
    <div
      aria-hidden="true"
      className={`relative aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br ${COVER_TONES[item.coverTone]}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_12%,rgba(255,255,255,.34),transparent_22%),linear-gradient(125deg,rgba(0,0,0,.06),rgba(0,0,0,.48))]" />
      <div className="absolute left-[12%] top-[14%] h-[74%] w-[34%] rotate-[-7deg] rounded-[18px] border border-white/40 bg-[#16111B]/90 shadow-2xl" />
      <div className="absolute left-[17%] top-[19%] h-[64%] w-[24%] rounded-[11px] border border-white/10 bg-[#211728]" />
      <div className="absolute right-[11%] top-[20%] h-[61%] w-[35%] rotate-[8deg] rounded-[14px] border border-white/30 bg-white/15 backdrop-blur-[1px]" />
      <div className="absolute bottom-[20%] right-[16%] h-2 w-[24%] rounded-full bg-white/70" />
      <div className="absolute bottom-[14%] right-[16%] h-1.5 w-[17%] rounded-full bg-white/30" />
      <span className="absolute bottom-3 left-3 rounded-md border border-white/25 bg-black/20 px-2.5 py-1 text-[9px] font-bold tracking-[0.13em] text-white/90">
        CAPA DO CASE
      </span>
    </div>
  );
}

export function SocialProjectsSection() {
  const { projects } = SOCIAL_CONTENT;

  return (
    <section
      id="projetos"
      aria-label="Projetos em destaque de social media"
      className="scroll-mt-20 bg-[#0A0910] py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mb-11 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-[#C677E0]">
              {projects.eyebrow}
            </p>
            <h2 className="font-heading text-[34px] font-black leading-[1.06] tracking-tight text-white sm:text-[46px] lg:text-[52px]">
              Projetos em destaque<span className="text-[#A40DDB]">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[14.5px] leading-relaxed text-[#A0A0B0] sm:text-[15.5px]">
            {projects.subtitle}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.items.map((item) => (
            <div key={item.id} className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-white/10 bg-[#12111A] p-3 transition-colors duration-200 hover:border-[#A40DDB]/70 focus-within:border-[#A40DDB] sm:p-4">
                <CaseCover item={item} />
                <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
                  <div className="mb-3 flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#C677E0]">
                    <FolderOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>SOCIAL MEDIA</span>
                  </div>
                  <h3 className="font-heading text-[23px] font-black leading-tight tracking-tight text-white">
                    {item.client}
                  </h3>
                  <p className="mt-2 max-w-[34ch] text-[14px] leading-relaxed text-[#A9A6B4]">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex w-fit items-center gap-1.5 text-[13px] font-bold text-[#D88AF0] outline-none transition-colors hover:text-white focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#D88AF0] focus-visible:ring-offset-4 focus-visible:ring-offset-[#12111A]"
                  >
                    <span>Ver projeto</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

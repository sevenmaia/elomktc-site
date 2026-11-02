import Image from "next/image";
import { PenLine } from "lucide-react";
import { SOCIAL_CONTENT } from "@/content/social-content";

export function SocialCopywritingSection() {
  const { copywriting } = SOCIAL_CONTENT;

  return (
    <section aria-label="Copywriting em destaque" className="bg-white py-8 pb-20 sm:pb-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
          <div>
            <div>
              <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-[#A40DDB]">
                {copywriting.eyebrow}
              </p>
              <h2 className="max-w-md font-heading text-[36px] font-black leading-[1.04] tracking-tight text-[#0B0B0F] sm:text-[48px]">
                {copywriting.title.replace(".", "")}
                <span className="text-[#A40DDB]">.</span>
              </h2>
              <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-[#555160] sm:text-[17px]">
                {copywriting.subtitle}
              </p>
            </div>

            <div>
              <div className="relative mt-9 max-w-[400px] overflow-hidden rounded-xl border border-[#E5D6EC] bg-[#F7EBFC] p-6 sm:p-8">
                <div className="absolute right-[-44px] top-[-48px] h-44 w-44 rounded-full bg-[#C677E0]/25 blur-2xl" />
                <div className="relative flex min-h-[310px] flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#A40DDB] text-white">
                      <PenLine className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-[#7B458F]">
                      COPYWRITING
                    </span>
                  </div>
                  <div>
                    <p className="max-w-[290px] font-serif text-[40px] leading-[0.95] tracking-[-0.045em] text-[#27152E] sm:text-[48px]">
                      {copywriting.postTitle}
                    </p>
                    <p className="mt-5 max-w-[255px] text-[13px] leading-relaxed text-[#684B72]">
                      {copywriting.postSupport}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.16em] text-[#A40DDB]">
                    ELOISA CUNHA
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full">
            <article className="h-full rounded-xl border border-[#E9E2EE] bg-white p-6 shadow-[0_12px_35px_rgba(40,17,55,0.05)] sm:p-9">
              <header className="flex items-center gap-3 border-b border-[#F0E9F3] pb-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#A40DDB] text-sm font-black text-white">
                  e
                </span>
                <div>
                  <p className="text-[14px] font-bold text-[#211B28]">Eloisa Cunha</p>
                  <p className="text-[12px] text-[#777080]">{copywriting.captionTitle}</p>
                </div>
              </header>

              <div className="space-y-5 py-7 text-[16px] leading-[1.65] text-[#413947] sm:text-[17px]">
                {copywriting.caption.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <footer className="flex items-center gap-2 border-t border-[#F0E9F3] pt-5 text-[13px] font-semibold text-[#7B458F]">
                <Image
                  src="/images/logo-icon.png"
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                  className="h-4 w-4 object-contain"
                />
                <span>{copywriting.services}</span>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";

interface ArticleCoverImageProps {
  image: string;
  alt: string;
}

export function ArticleCoverImage({ image, alt }: ArticleCoverImageProps) {
  return (
    <figure className="max-w-[1020px] mx-auto px-5 sm:px-8 my-8 sm:my-12">
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-[#EBE4F2] shadow-[0_15px_35px_rgba(30,10,40,0.06)] bg-[#0A0910]">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 1020px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>
      {alt && (
        <figcaption className="text-center text-[12px] sm:text-[13px] text-[#71697E] mt-3 font-sans italic">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}
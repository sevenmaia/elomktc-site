"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { BIO_CONTENT } from "@/content/bio-content";

export function BioFeaturedProjects() {
  const { featuredProjects } = BIO_CONTENT;

  return (
    <div className="my-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="w-5 h-[2px] bg-[#D444BC]" />
          <h3 className="font-heading font-black text-xs sm:text-[13px] text-white tracking-widest uppercase">
            Projetos em destaque
          </h3>
        </div>
        <Link
          href="/sites#projetos-em-destaque"
          className="text-xs sm:text-[12.5px] font-bold text-[#D444BC] hover:text-white transition-colors inline-flex items-center gap-1 group"
        >
          <span>Ver todos</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Projects: Mobile touch carousel (hidden scrollbar) + Desktop 3-column grid */}
      <div className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-3.5 overflow-x-auto pb-1 sm:pb-0 snap-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 sm:mx-0 sm:px-0 w-auto">
        {featuredProjects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            className="group min-w-[220px] sm:min-w-0 flex-1 snap-start bg-[#181028]/80 hover:bg-[#22163B]/90 rounded-2xl border border-white/10 hover:border-[#D444BC]/45 p-2.5 backdrop-blur-md shadow-md hover:shadow-purple-950/40 transition-all flex flex-col justify-between overflow-hidden"
          >
            {/* Image Thumbnail */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/60">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 220px, 180px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* External link discrete badge */}
              <div className="absolute bottom-1.5 right-1.5 p-1 rounded-md bg-black/60 backdrop-blur-xs border border-white/10 text-white/80 group-hover:text-[#D444BC] group-hover:border-[#D444BC]/40 transition-colors">
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>

            {/* Project Info */}
            <div className="mt-2 px-0.5 min-w-0">
              <h4 className="font-heading font-black text-[13px] sm:text-[14px] text-white truncate group-hover:text-[#D444BC] transition-colors leading-tight">
                {project.title}
              </h4>
              <p className="text-[11px] text-white/50 truncate leading-tight mt-0.5">
                {project.category}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

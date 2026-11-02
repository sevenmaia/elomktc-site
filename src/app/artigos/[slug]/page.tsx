import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import {
  getArticleBySlug,
  getAllArticleSlugs,
  getRelatedArticles,
} from "@/content/article-detail-content";
import { ReadingProgressBar } from "@/components/articles/reading/ReadingProgressBar";
import { ArticleHeader } from "@/components/articles/reading/ArticleHeader";
import { ArticleCoverImage } from "@/components/articles/reading/ArticleCoverImage";
import { ArticleTableOfContents } from "@/components/articles/reading/ArticleTableOfContents";
import { ArticleBody } from "@/components/articles/reading/ArticleBody";
import { ArticleAuthorBox } from "@/components/articles/reading/ArticleAuthorBox";
import { RelatedArticlesSection } from "@/components/articles/reading/RelatedArticlesSection";
import { ContactBanner } from "@/components/ContactBanner";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Artigo não encontrado | Eloisa Cunha",
      description: "O artigo solicitado não está disponível.",
    };
  }

  const siteUrl = "https://eloisacunha.com.br";
  const pageUrl = `${siteUrl}/artigos/${article.slug}`;

  return {
    title: `${article.title} | Eloisa Cunha`,
    description: article.subtitle,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.subtitle,
      url: pageUrl,
      siteName: "Eloisa Cunha | Marketing & Comunicação",
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.subtitle,
      images: [article.coverImage],
    },
  };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(params.slug);

  // Article JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.subtitle,
    image: `https://eloisacunha.com.br${article.coverImage}`,
    datePublished: "2026-10-24T09:00:00+03:00",
    dateModified: "2026-10-28T12:00:00+03:00",
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
      url: "https://eloisacunha.com.br/sobre-mim",
    },
    publisher: {
      "@type": "Organization",
      name: "Eloisa Cunha | Marketing & Comunicação",
      logo: {
        "@type": "ImageObject",
        url: "https://eloisacunha.com.br/images/logo-icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://eloisacunha.com.br/artigos/${article.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Article JSON-LD SEO */}
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 2. Top Reading Scroll Progress Bar */}
      <ReadingProgressBar />

      {/* 3. Hero Header with Title, Metadata and Share */}
      <ArticleHeader article={article} />

      {/* 4. Full Bleed High-Res Cover Image */}
      <ArticleCoverImage
        image={article.coverImage}
        alt={article.coverImageAlt}
      />

      {/* 5. Editorial Content Layout with Sticky Table of Contents & Sidebar */}
      <div className="max-w-[1020px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Article Body Column (8 cols) */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <ArticleBody article={article} />

            {/* Author Bio Box */}
            <ArticleAuthorBox author={article.author} />
          </div>

          {/* Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4 order-1 lg:order-2 space-y-6">
            {/* Table of Contents */}
            <ArticleTableOfContents sections={article.sections} />

            {/* Consultation Quick CTA Card (Desktop Sticky) */}
            <div className="hidden lg:block bg-gradient-to-br from-[#100F1A] to-[#1F182C] text-white p-6 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#9400D3]/30 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#9400D3]/30 border border-[#9400D3]/50 text-[#E0A8F8] text-[10.5px] font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3 h-3" />
                  <span>CONSULTORIA</span>
                </div>
                <h4 className="font-heading font-black text-[17px] text-white mb-2 leading-snug">
                  Precisa de copy estratégico para a sua marca?
                </h4>
                <p className="text-[13px] text-zinc-300 leading-[1.55] mb-5">
                  Converse diretamente com Eloisa Cunha para alinhar estratégia de conteúdo, sites ou campanhas.
                </p>
                <Link
                  href="/orcamento"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#9400D3] hover:bg-[#8000B5] active:scale-[0.98] text-white text-[12.5px] font-bold tracking-wider uppercase py-3 px-4 rounded-lg transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar com Eloisa</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Related Recommended Articles */}
      <RelatedArticlesSection articles={relatedArticles} />

      {/* 7. Canonical Contact Banner */}
      <ContactBanner />
    </main>
  );
}
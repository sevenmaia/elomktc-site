import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  FileText,
  FolderKanban,
  Share2,
  Video,
  Monitor,
  User,
  Search,
  Image as ImageIcon,
  Palette,
  Settings,
  ExternalLink,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Visão geral", href: "/admin", icon: Home },
  { label: "Artigos", href: "/admin/artigos", icon: FileText },
  { label: "Projetos", href: "/admin/projetos", icon: FolderKanban },
  { label: "Social Media", href: "/admin/social", icon: Share2 },
  { label: "Vídeos", href: "/admin/videos", icon: Video, active: true },
  { label: "Sites e Landing Pages", href: "/admin/sites", icon: Monitor },
  { label: "Sobre mim", href: "/admin/sobre-mim", icon: User },
  { label: "SEO", href: "/admin/seo", icon: Search },
  { label: "Mídia/Imagens", href: "/admin/midia", icon: ImageIcon },
  { label: "Personalização", href: "/admin/personalizacao", icon: Palette },
  { label: "Configurações", href: "/admin/configuracoes", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F6F5FA] flex text-[#12111A]">
      {/* Left Sidebar */}
      <aside className="w-[240px] lg:w-[260px] bg-[#0C0B14] text-white flex-shrink-0 flex flex-col justify-between border-r border-[#1F1D2B] hidden md:flex sticky top-0 h-screen select-none">
        <div>
          {/* Logo & Brand Header */}
          <div className="p-6 border-b border-white/5">
            <Link href="/admin" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-[#A40DDB] flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
                e
              </div>
              <div>
                <span className="font-heading font-bold text-[15px] text-white leading-tight block">
                  Eloisa Cunha
                </span>
                <span className="text-[10px] text-[#A0A0B0] uppercase tracking-wider block font-sans">
                  Marketing & Comunicação
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
                    item.active
                      ? "bg-[#A40DDB] text-white font-semibold shadow-[0_4px_15px_rgba(164,13,219,0.35)]"
                      : "text-[#A0A0B5] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Sidebar: Ver Site & User Profile */}
        <div className="p-4 border-t border-white/5 space-y-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 text-xs font-semibold border border-white/10 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Ver site público</span>
          </Link>

          <div className="flex items-center gap-3 px-1 pt-1">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-purple-900 border border-purple-500/40 relative flex-shrink-0">
              <Image
                src="/images/about/eloisa-portrait.webp"
                alt="Eloisa Cunha"
                fill
                className="object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-white truncate leading-tight">Eloisa Cunha</p>
              <p className="text-[10px] text-white/50 truncate font-mono">elo.mktc@gmail.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="p-6 sm:p-8 lg:p-10 max-w-[1600px] w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}

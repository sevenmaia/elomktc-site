"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Video,
  Eye,
  Users,
  Heart,
  Plus,
  ExternalLink,
  Sparkles,
  Layers,
  Search,
  Filter,
  MoreVertical,
  Calendar,
  Download,
} from "lucide-react";
import { VideoHeroEditor } from "@/components/admin/VideoHeroEditor";
import { VIDEOS_CONTENT } from "@/content/videos-content";

export default function AdminVideosPage() {
  const [activeMainTab, setActiveMainTab] = useState<"hero" | "catalog">("hero");
  const [catalogFilter, setCatalogFilter] = useState("todos");

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-heading font-black text-gray-900 tracking-tight">
            Vídeos
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Gerencie seus conteúdos em vídeo para YouTube, Reels, TikTok e a Hero do site.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/videos"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm transition-all"
          >
            <span>Ver site público</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setActiveMainTab("hero")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#A40DDB] text-white hover:bg-[#8B09B8] shadow-sm hover:shadow transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Novo vídeo</span>
          </button>
        </div>
      </div>

      {/* KPIs Cards (Matching 14-ADMIN-VIDEOS.webp) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1 */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-500">Total de vídeos</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#A40DDB] flex items-center justify-center">
              <Video className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-heading font-black text-gray-900">18</span>
              <span className="text-xs font-bold text-emerald-600">↑ +20%</span>
            </div>
            <div className="w-full h-1 bg-purple-100 rounded-full mt-3 overflow-hidden">
              <div className="w-3/4 h-full bg-[#A40DDB] rounded-full" />
            </div>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-500">Visualizações (30 dias)</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#A40DDB] flex items-center justify-center">
              <Eye className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-heading font-black text-gray-900">125.6k</span>
              <span className="text-xs font-bold text-emerald-600">↑ +36%</span>
            </div>
            <div className="w-full h-1 bg-purple-100 rounded-full mt-3 overflow-hidden">
              <div className="w-4/5 h-full bg-[#A40DDB] rounded-full" />
            </div>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-500">Inscritos (YouTube)</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#A40DDB] flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-heading font-black text-gray-900">4.2k</span>
              <span className="text-xs font-bold text-emerald-600">↑ +18%</span>
            </div>
            <div className="w-full h-1 bg-purple-100 rounded-full mt-3 overflow-hidden">
              <div className="w-1/2 h-full bg-[#A40DDB] rounded-full" />
            </div>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-500">Engajamento médio</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#A40DDB] flex items-center justify-center">
              <Heart className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-heading font-black text-gray-900">7.8%</span>
              <span className="text-xs font-bold text-emerald-600">↑ +2.1%</span>
            </div>
            <div className="w-full h-1 bg-purple-100 rounded-full mt-3 overflow-hidden">
              <div className="w-2/3 h-full bg-[#A40DDB] rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Mode Tabs: Destaques da Hero vs. Catálogo Geral */}
      <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
        <button
          type="button"
          onClick={() => setActiveMainTab("hero")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
            activeMainTab === "hero"
              ? "bg-[#A40DDB] text-white shadow-md shadow-purple-500/20"
              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Destaques da Hero (9:16 e 16:9)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveMainTab("catalog")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
            activeMainTab === "catalog"
              ? "bg-[#A40DDB] text-white shadow-md shadow-purple-500/20"
              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Lista de Vídeos (Catálogo)</span>
        </button>
      </div>

      {/* Content based on tab */}
      {activeMainTab === "hero" ? (
        <VideoHeroEditor />
      ) : (
        /* Catálogo de Vídeos (Tabela e filtros) */
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar vídeos por título ou descrição..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#A40DDB]"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                className="px-3 py-2 rounded-xl text-xs font-semibold border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center gap-1.5"
              >
                <Filter className="w-3.5 h-3.5" />
                Todas as plataformas
              </button>
              <button
                type="button"
                className="px-3 py-2 rounded-xl text-xs font-semibold border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                Exportar
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="text-xs uppercase bg-gray-50 text-gray-500 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4">Vídeo</th>
                  <th className="py-3 px-4">Plataforma</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Duração</th>
                  <th className="py-3 px-4">Destaque</th>
                  <th className="py-3 px-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {VIDEOS_CONTENT.catalog.items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3.5 px-4 flex items-center gap-3">
                      <div className="w-16 h-10 rounded-lg overflow-hidden relative bg-gray-900 flex-shrink-0">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm leading-snug">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.category}</p>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
                        {item.orientation === "vertical" ? "Reels / TikTok" : "YouTube"}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Publicado
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs">{item.duration}</td>
                    <td className="py-3.5 px-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked={item.id === "1" || item.id === "7"}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#A40DDB]" />
                      </label>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        type="button"
                        className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                        title="Mais opções"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

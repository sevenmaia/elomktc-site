"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Upload,
  Check,
  AlertCircle,
  Eye,
  Trash2,
  RefreshCw,
  Sparkles,
  Smartphone,
  Monitor,
  ExternalLink,
  Layers,
  Film,
  Save,
  Globe,
} from "lucide-react";
import { VerticalVideoMockup } from "@/components/videos/VerticalVideoMockup";
import { HorizontalVideoMockup } from "@/components/videos/HorizontalVideoMockup";
import type { HeroVideoSlot, HeroVideosData } from "@/types/videos-hero";
import { VIDEOS_CONTENT } from "@/content/videos-content";
import initialHeroData from "@/content/videos-hero-data.json";

export function VideoHeroEditor() {
  const [data, setData] = useState<HeroVideosData>(initialHeroData as unknown as HeroVideosData);
  const [loading, setLoading] = useState(false);
  const [savingDraft, setSavingDraft] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Active tab in editor: "both" | "vertical" | "horizontal"
  const [activeSlotTab, setActiveSlotTab] = useState<"vertical" | "horizontal">("vertical");

  // Local draft slots being edited
  const [draftVertical, setDraftVertical] = useState<HeroVideoSlot | null>(
    (initialHeroData as unknown as HeroVideosData).draft?.vertical || null
  );
  const [draftHorizontal, setDraftHorizontal] = useState<HeroVideoSlot | null>(
    (initialHeroData as unknown as HeroVideosData).draft?.horizontal || null
  );

  // Playback state in editor previews
  const [previewPlaying, setPreviewPlaying] = useState<"vertical" | "horizontal" | null>(null);

  // Media selector modal state
  const [mediaPickerTarget, setMediaPickerTarget] = useState<{
    slot: "vertical" | "horizontal";
    field: "video" | "poster";
  } | null>(null);

  const [uploadingSlot, setUploadingSlot] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadFieldType, setUploadFieldType] = useState<"video" | "poster">("video");

  // Load hero slots from server API
  const loadData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/videos/hero", { cache: "no-store" });
      if (res.ok) {
        const json: HeroVideosData = await res.json();
        setData(json);
        setDraftVertical(json.draft?.vertical || null);
        setDraftHorizontal(json.draft?.horizontal || null);
      }
    } catch (err) {
      console.error("Erro ao carregar dados da Hero:", err);
      showFeedback("error", "Erro ao carregar dados dos destaques.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const showFeedback = (type: "success" | "error", message: string) => {
    setFeedback({ type, message });
    setTimeout(() => {
      setFeedback(null);
    }, 4500);
  };

  // Save current draft
  const handleSaveDraft = async () => {
    try {
      setSavingDraft(true);
      const res = await fetch("/api/admin/videos/hero", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "save_draft",
          draft: {
            vertical: draftVertical,
            horizontal: draftHorizontal,
          },
        }),
      });

      if (res.ok) {
        const result = await res.json();
        setData(result.data);
        showFeedback("success", "Rascunho salvo com sucesso! As alterações ainda não estão no site público.");
      } else {
        showFeedback("error", "Falha ao salvar rascunho.");
      }
    } catch (err) {
      console.error(err);
      showFeedback("error", "Erro ao comunicar com o servidor.");
    } finally {
      setSavingDraft(false);
    }
  };

  // Publish draft to live public website
  const handlePublish = async () => {
    try {
      setPublishing(true);
      const res = await fetch("/api/admin/videos/hero", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "publish",
          draft: {
            vertical: draftVertical,
            horizontal: draftHorizontal,
          },
        }),
      });

      if (res.ok) {
        const result = await res.json();
        setData(result.data);
        showFeedback("success", "Alterações publicadas com sucesso! A página /videos já está atualizada.");
      } else {
        showFeedback("error", "Falha ao publicar alterações.");
      }
    } catch (err) {
      console.error(err);
      showFeedback("error", "Erro ao publicar no servidor.");
    } finally {
      setPublishing(false);
    }
  };

  // Discard draft and revert to published
  const handleDiscardDraft = async () => {
    if (!confirm("Tem certeza que deseja descartar o rascunho e voltar para a versão publicada atual?")) {
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/admin/videos/hero", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "discard_draft" }),
      });
      if (res.ok) {
        const result = await res.json();
        setData(result.data);
        setDraftVertical(result.data.published?.vertical || null);
        setDraftHorizontal(result.data.published?.horizontal || null);
        showFeedback("success", "Rascunho descartado. Dados restaurados para a versão publicada.");
      }
    } catch (err) {
      console.error(err);
      showFeedback("error", "Erro ao descartar rascunho.");
    } finally {
      setLoading(false);
    }
  };

  // Handle file uploads
  const triggerUpload = (slot: "vertical" | "horizontal", field: "video" | "poster") => {
    setUploadingSlot(slot);
    setUploadFieldType(field);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      fileInputRef.current.accept =
        field === "video" ? "video/mp4,video/webm,video/ogg" : "image/jpeg,image/png,image/webp";
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !uploadingSlot) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", uploadFieldType);

    try {
      showFeedback("success", `Enviando arquivo ${file.name}...`);
      const res = await fetch("/api/admin/videos/upload", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();
      if (!res.ok) {
        showFeedback("error", json.error || "Erro no upload.");
        return;
      }

      if (uploadingSlot === "vertical") {
        setDraftVertical((prev) => {
          if (!prev) {
            return {
              id: "vertical",
              format: "vertical",
              title: "Vídeo Vertical",
              caption: "o posicionamento de marca é o que diferencia você",
              duration: "00:45",
              videoUrl: uploadFieldType === "video" ? json.url : "/videos/hero-sample-vertical.mp4",
              posterUrl: uploadFieldType === "poster" ? json.url : "/images/videos/hero-devices.webp",
              altText: "Vídeo vertical da Hero",
              isPublished: false,
            };
          }
          return {
            ...prev,
            [uploadFieldType === "video" ? "videoUrl" : "posterUrl"]: json.url,
          };
        });
      } else {
        setDraftHorizontal((prev) => {
          if (!prev) {
            return {
              id: "horizontal",
              format: "horizontal",
              title: "Vídeo Horizontal",
              speakerOrTag: "Novo Orador",
              caption: "Descrição do case em vídeo",
              duration: "01:30",
              videoUrl: uploadFieldType === "video" ? json.url : "/videos/hero-sample-horizontal.webm",
              posterUrl: uploadFieldType === "poster" ? json.url : "/images/videos/video-thumb-7.webp",
              altText: "Vídeo horizontal da Hero",
              isPublished: false,
            };
          }
          return {
            ...prev,
            [uploadFieldType === "video" ? "videoUrl" : "posterUrl"]: json.url,
          };
        });
      }

      showFeedback("success", `Arquivo ${file.name} carregado com sucesso!`);
    } catch (err) {
      console.error(err);
      showFeedback("error", "Erro ao enviar arquivo para o servidor.");
    } finally {
      setUploadingSlot(null);
    }
  };

  // Remove video from slot
  const handleRemoveSlot = (slotType: "vertical" | "horizontal") => {
    if (confirm(`Remover o vídeo do slot ${slotType === "vertical" ? "Vertical" : "Horizontal"}? O slot exibirá o placeholder visual.`)) {
      if (slotType === "vertical") setDraftVertical(null);
      else setDraftHorizontal(null);
      showFeedback("success", `Vídeo ${slotType} removido do rascunho.`);
    }
  };

  // Restore default sample
  const handleRestoreSample = (slotType: "vertical" | "horizontal") => {
    if (slotType === "vertical") {
      setDraftVertical({
        id: "vertical",
        format: "vertical",
        title: "Posicionamento Estratégico",
        caption: "o posicionamento de marca é o que diferencia você",
        duration: "00:45",
        videoUrl: "/videos/hero-sample-vertical.mp4",
        posterUrl: "/images/videos/hero-devices.webp",
        altText: "Vídeo vertical: Posicionamento estratégico de marca",
        isPublished: true,
      });
    } else {
      setDraftHorizontal({
        id: "horizontal",
        format: "horizontal",
        title: "Painel: Inovação e Mercado",
        speakerOrTag: "Bruno Quant",
        caption: "Debate com líderes sobre tendências e futuro do marketing",
        duration: "01:32",
        videoUrl: "/videos/hero-sample-horizontal.webm",
        posterUrl: "/images/videos/video-thumb-7.webp",
        altText: "Vídeo horizontal: Painel com Bruno Quant",
        isPublished: true,
      });
    }
    showFeedback("success", `Exemplo padrão restaurado para o slot ${slotType}.`);
  };

  if (loading && !data) {
    return (
      <div className="p-12 flex flex-col items-center justify-center text-center">
        <RefreshCw className="w-8 h-8 text-[#A40DDB] animate-spin mb-4" />
        <p className="text-gray-600 font-medium">Carregando painel de destaques da Hero...</p>
      </div>
    );
  }

  const hasUnsavedChanges =
    JSON.stringify(draftVertical) !== JSON.stringify(data?.published?.vertical) ||
    JSON.stringify(draftHorizontal) !== JSON.stringify(data?.published?.horizontal);

  return (
    <div className="space-y-8">
      {/* Hidden file input for uploads */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Top Action & Status Bar */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <h2 className="text-xl font-bold text-gray-900">Destaques da Hero (Vídeos)</h2>
            {hasUnsavedChanges ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Alterações pendentes em rascunho
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Check className="w-3 h-3 text-emerald-600" />
                Publicado e sincronizado com o site
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500">
            Administre os dois slots da composição principal na página{" "}
            <a
              href="/videos"
              target="_blank"
              rel="noreferrer"
              className="text-[#A40DDB] hover:underline font-medium inline-flex items-center gap-1"
            >
              /videos <ExternalLink className="w-3 h-3" />
            </a>
            . Os mockups permanecem fixos; apenas o conteúdo é atualizado.
          </p>
        </div>

        {/* Global Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          {hasUnsavedChanges && (
            <button
              type="button"
              onClick={handleDiscardDraft}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:text-red-600 hover:bg-red-50 border border-gray-200 transition-colors"
            >
              Descartar rascunho
            </button>
          )}

          <button
            type="button"
            onClick={handleSaveDraft}
            disabled={savingDraft}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-all flex items-center gap-1.5 disabled:opacity-50"
          >
            {savingDraft ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
            Salvar rascunho
          </button>

          <button
            type="button"
            onClick={handlePublish}
            disabled={publishing}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#A40DDB] hover:bg-[#8B09B8] shadow-sm hover:shadow transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {publishing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Globe className="w-4 h-4" />}
            Publicar alterações
          </button>
        </div>
      </div>

      {/* Notification Toast */}
      {feedback && (
        <div
          className={`p-4 rounded-xl flex items-center gap-3 border shadow-sm transition-all duration-300 ${
            feedback.type === "success"
              ? "bg-emerald-50 border-emerald-200 text-emerald-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          {feedback.type === "success" ? (
            <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          )}
          <p className="text-sm font-medium">{feedback.message}</p>
        </div>
      )}

      {/* Slot Selector Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-200 pb-3">
        <button
          type="button"
          onClick={() => setActiveSlotTab("vertical")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            activeSlotTab === "vertical"
              ? "bg-[#A40DDB] text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <Smartphone className="w-4 h-4" />
          Slot 1 — Vídeo Vertical (9:16)
        </button>

        <button
          type="button"
          onClick={() => setActiveSlotTab("horizontal")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
            activeSlotTab === "horizontal"
              ? "bg-[#A40DDB] text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <Monitor className="w-4 h-4" />
          Slot 2 — Vídeo Horizontal (16:9)
        </button>
      </div>

      {/* Editor Main Content: Form (Left) + Interactive Live Mockup Preview (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Formulário de Edição do Slot Selecionado */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-6">
          {activeSlotTab === "vertical" ? (
            /* =================== FORMULÁRIO VERTICAL (9:16) =================== */
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-[#A40DDB]" />
                    Configuração do Vídeo Vertical (Smartphone)
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Formato recomendado: proporção 9:16 (Reels, TikTok, Stories).
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleRestoreSample("vertical")}
                    className="text-xs text-[#A40DDB] hover:underline flex items-center gap-1"
                    title="Restaurar vídeo exemplo padrão"
                  >
                    <RefreshCw className="w-3 h-3" /> Restaurar padrão
                  </button>
                  {draftVertical && (
                    <button
                      type="button"
                      onClick={() => handleRemoveSlot("vertical")}
                      className="text-xs text-red-600 hover:text-red-700 p-1.5 rounded-lg hover:bg-red-50 flex items-center gap-1"
                      title="Remover vídeo deste slot"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Remover
                    </button>
                  )}
                </div>
              </div>

              {/* Título & Descrição Acessível */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Título do Vídeo
                  </label>
                  <input
                    type="text"
                    value={draftVertical?.title || ""}
                    onChange={(e) =>
                      setDraftVertical((prev) =>
                        prev
                          ? { ...prev, title: e.target.value }
                          : {
                              id: "vertical",
                              format: "vertical",
                              title: e.target.value,
                              caption: "Legenda de marca",
                              duration: "00:45",
                              videoUrl: "/videos/hero-sample-vertical.mp4",
                              posterUrl: "/images/videos/hero-devices.webp",
                              altText: e.target.value,
                              isPublished: false,
                            }
                      )
                    }
                    placeholder="Ex: Posicionamento Estratégico"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#A40DDB] text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Legenda Overlay (Exibida no smartphone)
                  </label>
                  <input
                    type="text"
                    value={draftVertical?.caption || ""}
                    onChange={(e) =>
                      setDraftVertical((prev) =>
                        prev ? { ...prev, caption: e.target.value } : null
                      )
                    }
                    placeholder="Ex: o posicionamento de marca é o que diferencia você"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#A40DDB] text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Texto Alternativo / Acessibilidade
                  </label>
                  <input
                    type="text"
                    value={draftVertical?.altText || ""}
                    onChange={(e) =>
                      setDraftVertical((prev) =>
                        prev ? { ...prev, altText: e.target.value } : null
                      )
                    }
                    placeholder="Descrição para leitores de tela"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#A40DDB] text-gray-900"
                  />
                </div>
              </div>

              {/* Arquivo de Vídeo & Thumbnail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Vídeo */}
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/70 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                      <Film className="w-4 h-4 text-[#A40DDB]" /> Arquivo de Vídeo (MP4/WebM)
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-mono break-all line-clamp-1">
                    {draftVertical?.videoUrl || "Nenhum arquivo atribuído"}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => triggerUpload("vertical", "video")}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#A40DDB] text-white hover:bg-[#8B09B8] transition-colors flex items-center gap-1.5"
                    >
                      <Upload className="w-3.5 h-3.5" /> Enviar MP4/WebM
                    </button>
                    <button
                      type="button"
                      onClick={() => setMediaPickerTarget({ slot: "vertical", field: "video" })}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Biblioteca
                    </button>
                  </div>
                </div>

                {/* Thumbnail */}
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/70 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-[#A40DDB]" /> Thumbnail (Capa)
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-mono break-all line-clamp-1">
                    {draftVertical?.posterUrl || "Nenhuma capa atribuída"}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => triggerUpload("vertical", "poster")}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#A40DDB] text-white hover:bg-[#8B09B8] transition-colors flex items-center gap-1.5"
                    >
                      <Upload className="w-3.5 h-3.5" /> Enviar Imagem
                    </button>
                    <button
                      type="button"
                      onClick={() => setMediaPickerTarget({ slot: "vertical", field: "poster" })}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Biblioteca
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* =================== FORMULÁRIO HORIZONTAL (16:9) =================== */
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-[#A40DDB]" />
                    Configuração do Vídeo Horizontal (Monitor/Tablet)
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Formato recomendado: proporção 16:9 (YouTube, Cases, Palestras).
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleRestoreSample("horizontal")}
                    className="text-xs text-[#A40DDB] hover:underline flex items-center gap-1"
                    title="Restaurar vídeo exemplo padrão"
                  >
                    <RefreshCw className="w-3 h-3" /> Restaurar padrão
                  </button>
                  {draftHorizontal && (
                    <button
                      type="button"
                      onClick={() => handleRemoveSlot("horizontal")}
                      className="text-xs text-red-600 hover:text-red-700 p-1.5 rounded-lg hover:bg-red-50 flex items-center gap-1"
                      title="Remover vídeo deste slot"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Remover
                    </button>
                  )}
                </div>
              </div>

              {/* Título & Orador & Duração */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Título do Vídeo
                  </label>
                  <input
                    type="text"
                    value={draftHorizontal?.title || ""}
                    onChange={(e) =>
                      setDraftHorizontal((prev) =>
                        prev
                          ? { ...prev, title: e.target.value }
                          : {
                              id: "horizontal",
                              format: "horizontal",
                              title: e.target.value,
                              speakerOrTag: "Bruno Quant",
                              caption: "Painel em vídeo",
                              duration: "01:32",
                              videoUrl: "/videos/hero-sample-horizontal.webm",
                              posterUrl: "/images/videos/video-thumb-7.webp",
                              altText: e.target.value,
                              isPublished: false,
                            }
                      )
                    }
                    placeholder="Ex: Painel: Inovação e Mercado"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#A40DDB] text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Orador / Tag (Exibido no canto superior)
                  </label>
                  <input
                    type="text"
                    value={draftHorizontal?.speakerOrTag || ""}
                    onChange={(e) =>
                      setDraftHorizontal((prev) =>
                        prev ? { ...prev, speakerOrTag: e.target.value } : null
                      )
                    }
                    placeholder="Ex: Bruno Quant"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#A40DDB] text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Duração Indicativa
                  </label>
                  <input
                    type="text"
                    value={draftHorizontal?.duration || ""}
                    onChange={(e) =>
                      setDraftHorizontal((prev) =>
                        prev ? { ...prev, duration: e.target.value } : null
                      )
                    }
                    placeholder="Ex: 01:32"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#A40DDB] text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Texto Alternativo / Acessibilidade
                  </label>
                  <input
                    type="text"
                    value={draftHorizontal?.altText || ""}
                    onChange={(e) =>
                      setDraftHorizontal((prev) =>
                        prev ? { ...prev, altText: e.target.value } : null
                      )
                    }
                    placeholder="Descrição para leitores de tela"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#A40DDB] text-gray-900"
                  />
                </div>
              </div>

              {/* Arquivo de Vídeo & Thumbnail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Vídeo */}
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/70 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                      <Film className="w-4 h-4 text-[#A40DDB]" /> Arquivo de Vídeo (MP4/WebM)
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-mono break-all line-clamp-1">
                    {draftHorizontal?.videoUrl || "Nenhum arquivo atribuído"}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => triggerUpload("horizontal", "video")}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#A40DDB] text-white hover:bg-[#8B09B8] transition-colors flex items-center gap-1.5"
                    >
                      <Upload className="w-3.5 h-3.5" /> Enviar MP4/WebM
                    </button>
                    <button
                      type="button"
                      onClick={() => setMediaPickerTarget({ slot: "horizontal", field: "video" })}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Biblioteca
                    </button>
                  </div>
                </div>

                {/* Thumbnail */}
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/70 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-[#A40DDB]" /> Thumbnail (Capa)
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-mono break-all line-clamp-1">
                    {draftHorizontal?.posterUrl || "Nenhuma capa atribuída"}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => triggerUpload("horizontal", "poster")}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#A40DDB] text-white hover:bg-[#8B09B8] transition-colors flex items-center gap-1.5"
                    >
                      <Upload className="w-3.5 h-3.5" /> Enviar Imagem
                    </button>
                    <button
                      type="button"
                      onClick={() => setMediaPickerTarget({ slot: "horizontal", field: "poster" })}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Biblioteca
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Pré-visualização Interativa Real nos Mockups (Direita) */}
        <div className="lg:col-span-5 bg-[#0A0910] rounded-2xl p-6 border border-white/10 shadow-xl space-y-4 text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#C677E0]" />
              <span className="text-xs font-bold tracking-wider uppercase text-white/90">
                Pré-visualização no Mockup Real
              </span>
            </div>
            <span className="text-[11px] font-medium text-white/50">
              Interativo: clique no Play para testar
            </span>
          </div>

          <div className="flex flex-col items-center justify-center min-h-[460px] py-4">
            {activeSlotTab === "vertical" ? (
              <div className="flex flex-col items-center">
                <VerticalVideoMockup
                  slot={draftVertical}
                  isPlaying={previewPlaying === "vertical"}
                  onPlayToggle={() => {
                    setPreviewPlaying((prev) => (prev === "vertical" ? null : "vertical"));
                  }}
                  onPause={() => {
                    if (previewPlaying === "vertical") setPreviewPlaying(null);
                  }}
                />
                <p className="text-xs text-white/50 mt-4 text-center">
                  Moldura 9:16 fixa com notch e controles originais.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <HorizontalVideoMockup
                  slot={draftHorizontal}
                  isPlaying={previewPlaying === "horizontal"}
                  onPlayToggle={() => {
                    setPreviewPlaying((prev) => (prev === "horizontal" ? null : "horizontal"));
                  }}
                  onPause={() => {
                    if (previewPlaying === "horizontal") setPreviewPlaying(null);
                  }}
                />
                <p className="text-xs text-white/50 mt-4 text-center">
                  Moldura 16:9 fixa com speaker tag e scrubber original.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de Seleção da Biblioteca de Mídia */}
      {mediaPickerTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-gray-900 text-base">
                Selecionar {mediaPickerTarget.field === "video" ? "Vídeo" : "Thumbnail"} da Biblioteca
              </h3>
              <button
                type="button"
                onClick={() => setMediaPickerTarget(null)}
                className="text-gray-400 hover:text-gray-700 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-gray-500">
              Selecione um item do acervo já catalogado no projeto:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {/* Opções dos 9 vídeos do catálogo */}
              {VIDEOS_CONTENT.catalog.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    const isVertical = mediaPickerTarget.slot === "vertical";
                    if (isVertical) {
                      setDraftVertical((prev) => {
                        const fallback: HeroVideoSlot = {
                          id: "vertical",
                          format: "vertical",
                          title: item.title,
                          caption: item.description || "Legenda do vídeo",
                          duration: item.duration,
                          videoUrl: "/videos/hero-sample-vertical.mp4",
                          posterUrl: item.thumbnail,
                          altText: item.title,
                          isPublished: false,
                        };
                        if (!prev) return fallback;
                        return {
                          ...prev,
                          title: item.title,
                          [mediaPickerTarget.field === "poster" ? "posterUrl" : "videoUrl"]:
                            mediaPickerTarget.field === "poster"
                              ? item.thumbnail
                              : "/videos/hero-sample-vertical.mp4",
                        };
                      });
                    } else {
                      setDraftHorizontal((prev) => {
                        const fallback: HeroVideoSlot = {
                          id: "horizontal",
                          format: "horizontal",
                          title: item.title,
                          speakerOrTag: "Painel Executivo",
                          caption: item.description || "Case corporativo",
                          duration: item.duration,
                          videoUrl: "/videos/hero-sample-horizontal.webm",
                          posterUrl: item.thumbnail,
                          altText: item.title,
                          isPublished: false,
                        };
                        if (!prev) return fallback;
                        return {
                          ...prev,
                          title: item.title,
                          [mediaPickerTarget.field === "poster" ? "posterUrl" : "videoUrl"]:
                            mediaPickerTarget.field === "poster"
                              ? item.thumbnail
                              : "/videos/hero-sample-horizontal.webm",
                        };
                      });
                    }
                    showFeedback("success", `Item "${item.title}" selecionado para o slot.`);
                    setMediaPickerTarget(null);
                  }}
                  className="group cursor-pointer rounded-xl border border-gray-200 overflow-hidden hover:border-[#A40DDB] hover:shadow-md transition-all"
                >
                  <div className="relative aspect-video w-full bg-gray-900">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/75 px-1.5 py-0.5 rounded text-[9px] text-white font-mono">
                      {item.duration}
                    </span>
                  </div>
                  <div className="p-2 text-left">
                    <p className="text-xs font-bold text-gray-900 line-clamp-1">{item.title}</p>
                    <p className="text-[10px] text-gray-500">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

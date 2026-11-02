import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import type { HeroVideosData, HeroVideoSlot } from "@/types/videos-hero";

const dataFilePath = path.join(process.cwd(), "src", "content", "videos-hero-data.json");

function getHeroData(): HeroVideosData {
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, "utf-8");
      return JSON.parse(fileData) as HeroVideosData;
    }
  } catch (err) {
    console.error("Erro ao ler videos-hero-data.json:", err);
  }

  return {
    published: {
      vertical: null,
      horizontal: null,
    },
    draft: {
      vertical: null,
      horizontal: null,
    },
    hasUnpublishedChanges: false,
  };
}

function saveHeroData(data: HeroVideosData) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Erro ao salvar videos-hero-data.json:", err);
    return false;
  }
}

export async function GET() {
  const data = getHeroData();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, draft } = body;
    const currentData = getHeroData();

    const now = new Date().toISOString();

    if (action === "save_draft") {
      const updatedDraft = {
        vertical: draft.vertical
          ? { ...draft.vertical, updatedAt: now }
          : null,
        horizontal: draft.horizontal
          ? { ...draft.horizontal, updatedAt: now }
          : null,
      };

      const updatedData: HeroVideosData = {
        ...currentData,
        draft: updatedDraft,
        hasUnpublishedChanges: true,
      };

      const saved = saveHeroData(updatedData);
      if (!saved) {
        return NextResponse.json({ error: "Falha ao gravar rascunho" }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        message: "Rascunho salvo com sucesso",
        data: updatedData,
      });
    }

    if (action === "publish") {
      const updatedVertical: HeroVideoSlot | null = draft?.vertical
        ? {
            ...draft.vertical,
            isPublished: true,
            publishedAt: now,
            updatedAt: now,
          }
        : null;

      const updatedHorizontal: HeroVideoSlot | null = draft?.horizontal
        ? {
            ...draft.horizontal,
            isPublished: true,
            publishedAt: now,
            updatedAt: now,
          }
        : null;

      const newSlots = {
        vertical: updatedVertical,
        horizontal: updatedHorizontal,
      };

      const updatedData: HeroVideosData = {
        published: newSlots,
        draft: newSlots,
        hasUnpublishedChanges: false,
        lastPublishedAt: now,
      };

      const saved = saveHeroData(updatedData);
      if (!saved) {
        return NextResponse.json({ error: "Falha ao publicar alterações" }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        message: "Alterações publicadas com sucesso no site!",
        data: updatedData,
      });
    }

    if (action === "discard_draft") {
      const updatedData: HeroVideosData = {
        ...currentData,
        draft: {
          vertical: currentData.published.vertical ? { ...currentData.published.vertical } : null,
          horizontal: currentData.published.horizontal ? { ...currentData.published.horizontal } : null,
        },
        hasUnpublishedChanges: false,
      };

      saveHeroData(updatedData);
      return NextResponse.json({
        success: true,
        message: "Rascunho descartado. Dados restaurados para a versão publicada.",
        data: updatedData,
      });
    }

    return NextResponse.json({ error: "Ação inválida" }, { status: 400 });
  } catch (err) {
    console.error("Erro no endpoint POST /api/admin/videos/hero:", err);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}

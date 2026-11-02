import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ALLOWED_MIME_TYPES = [
  "video/mp4",
  "video/webm",
  "video/ogg",
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
];

const MAX_VIDEO_SIZE = 50 * 1024 * 1024; // 50MB
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const type = (formData.get("type") as string) || "video";

    if (!file) {
      return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 });
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: `Tipo de arquivo não permitido: ${file.type}. Envie MP4, WebM, WebP, JPG ou PNG.` },
        { status: 400 }
      );
    }

    const maxSize = file.type.startsWith("video/") ? MAX_VIDEO_SIZE : MAX_IMAGE_SIZE;
    if (file.size > maxSize) {
      const sizeMb = (maxSize / (1024 * 1024)).toFixed(0);
      return NextResponse.json(
        { error: `O arquivo excede o limite máximo permitido de ${sizeMb}MB.` },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename
    const ext = path.extname(file.name) || (file.type.startsWith("video/") ? ".mp4" : ".webp");
    const baseClean = path
      .basename(file.name, ext)
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, "-")
      .slice(0, 30);
    const uniqueFilename = `${baseClean}-${Date.now()}${ext}`;

    const uploadDir = path.join(process.cwd(), "public", "uploads", "videos");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, uniqueFilename);
    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/uploads/videos/${uniqueFilename}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename: uniqueFilename,
      size: file.size,
      mimeType: file.type,
      message: "Arquivo enviado com sucesso!",
    });
  } catch (err) {
    console.error("Erro no upload de vídeo:", err);
    return NextResponse.json({ error: "Erro ao processar o upload do arquivo" }, { status: 500 });
  }
}

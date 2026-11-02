import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface StoredLead {
  id: string;
  protocol: string;
  createdAt: string;
  status: "novo" | "em_contato" | "proposta_enviada" | "fechado" | "arquivado";
  name: string;
  whatsapp: string;
  normalizedWhatsapp: string;
  email: string;
  company?: string;
  services: string[];
  objective: string;
  deadline?: string;
  budget?: string;
  source?: string;
  consent: boolean;
  consentTimestamp: string;
  consentVersion: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    term?: string;
  };
  referrer?: string;
  whatsappOpenAttemptedAt?: string;
}

const leadsFilePath = path.join(process.cwd(), "src", "content", "leads-data.json");

function getLeads(): StoredLead[] {
  try {
    if (fs.existsSync(leadsFilePath)) {
      const content = fs.readFileSync(leadsFilePath, "utf-8");
      return JSON.parse(content) as StoredLead[];
    }
  } catch (err) {
    console.error("Erro ao ler leads-data.json:", err);
  }
  return [];
}

function saveLeads(leads: StoredLead[]): boolean {
  try {
    const dir = path.dirname(leadsFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Erro ao salvar leads-data.json:", err);
    return false;
  }
}

function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("55") && digits.length >= 12) {
    return digits;
  }
  return `55${digits}`;
}

export async function GET() {
  const leads = getLeads();
  return NextResponse.json({
    total: leads.length,
    leads: leads.map((l) => ({
      id: l.id,
      protocol: l.protocol,
      createdAt: l.createdAt,
      status: l.status,
      name: l.name,
      company: l.company || "Não informada",
      services: l.services,
      deadline: l.deadline,
      budget: l.budget,
      source: l.source,
    })),
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot spam protection
    if (body.website_trap || body.fax) {
      return NextResponse.json({ error: "Spam detectado" }, { status: 400 });
    }

    const {
      name,
      whatsapp,
      email,
      company,
      services,
      objective,
      deadline,
      budget,
      source,
      consent,
      utm,
      referrer,
    } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 120) {
      return NextResponse.json(
        { error: "Nome é obrigatório e deve ter entre 2 e 120 caracteres." },
        { status: 422 }
      );
    }

    if (!whatsapp || typeof whatsapp !== "string" || whatsapp.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { error: "WhatsApp válido com DDD é obrigatório." },
        { status: 422 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "E-mail válido é obrigatório." },
        { status: 422 }
      );
    }

    if (!Array.isArray(services) || services.length === 0) {
      return NextResponse.json(
        { error: "Selecione pelo menos um serviço de interesse." },
        { status: 422 }
      );
    }

    if (!objective || typeof objective !== "string" || objective.trim().length < 10) {
      return NextResponse.json(
        { error: "Descreva brevemente o seu objetivo (mínimo 10 caracteres)." },
        { status: 422 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "É necessário concordar com o envio e armazenamento dos dados para contato." },
        { status: 422 }
      );
    }

    const now = new Date();
    const timestampStr = now.toISOString();
    const shortProtocol = `ELO-${Math.floor(1000 + Math.random() * 9000)}`;
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const normalizedWhatsapp = normalizePhone(whatsapp);

    const newLead: StoredLead = {
      id: leadId,
      protocol: shortProtocol,
      createdAt: timestampStr,
      status: "novo",
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      normalizedWhatsapp,
      email: email.trim().toLowerCase(),
      company: company ? company.trim() : undefined,
      services,
      objective: objective.trim(),
      deadline: deadline && deadline !== "Selecione..." ? deadline : undefined,
      budget: budget && budget !== "Selecione..." ? budget : undefined,
      source: source && source !== "Selecione..." ? source : undefined,
      consent: true,
      consentTimestamp: timestampStr,
      consentVersion: "v1.0",
      utm: utm || {},
      referrer: referrer || "",
    };

    const currentLeads = getLeads();
    currentLeads.unshift(newLead);
    const saved = saveLeads(currentLeads);

    if (!saved) {
      return NextResponse.json(
        { error: "Falha ao gravar briefing no servidor. Tente novamente." },
        { status: 500 }
      );
    }

    // Build canonical WhatsApp message according to 09-ORCAMENTO-WHATSAPP.md
    const companyDisplay = newLead.company || "Não informada";
    const servicesDisplay = services.join(", ");
    const deadlineDisplay = newLead.deadline || "Não informado";
    const budgetDisplay = newLead.budget || "A definir / Conversar";

    // Clean excerpt of objective to keep URL safe and clear
    const objectiveSummary = newLead.objective.replace(/\n+/g, " ").trim();

    const messageLines = [
      "Olá, Eloisa! Preenchi o formulário no seu site.",
      `Protocolo: ${shortProtocol}`,
      `Nome: ${newLead.name}`,
      `Empresa: ${companyDisplay}`,
      `Interesse: ${servicesDisplay}`,
      `Objetivo: ${objectiveSummary}`,
      `Prazo: ${deadlineDisplay}`,
      `Orçamento: ${budgetDisplay}`,
      "Pode me ajudar com uma proposta?",
    ];

    const messageText = messageLines.join("\n");
    const targetPhone = "5511947851293";
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(messageText)}`;

    return NextResponse.json({
      success: true,
      leadId: newLead.id,
      protocol: shortProtocol,
      whatsappUrl,
      messageText,
    });
  } catch (err) {
    console.error("Erro no processamento do lead:", err);
    return NextResponse.json(
      { error: "Erro interno no servidor ao processar o formulário." },
      { status: 500 }
    );
  }
}

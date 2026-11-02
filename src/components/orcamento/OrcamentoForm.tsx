"use client";

import React, { useState } from "react";
import {
  Lock,
  Calendar,
  DollarSign,
  Send,
  Loader2,
  CheckCircle2,
  Copy,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import { orcamentoContent } from "@/content/orcamento-content";

interface OrcamentoFormProps {
  selectedServices: string[];
  onToggleService: (serviceTitle: string) => void;
}

export function OrcamentoForm({
  selectedServices,
  onToggleService,
}: OrcamentoFormProps) {
  const { form } = orcamentoContent;
  const { fields } = form;

  // Form input states
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [objective, setObjective] = useState("");
  const [deadline, setDeadline] = useState("");
  const [budget, setBudget] = useState("");
  const [source, setSource] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedSuccess, setSubmittedSuccess] = useState<{
    protocol: string;
    whatsappUrl: string;
    messageText: string;
  } | null>(null);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  // Phone mask helper for Brazilian WhatsApp
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 11) val = val.substring(0, 11);

    let formatted = val;
    if (val.length > 2) {
      formatted = `(${val.substring(0, 2)}) ${val.substring(2)}`;
    }
    if (val.length > 7) {
      formatted = `(${val.substring(0, 2)}) ${val.substring(2, 7)}-${val.substring(7)}`;
    }
    setWhatsapp(formatted);
  };

  const handleCopyMessage = async () => {
    if (!submittedSuccess) return;
    try {
      await navigator.clipboard.writeText(submittedSuccess.messageText);
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 3000);
    } catch {
      // fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Frontend validations
    if (!name.trim() || name.trim().length < 2) {
      setErrorMessage("Por favor, informe seu nome completo.");
      return;
    }

    const rawPhone = whatsapp.replace(/\D/g, "");
    if (rawPhone.length < 10) {
      setErrorMessage("Por favor, informe um número de WhatsApp válido com DDD.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage("Por favor, informe um endereço de e-mail válido.");
      return;
    }

    if (selectedServices.length === 0) {
      setErrorMessage("Por favor, selecione pelo menos um serviço de interesse.");
      return;
    }

    if (!objective.trim() || objective.trim().length < 10) {
      setErrorMessage("Por favor, descreva brevemente seu objetivo (mínimo 10 caracteres).");
      return;
    }

    if (!consent) {
      setErrorMessage("É necessário marcar a caixa de consentimento para prosseguir.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Capture UTMs from window if available
      const searchParams = new URLSearchParams(window.location.search);
      const utm = {
        source: searchParams.get("utm_source") || undefined,
        medium: searchParams.get("utm_medium") || undefined,
        campaign: searchParams.get("utm_campaign") || undefined,
        content: searchParams.get("utm_content") || undefined,
        term: searchParams.get("utm_term") || undefined,
      };

      const payload = {
        name: name.trim(),
        whatsapp: whatsapp.trim(),
        email: email.trim(),
        company: company.trim(),
        services: selectedServices,
        objective: objective.trim(),
        deadline: deadline || undefined,
        budget: budget || undefined,
        source: source || undefined,
        consent: true,
        utm,
        referrer: document.referrer || undefined,
        website_trap: honeypot || undefined,
      };

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Erro ao registrar solicitação. Tente novamente.");
      }

      // Record success state
      setSubmittedSuccess({
        protocol: data.protocol,
        whatsappUrl: data.whatsappUrl,
        messageText: data.messageText,
      });

      // Try opening WhatsApp in a new tab
      try {
        window.open(data.whatsappUrl, "_blank", "noopener,noreferrer");
      } catch (openErr) {
        console.warn("Popup bloqueado pelo navegador:", openErr);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Ocorreu um erro ao enviar. Tente novamente.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // If successfully submitted, display confirmation screen with WhatsApp link & fallback copy
  if (submittedSuccess) {
    return (
      <div className="bg-white border border-purple-100 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#FAF2FD] border border-purple-200 text-[#9400D3] flex items-center justify-center mx-auto mb-5 shadow-sm">
          <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
        </div>

        <span className="inline-block px-3.5 py-1 rounded-full bg-purple-100/70 text-[#9400D3] text-xs font-bold tracking-wider mb-2">
          PROTOCOLO: {submittedSuccess.protocol}
        </span>

        <h3 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight mb-3">
          Briefing salvo com sucesso<span className="text-[#9400D3]">!.</span>
        </h3>

        <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto mb-6 leading-relaxed">
          Seus dados foram registrados com segurança no nosso sistema. O WhatsApp deve abrir automaticamente. Caso não tenha aberto, clique no botão abaixo para conversar com a Eloisa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
          <a
            href={submittedSuccess.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#9400D3] to-[#7B00B3] text-white font-bold text-sm shadow-md hover:shadow-lg hover:brightness-105 transition-all"
          >
            <Send className="w-4 h-4" />
            Abrir conversa no WhatsApp
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>

          <button
            type="button"
            onClick={handleCopyMessage}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-purple-200 bg-[#FAF2FD] text-purple-950 hover:bg-purple-100/70 font-semibold text-sm transition-all"
          >
            <Copy className="w-4 h-4 text-[#9400D3]" />
            {copiedSuccess ? "Mensagem copiada!" : "Copiar texto da mensagem"}
          </button>
        </div>

        {/* Message preview box */}
        <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-4 text-left max-w-lg mx-auto text-xs text-gray-600 font-mono whitespace-pre-wrap leading-relaxed">
          {submittedSuccess.messageText}
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmittedSuccess(null);
            setName("");
            setWhatsapp("");
            setEmail("");
            setCompany("");
            setObjective("");
          }}
          className="mt-6 text-xs text-gray-500 hover:text-[#9400D3] underline underline-offset-4 font-medium transition-colors"
        >
          Enviar outro projeto ou briefing
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-purple-100/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl relative">
      {/* Card Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-6">
        <span className="text-xs font-bold tracking-wider text-[#9400D3] uppercase">
          {form.eyebrow}
        </span>

        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium bg-gray-50 px-2.5 py-1 rounded-full border border-gray-200/60">
          <Lock className="w-3.5 h-3.5 text-[#9400D3]" />
          <span>{form.securityBadge}</span>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight leading-tight mb-2">
        Me conte sobre o seu projeto<span className="text-[#9400D3]">.</span>
      </h2>
      <p className="text-xs sm:text-sm text-gray-500 mb-8 leading-relaxed">
        {form.subtitle}
      </p>

      {/* Error alert */}
      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
          <span className="leading-snug">{errorMessage}</span>
        </div>
      )}

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot field (hidden from real users) */}
        <input
          type="text"
          name="website_trap"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Row 1: Name and WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5">
              {fields.name.label}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={fields.name.placeholder}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[#9400D3] focus:ring-2 focus:ring-[#9400D3]/15 outline-none transition-all placeholder:text-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5">
              {fields.whatsapp.label}
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-xs text-gray-500 font-medium flex items-center gap-1 pointer-events-none">
                <span>🇧🇷</span>
              </span>
              <input
                type="tel"
                value={whatsapp}
                onChange={handlePhoneChange}
                placeholder={fields.whatsapp.placeholder}
                className="w-full pl-11 pr-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[#9400D3] focus:ring-2 focus:ring-[#9400D3]/15 outline-none transition-all placeholder:text-gray-400"
                required
              />
            </div>
          </div>
        </div>

        {/* Row 2: E-mail and Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5">
              {fields.email.label}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={fields.email.placeholder}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[#9400D3] focus:ring-2 focus:ring-[#9400D3]/15 outline-none transition-all placeholder:text-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5">
              {fields.company.label}
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder={fields.company.placeholder}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[#9400D3] focus:ring-2 focus:ring-[#9400D3]/15 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Group: Services Checkboxes */}
        <div className="pt-2">
          <label className="block text-xs font-bold text-gray-800 mb-2.5">
            {fields.servicesLabel}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              "Social Media",
              "Vídeos",
              "Sites e Landing Pages",
              "Anúncios e Campanhas",
              "Copywriting",
              "Consultoria",
            ].map((srv) => {
              const isChecked = selectedServices.includes(srv);
              return (
                <label
                  key={srv}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-all ${
                    isChecked
                      ? "bg-[#FAF2FD] border-purple-300 text-purple-950 font-semibold"
                      : "bg-white border-gray-200/80 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggleService(srv)}
                    className="w-4 h-4 rounded text-[#9400D3] focus:ring-[#9400D3]/20 border-gray-300 accent-[#9400D3]"
                  />
                  <span className="text-xs leading-none select-none">{srv}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Objective Textarea */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-bold text-gray-800">
              {fields.objective.label}
            </label>
            <span
              className={`text-[11px] font-mono ${
                objective.length > 500 ? "text-amber-600 font-bold" : "text-gray-400"
              }`}
            >
              {objective.length}/{fields.objective.maxChars}
            </span>
          </div>
          <textarea
            rows={3}
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            placeholder={fields.objective.placeholder}
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-[#9400D3] focus:ring-2 focus:ring-[#9400D3]/15 outline-none transition-all placeholder:text-gray-400 resize-y min-h-[90px]"
            required
          />
        </div>

        {/* Row 3: Deadline & Budget Selects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5">
              {fields.deadline.label}
            </label>
            <div className="relative flex items-center">
              <Calendar className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
              <select
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-sm rounded-xl border border-gray-200 bg-white focus:border-[#9400D3] focus:ring-2 focus:ring-[#9400D3]/15 outline-none transition-all text-gray-700 cursor-pointer appearance-none"
              >
                {fields.deadline.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-400">
                ▼
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5">
              {fields.budget.label}
            </label>
            <div className="relative flex items-center">
              <DollarSign className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-sm rounded-xl border border-gray-200 bg-white focus:border-[#9400D3] focus:ring-2 focus:ring-[#9400D3]/15 outline-none transition-all text-gray-700 cursor-pointer appearance-none"
              >
                {fields.budget.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-400">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: How did you know us? */}
        <div className="pt-1">
          <label className="block text-xs font-bold text-gray-800 mb-1.5">
            {fields.source.label}
          </label>
          <div className="relative flex items-center">
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-white focus:border-[#9400D3] focus:ring-2 focus:ring-[#9400D3]/15 outline-none transition-all text-gray-700 cursor-pointer appearance-none"
            >
              {fields.source.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-400">
              ▼
            </div>
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="w-4 h-4 rounded text-[#9400D3] focus:ring-[#9400D3]/20 border-gray-300 accent-[#9400D3] mt-0.5 flex-shrink-0"
              required
            />
            <span className="text-xs text-gray-600 leading-snug select-none">
              {fields.consentText}
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-[#9400D3] via-[#8500C2] to-[#7B00B3] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#9400D3]/20 hover:shadow-xl hover:shadow-[#9400D3]/30 hover:brightness-105 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Salvando e abrindo WhatsApp...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {fields.submitButton}
                <span className="text-white/80">→</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-gray-400 text-center mt-3 font-normal">
            {fields.securityNote}
          </p>
        </div>
      </form>
    </div>
  );
}

"use client";

import React from "react";

// 1. ActiveCampaign
function ActiveCampaignBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4L6 14L12 24L18 14L12 4Z" fill="#356AE6" />
        <path d="M18 14L12 24L24 24L18 14Z" fill="#004CE8" />
      </svg>
      <div className="flex flex-col leading-none text-left">
        <span className="text-[10px] font-bold text-[#1E2024] tracking-tight">Active</span>
        <span className="text-[8.5px] font-semibold text-[#004CE8] tracking-tight">Campaign &gt;</span>
      </div>
    </div>
  );
}

// 2. CapCut
function CapCutBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center flex-shrink-0">
        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v.5L12 12 3 7v-.5z" fill="#FFF" />
          <path d="M3 17.5A1.5 1.5 0 0 0 4.5 19h15a1.5 1.5 0 0 0 1.5-1.5v-.5L12 12l-9 5v.5z" fill="#FFF" />
        </svg>
      </div>
      <span className="text-[11px] font-bold text-[#111111] tracking-tight truncate">
        CapCut
      </span>
    </div>
  );
}

// 3. Bitrix24
function Bitrix24Badge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#2FC6F6" />
        <path
          d="M8 12a4 4 0 0 1 6.8-2.8L13.5 10.5H17V7l-1.3 1.3A6 6 0 0 0 6 12h2zm8 0a4 4 0 0 1-6.8 2.8l1.3-1.3H7v3.5l1.3-1.3A6 6 0 0 0 18 12h-2z"
          fill="#FFFFFF"
        />
      </svg>
      <span className="text-[11px] font-bold text-[#0F5EA2] tracking-tight truncate">
        Bitrix<span className="text-[#2FC6F6]">24</span>
      </span>
    </div>
  );
}

// 4. ChatGPT
function ChatGPTBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <div className="w-4 h-4 rounded-[3px] bg-[#10A37F]/10 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M22.28 9.82a5.98 5.98 0 0 0-.51-4.91 6.05 6.05 0 0 0-6.51-2.9 6.06 6.06 0 0 0-10.28 2.17 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A5.98 5.98 0 0 0 13.26 24a6.05 6.05 0 0 0 5.77-4.2 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.08z"
            fill="#10A37F"
          />
        </svg>
      </div>
      <span className="text-[11px] font-bold text-[#111111] tracking-tight truncate">
        ChatGPT
      </span>
    </div>
  );
}

// 5. Google Search Console
function GoogleSearchConsoleBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M19 4h-2v16h2V4z" fill="#4285F4" />
        <path d="M14 9h-2v11h2V9z" fill="#34A853" />
        <circle cx="8" cy="13" r="4.5" stroke="#FBBC05" strokeWidth="2.5" fill="none" />
        <path d="M4 17l-3 3" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col leading-none text-left">
        <span className="text-[9.5px] font-bold text-[#3C4043] tracking-tight">Search</span>
        <span className="text-[8px] font-medium text-[#5F6368] tracking-tight">Console</span>
      </div>
    </div>
  );
}

// 6. Mailchimp
function MailchimpBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <div className="w-4 h-4 rounded-full bg-[#FFE01B] flex items-center justify-center flex-shrink-0 shadow-xs">
        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="#241C15" aria-hidden="true">
          <circle cx="12" cy="12" r="7" fill="#241C15" />
          <circle cx="9.5" cy="10" r="1.2" fill="#FFE01B" />
          <circle cx="14.5" cy="10" r="1.2" fill="#FFE01B" />
          <path d="M9 14.5c1 1.2 5 1.2 6 0" stroke="#FFE01B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <span className="text-[10.5px] font-bold text-[#241C15] tracking-tight truncate">
        Mailchimp
      </span>
    </div>
  );
}

// 7. WiX.com
function WixBadge() {
  return (
    <div className="flex items-center justify-center min-w-0">
      <span className="text-[12px] font-black text-[#111111] tracking-tight font-heading truncate">
        WiX<span className="text-[9px] font-semibold text-[#666666]">.com</span>
      </span>
    </div>
  );
}

// 8. Trello
function TrelloBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <div className="w-4 h-4 rounded-[3px] bg-[#0079BF] flex items-center justify-center gap-[2px] p-[2.5px] flex-shrink-0">
        <span className="w-1.5 h-full rounded-[1px] bg-white" />
        <span className="w-1.5 h-2/3 rounded-[1px] bg-white self-start" />
      </div>
      <span className="text-[11px] font-bold text-[#0079BF] tracking-tight truncate">
        Trello
      </span>
    </div>
  );
}

// 9. Affinity
function AffinityBadge() {
  return (
    <div className="flex items-center justify-center min-w-0">
      <span className="text-[12px] font-bold text-[#111111] tracking-tight italic font-serif truncate">
        affinity
      </span>
    </div>
  );
}

// 10. Google Workspace
function GoogleWorkspaceBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <div className="grid grid-cols-2 gap-[1.5px] w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
        <span className="w-1.5 h-1.5 rounded-[1px] bg-[#4285F4]" />
        <span className="w-1.5 h-1.5 rounded-[1px] bg-[#EA4335]" />
        <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FBBC05]" />
        <span className="w-1.5 h-1.5 rounded-[1px] bg-[#34A853]" />
      </div>
      <div className="flex flex-col leading-none text-left">
        <span className="text-[9.5px] font-bold text-[#4285F4]">Google</span>
        <span className="text-[8px] font-medium text-[#5F6368] tracking-tight">Workspace</span>
      </div>
    </div>
  );
}

// 11. Notion
function NotionBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <div className="w-4 h-4 rounded-[3px] border border-[#111] bg-white flex items-center justify-center flex-shrink-0 shadow-xs">
        <span className="text-[9.5px] font-black text-[#111] leading-none">N</span>
      </div>
      <span className="text-[11px] font-bold text-[#111111] tracking-tight truncate">
        Notion
      </span>
    </div>
  );
}

// 12. Canva
function CanvaBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <div className="w-4 h-4 rounded-[3px] bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] flex items-center justify-center flex-shrink-0">
        <span className="text-[7.5px] font-black text-white italic">C</span>
      </div>
      <span className="text-[11px] font-bold text-[#00828A] tracking-tight truncate">
        Canva
      </span>
    </div>
  );
}

// 13. Meta
function MetaBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
          fill="#0081FB"
        />
      </svg>
      <span className="text-[11px] font-bold text-[#111111] tracking-tight truncate">
        Meta
      </span>
    </div>
  );
}

// 14. Claude (Anthropic)
function ClaudeBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2l1.3 6.6L20 6.5l-4.5 5.2 5.5 3.8-6.8-.7L12 21.5l-2.2-6.7-6.8.7 5.5-3.8L4 6.5l6.7 2.1L12 2z"
          fill="#D97757"
        />
      </svg>
      <span className="text-[11px] font-bold text-[#111111] tracking-tight truncate">
        Claude
      </span>
    </div>
  );
}

// 15. SEMRUSH
function SemrushBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20.698 11.911c0 .444-.226.516-.79.516-.596 0-.706-.1-.77-.554-.118-1.152-.896-2.13-2.201-2.24-.418-.034-.518-.19-.518-.706 0-.48.074-.708.446-.708 2.265.01 3.833 1.832 3.833 3.69v.002zm3.3 0c0-3.456-2.338-7.11-7.74-7.11H5.52c-.218 0-.354.11-.354.31 0 .109.082.209.156.26.388.31.97.654 1.73 1.036.743.372 1.323.616 1.903.852.246.1.336.208.336.344 0 .19-.136.308-.4.308H.372c-.254 0-.372.164-.372.326 0 .136.044.254.162.372.69.726 1.796 1.596 3.4 2.604 1.466.91 2.98 1.74 4.533 2.492.236.11.308.236.308.372-.008.154-.126.28-.4.28H4.1c-.216 0-.344.12-.344.3 0 .1.08.226.19.326.888.808 2.311 1.688 4.207 2.494 2.53 1.08 5.094 1.721 7.98 1.721 5.465 0 7.867-4.087 7.867-7.289l-.002.002zm-7.133 5.104c-2.794 0-5.132-2.276-5.132-5.114 0-2.794 2.33-5.04 5.132-5.04 2.863 0 5.111 2.24 5.111 5.04a5.086 5.086 0 0 1-5.111 5.114z"
          fill="#FF642D"
        />
      </svg>
      <span className="text-[10px] font-black text-[#111111] tracking-tight truncate">
        SEMRUSH
      </span>
    </div>
  );
}

// 16. Microsoft Clarity
function ClarityBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polygon points="12,2 3,21 21,21" fill="#0078D4" />
        <polygon points="12,2 21,21 12,18" fill="#50E6FF" opacity="0.7" />
      </svg>
      <div className="flex flex-col leading-none text-left">
        <span className="text-[10px] font-bold text-[#111111]">Clarity</span>
        <span className="text-[7px] font-medium text-[#777] tracking-tight">by Microsoft</span>
      </div>
    </div>
  );
}

// 17. mLabs Social
function MLabsBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 18L9 6L14 18L19 6L23 18"
          stroke="#FF5A00"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-col leading-none text-left">
        <span className="text-[10px] font-black text-[#FF5A00] leading-none">mLabs</span>
        <span className="text-[7px] font-bold text-[#FF5A00] opacity-80 tracking-wider leading-none">
          Social
        </span>
      </div>
    </div>
  );
}

// 18. Linktree
function LinktreeBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <div className="w-4 h-4 rounded-[3px] bg-[#D2E823] flex items-center justify-center flex-shrink-0">
        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="#000" aria-hidden="true">
          <path d="M10.5 2h3v6l4.5-4.5 2 2L15.5 10H22v3h-6.5l4.5 4.5-2 2-4.5-4.5V22h-3v-7l-4.5 4.5-2-2L8.5 13H2v-3h6.5L4 5.5l2-2L10.5 8V2z" fill="#000" />
        </svg>
      </div>
      <span className="text-[11px] font-bold text-[#111111] tracking-tight truncate">
        Linktree
      </span>
    </div>
  );
}

// 19. Google Analytics
function GoogleAnalyticsBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <div className="flex items-end gap-[1.5px] h-3.5 flex-shrink-0" aria-hidden="true">
        <span className="w-1 h-1.5 rounded-[1px] bg-[#F9AB00]" />
        <span className="w-1 h-2.5 rounded-[1px] bg-[#E37400]" />
        <span className="w-1 h-3.5 rounded-[1px] bg-[#E37400]" />
      </div>
      <div className="flex flex-col leading-none text-left">
        <span className="text-[9.5px] font-bold text-[#E37400]">Google</span>
        <span className="text-[8px] font-medium text-[#5F6368] tracking-tight">Analytics</span>
      </div>
    </div>
  );
}

// 20. Loja Integrada
function LojaIntegradaBadge() {
  return (
    <div className="flex items-center gap-1.5 min-w-0">
      <div className="w-4 h-4 rounded-[3px] bg-[#00A3FF] flex items-center justify-center flex-shrink-0">
        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </div>
      <div className="flex flex-col leading-none text-left">
        <span className="text-[9.5px] font-bold text-[#00A3FF] tracking-tight">Loja</span>
        <span className="text-[8px] font-medium text-[#00A3FF] tracking-tight">Integrada</span>
      </div>
    </div>
  );
}

export function AboutToolBadge({ name }: { name: string }) {
  switch (name) {
    case "ActiveCampaign":
      return <ActiveCampaignBadge />;
    case "CapCut":
      return <CapCutBadge />;
    case "Bitrix24":
      return <Bitrix24Badge />;
    case "ChatGPT":
      return <ChatGPTBadge />;
    case "Google Search Console":
      return <GoogleSearchConsoleBadge />;
    case "Mailchimp":
      return <MailchimpBadge />;
    case "Wix.com":
      return <WixBadge />;
    case "Trello":
      return <TrelloBadge />;
    case "Affinity":
      return <AffinityBadge />;
    case "Google Workspace":
      return <GoogleWorkspaceBadge />;
    case "Notion":
      return <NotionBadge />;
    case "Canva":
      return <CanvaBadge />;
    case "Meta":
      return <MetaBadge />;
    case "Claude":
      return <ClaudeBadge />;
    case "SEMRUSH":
      return <SemrushBadge />;
    case "Clarity":
      return <ClarityBadge />;
    case "mLabs":
      return <MLabsBadge />;
    case "Linktree":
      return <LinktreeBadge />;
    case "Google Analytics":
      return <GoogleAnalyticsBadge />;
    case "Loja Integrada":
      return <LojaIntegradaBadge />;
    default:
      return null;
  }
}

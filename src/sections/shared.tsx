/* Shared small components & data for the Amara landing page */

export const integrations = [
  'WhatsApp', 'Instagram', 'X (Twitter)', 'LinkedIn', 'TikTok', 'Facebook',
  'Gmail', 'Outlook', 'Google Calendar', 'Google Drive', 'Slack', 'Zoom',
  'HubSpot', 'Salesforce', 'Zoho CRM', 'Notion', 'Calendly',
  'QuickBooks', 'Xero', 'Wave', 'Zoho Books',
  'Paystack', 'Flutterwave', 'M-Pesa', 'Stripe', 'Moniepoint', 'Wise',
]

/* deterministic pleasant hue per integration, lavender-family */
export function monoHue(name: string): string {
  const hues: Record<string, string> = {
    WhatsApp: '#25d366', Instagram: '#e1306c', 'X (Twitter)': '#17142e',
    LinkedIn: '#0a66c2', TikTok: '#17142e', Facebook: '#1877f2',
    Gmail: '#ea4335', Outlook: '#0f6cbd', 'Google Calendar': '#4285f4',
    'Google Drive': '#f4b400', Slack: '#611f69', Zoom: '#2d8cff',
    HubSpot: '#ff7a59', Salesforce: '#00a1e0', 'Zoho CRM': '#e42527',
    Notion: '#17142e', Calendly: '#006bff', QuickBooks: '#2ca01c',
    Xero: '#13b5ea', Wave: '#1c6ff2', 'Zoho Books': '#e42527',
    Paystack: '#00c3f7', Flutterwave: '#f5a623', 'M-Pesa': '#43b02a',
    Stripe: '#635bff', Moniepoint: '#0a5cff', Wise: '#9fe870',
  }
  return hues[name] ?? '#5446d6'
}

export function MonoChip({ name, dark = false }: { name: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-medium ${
        dark
          ? 'border-white/12 bg-white/[0.04] text-white/80'
          : 'border-[var(--line)] bg-white text-[var(--ink-soft)]'
      }`}
    >
      <span
        className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold text-white"
        style={{ background: monoHue(name) }}
      >
        {name.replace(/[^A-Za-z]/g, '')[0]}
      </span>
      {name}
    </span>
  )
}

export function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`font-mono2 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] ${
        dark ? 'text-[#b9b2e8]' : 'text-[var(--indigo)]'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-[#b9b2e8]' : 'bg-[var(--indigo)]'}`} />
      {children}
    </div>
  )
}

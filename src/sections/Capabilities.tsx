import { useReveal } from '@/hooks/useReveal'
import { SectionLabel } from './shared'

const capabilities = [
  {
    n: '01',
    title: 'Create & send invoices',
    body: '“Invoice Chidi at Bloom Realty R850,000 for the Q3 retainer.” Amara drafts it in QuickBooks or Xero, attaches a Paystack or Flutterwave payment link, sends it on WhatsApp or email — and chases it politely until it’s paid.',
    tags: ['QuickBooks', 'Xero', 'Paystack', 'Flutterwave'],
  },
  {
    n: '02',
    title: 'Retrieve financial answers, instantly',
    body: '“What’s my cash position?” “Which invoices are overdue?” “How much did we spend on ads in June?” She queries your books and M-Pesa or bank feeds and answers in plain language — numbers first, no spreadsheets required.',
    tags: ['Xero', 'Wave', 'M-Pesa', 'Moniepoint'],
  },
  {
    n: '03',
    title: 'Create content for your socials',
    body: 'On-voice posts, carousels and short-form scripts drafted from your ideas, your tone, your calendar. She schedules across LinkedIn, Instagram, X and TikTok and reports what actually moved.',
    tags: ['LinkedIn', 'Instagram', 'X', 'TikTok'],
  },
  {
    n: '04',
    title: 'Engage on socials, with guardrails',
    body: 'She comments, replies and triages DMs in your voice — escalating anything sensitive to you first. You approve the playbook once; she runs it every day.',
    tags: ['WhatsApp', 'Instagram', 'Facebook', 'X'],
  },
  {
    n: '05',
    title: 'Book appointments, end to end',
    body: '“Get 30 minutes with Amina from the fund next week.” She checks both calendars, proposes slots across time zones, sends the invite with a Meet link and reminds everyone the morning of.',
    tags: ['Google Calendar', 'Outlook', 'Calendly', 'Zoom'],
  },
  {
    n: '06',
    title: 'Run your inbox & CRM',
    body: 'Overnight triage with drafted replies waiting for your one-word approval. Every call, email and deal logged into HubSpot or Salesforce without you touching a field.',
    tags: ['Gmail', 'Outlook', 'HubSpot', 'Salesforce'],
  },
]

export function Capabilities() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="capabilities" ref={ref} className="border-t border-[var(--line)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal max-w-2xl">
          <SectionLabel>What she runs for you</SectionLabel>
          <h2 className="font-display mt-4 text-[30px] font-light leading-[1.12] tracking-[-0.01em] md:text-[38px]">
            Six jobs. One prompt each.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink-soft)]">
            Not a chatbot that suggests — an agent that executes. Every capability below works from a
            single text or voice instruction.
          </p>
        </div>

        <div className="mt-14">
          {capabilities.map((c, i) => (
            <div
              key={c.n}
              className={`reveal reveal-d${(i % 3) + 1} group grid gap-4 border-t border-[var(--line)] py-8 transition-colors duration-300 hover:bg-[var(--paper-warm)] md:grid-cols-[90px_1fr_1.4fr] md:gap-10 md:py-10 lg:px-6`}
            >
              <span className="font-mono2 text-[13px] text-[var(--ink-faint)]">{c.n}/</span>
              <h3 className="font-display text-[22px] font-normal leading-snug tracking-[-0.01em] md:text-[24px]">
                {c.title}
              </h3>
              <div>
                <p className="text-[14px] leading-relaxed text-[var(--ink-soft)]">{c.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[11px] font-medium text-[var(--ink-faint)] transition-colors group-hover:border-[var(--lavender-deep)] group-hover:text-[var(--indigo)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

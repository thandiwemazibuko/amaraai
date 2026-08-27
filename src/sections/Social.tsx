import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { SectionLabel } from './shared'

const testimonials = [
  {
    quote:
      'I fired my to-do list, not my standards. Amara sent 31 invoices last month, chased the late ones, and my Monday cash report just appears on WhatsApp.',
    name: 'Tunde Adeyemi',
    role: 'Founder, logistics platform · Lagos',
    initials: 'TA',
  },
  {
    quote:
      'My LinkedIn grew 4x in a quarter and I wrote none of it. She comments in my voice well enough that my own board members can’t tell.',
    name: 'Wanjiru Kamau',
    role: 'Managing Partner, fintech fund · Nairobi',
    initials: 'WK',
  },
  {
    quote:
      'Investors across four time zones, one calendar, zero double-bookings. The prep briefs before every meeting are worth the fee alone.',
    name: 'Efua Mensah',
    role: 'CEO, health-tech · Accra',
    initials: 'EM',
  },
]

const faqs = [
  {
    q: 'Is Amara actually sending money and invoices, or just drafting?',
    a: 'She executes — creates the invoice in your accounting tool, generates the Paystack or Flutterwave link, and sends it. You set the guardrails: above limits you choose, she asks for a one-tap approval first. Every action is logged and reversible.',
  },
  {
    q: 'How does the voice mode work?',
    a: 'Voice is powered by ElevenLabs for lifelike speech in and out, and Claude for reasoning. Send a WhatsApp voice note or talk in the app — she transcribes, acts, and replies by voice or text, whichever you prefer.',
  },
  {
    q: 'Which platforms does she connect to?',
    a: 'Social (WhatsApp, Instagram, X, LinkedIn, TikTok, Facebook), email & calendar (Gmail, Outlook, Google Calendar), CRM (HubSpot, Salesforce, Zoho), accounting (QuickBooks, Xero, Wave) and payments (Paystack, Flutterwave, M-Pesa, Stripe, Moniepoint, Wise). 40+ and growing monthly.',
  },
  {
    q: 'Will she post or comment something off-brand?',
    a: 'Not if you don’t want her to. You approve a voice profile and an engagement playbook once. Sensitive topics, new contacts and anything outside the playbook get escalated to you before she replies.',
  },
  {
    q: 'Is my financial data safe?',
    a: 'Connections use OAuth — Amara never sees your passwords. Data is encrypted in transit and at rest, controls are SOC 2-aligned, and you can revoke any integration or delete your data at any time.',
  },
  {
    q: 'What does setup look like?',
    a: 'About 15 minutes: connect your tools, record a 2-minute voice sample if you want a clone, and answer a few questions about your preferences. Your first agent run usually happens the same hour.',
  },
]

export function Testimonials() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="border-t border-[var(--line)] bg-[var(--paper-warm)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal max-w-2xl">
          <SectionLabel>From the corner offices</SectionLabel>
          <h2 className="font-display mt-4 text-[30px] font-light leading-[1.12] md:text-[38px]">
            Executives who stopped waiting to afford help.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal reveal-d${i + 1} flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(23,20,46,0.07)]`}
            >
              <div>
                <span className="font-display text-[44px] leading-none text-[var(--lavender-deep)]">“</span>
                <blockquote className="-mt-3 text-[14px] leading-relaxed text-[var(--ink)]">{t.quote}</blockquote>
              </div>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-[var(--line)] pt-5">
                <span className="font-mono2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--lavender)] text-[11px] font-medium text-[var(--indigo)]">
                  {t.initials}
                </span>
                <div>
                  <p className="text-[13.5px] font-semibold">{t.name}</p>
                  <p className="text-[12px] text-[var(--ink-faint)]">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  const ref = useReveal<HTMLElement>()
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" ref={ref} className="border-t border-[var(--line)] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-[380px_1fr]">
        <div className="reveal">
          <SectionLabel>Questions</SectionLabel>
          <h2 className="font-display mt-4 text-[30px] font-light leading-[1.12] md:text-[36px]">
            Everything an executive asks before handing over the keys.
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[var(--ink-soft)]">
            Something else on your mind?{' '}
            <a href="#top" className="font-medium text-[var(--indigo)] underline-offset-4 hover:underline">
              Talk to our team
            </a>
            .
          </p>
        </div>
        <div className="reveal reveal-d1">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-t border-[var(--line)] last:border-b">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-[15px] font-medium">{f.q}</span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[15px] transition-all duration-300 ${
                    open === i
                      ? 'rotate-45 border-[var(--indigo)] text-[var(--indigo)]'
                      : 'border-[var(--line)] text-[var(--ink-faint)]'
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: open === i ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 pr-10 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

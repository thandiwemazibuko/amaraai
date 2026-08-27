import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { SectionLabel } from './shared'

type Cur = 'ZAR' | 'USD'

const tiers = [
  {
    name: 'Starter',
    zar: 'R290',
    usd: '$15',
    tagline: 'For the founder doing it all alone.',
    features: [
      '1 connected inbox + calendar',
      'Invoicing & payment links (Paystack)',
      'Social scheduling, 10 posts / mo',
      'Text prompts, 200 / mo',
      'WhatsApp assistant',
    ],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Executive',
    zar: 'R850',
    usd: '$45',
    tagline: 'The full chief of staff. Most popular.',
    features: [
      'Unlimited integrations — all 40+',
      'Unlimited text & voice (ElevenLabs)',
      'Financial Q&A across books & M-Pesa',
      'Social creation + managed commenting',
      'CRM upkeep & meeting booking',
      'Spend guardrails & full audit trail',
    ],
    cta: 'Start 14-day trial',
    featured: true,
  },
  {
    name: 'Office',
    zar: 'R2,200',
    usd: '$120',
    tagline: 'One agent for the whole leadership team.',
    features: [
      'Up to 5 executives, shared context',
      'Multi-entity books & approval chains',
      'Custom voice clone per exec',
      'Dedicated success engineer',
      'Priority support, 7 days a week',
    ],
    cta: 'Talk to us',
    featured: false,
  },
]

export function Pricing() {
  const ref = useReveal<HTMLElement>()
  const [cur, setCur] = useState<Cur>('ZAR')

  return (
    <section id="pricing" ref={ref} className="border-t border-[var(--line)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <SectionLabel>Priced for reality</SectionLabel>
            <h2 className="font-display mt-4 text-[30px] font-light leading-[1.12] md:text-[38px]">
              A human PA in Johannesburg costs R25k a month. Amara doesn’t.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-[var(--line)] bg-white p-1">
              {(['ZAR', 'USD'] as Cur[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCur(c)}
                  className={`rounded-full px-4 py-1.5 text-[12.5px] font-medium transition-colors ${
                    cur === c ? 'bg-[var(--ink)] text-white' : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
                  }`}
                >
                  {c === 'ZAR' ? 'R ZAR' : '$ USD'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-d${i + 1} flex flex-col rounded-2xl border p-7 transition-shadow duration-300 md:p-8 ${
                t.featured
                  ? 'border-[var(--indigo)]/50 bg-[var(--night)] text-white shadow-[0_30px_70px_rgba(23,20,46,0.25)]'
                  : 'border-[var(--line)] bg-white hover:shadow-[0_20px_50px_rgba(23,20,46,0.07)]'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-[20px] font-normal">{t.name}</h3>
                {t.featured && (
                  <span className="rounded-full bg-[var(--indigo)] px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-white">
                    Most popular
                  </span>
                )}
              </div>
              <p className={`mt-1.5 text-[12.5px] ${t.featured ? 'text-white/55' : 'text-[var(--ink-faint)]'}`}>{t.tagline}</p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-[38px] font-light leading-none">{cur === 'ZAR' ? t.zar : t.usd}</span>
                <span className={`text-[12.5px] ${t.featured ? 'text-white/50' : 'text-[var(--ink-faint)]'}`}>/ month</span>
              </div>
              <ul className={`mt-6 flex-1 space-y-2.5 border-t pt-6 text-[13px] leading-relaxed ${t.featured ? 'border-white/10 text-white/75' : 'border-[var(--line)] text-[var(--ink-soft)]'}`}>
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span className={t.featured ? 'text-[var(--mint)]' : 'text-[var(--indigo)]'}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#top"
                className={`mt-8 rounded-full py-2.5 text-center text-[13.5px] font-medium transition-all duration-150 active:scale-[0.98] ${
                  t.featured
                    ? 'bg-white text-[var(--night)] hover:bg-[var(--lavender)]'
                    : 'border border-[var(--line)] text-[var(--ink)] hover:border-[var(--indigo)] hover:text-[var(--indigo)]'
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-[12.5px] text-[var(--ink-faint)]">
          Pay with card, EFT, Paystack or M-Pesa · Cancel anytime · NGN, KES and GHS billing at checkout
        </p>
      </div>
    </section>
  )
}

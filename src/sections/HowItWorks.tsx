import { useReveal } from '@/hooks/useReveal'
import { SectionLabel } from './shared'

const steps = [
  {
    n: '1',
    title: 'Say it or type it',
    body: 'Talk to Amara like a person — on WhatsApp, in the app, or by voice note. ElevenLabs-grade speech turns your words into instructions, in the language and accent you actually use.',
  },
  {
    n: '2',
    title: 'She plans and executes',
    body: 'Claude reasons through the job, breaks it into actions, and calls your connected tools — invoicing in Xero, payment links on Paystack, scheduling on Google Calendar. You watch each step, live.',
  },
  {
    n: '3',
    title: 'You approve what matters',
    body: 'Set your guardrails once: amounts above R500,000 need a yes, new contacts get a confirm, everything else just gets done. Every action is logged, reversible, and auditable.',
  },
]

export function HowItWorks() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="border-t border-[var(--line)] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal max-w-2xl">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="font-display mt-4 text-[30px] font-light leading-[1.12] md:text-[38px]">
            From thought to done, in three moves.
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className={`reveal reveal-d${i + 1} bg-[var(--paper-warm)] p-8 md:p-10`}>
              <span className="font-display text-[44px] font-light leading-none text-[var(--lavender-deep)]">{s.n}</span>
              <h3 className="font-display mt-5 text-[21px] font-normal tracking-[-0.01em]">{s.title}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">{s.body}</p>
            </div>
          ))}
        </div>

        {/* trust strip */}
        <div className="reveal reveal-d2 mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[12.5px] font-medium text-[var(--ink-faint)]">
          {['SOC 2-aligned controls', 'Bank-grade encryption', 'You approve every big spend', 'Full audit trail', 'Delete your data anytime'].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[var(--indigo)]" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

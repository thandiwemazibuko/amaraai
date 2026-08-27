import { useReveal } from '@/hooks/useReveal'
import { integrations, MonoChip, SectionLabel } from './shared'

const stats = [
  { value: '40+', label: 'Platforms connected out of the box' },
  { value: '12 hrs', label: 'Handed back to you every week' },
  { value: '<3 s', label: 'From prompt to agent in motion' },
  { value: '97%', label: 'Cheaper than a full-time assistant' },
]

export function Integrations() {
  const ref = useReveal<HTMLElement>()
  const row1 = integrations.slice(0, 14)
  const row2 = integrations.slice(14)

  return (
    <section id="integrations" ref={ref} className="border-t border-[var(--line)] py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <SectionLabel>One agent, every tool</SectionLabel>
            <h2 className="font-display mt-4 max-w-xl text-[30px] font-light leading-[1.12] tracking-[-0.01em] md:text-[38px]">
              She already speaks the language of your entire stack.
            </h2>
          </div>
          <p className="max-w-sm text-[14.5px] leading-relaxed text-[var(--ink-soft)]">
            Connect once with OAuth. From then on Amara acts across your socials, email, calendar,
            CRM, accounting and payments — with an audit trail for every action.
          </p>
        </div>
      </div>

      {/* marquee */}
      <div className="reveal reveal-d1 marquee-mask mt-12 space-y-3 overflow-hidden">
        <div className="marquee-track gap-3 pr-3">
          {[...row1, ...row1].map((n, i) => (
            <MonoChip key={n + i} name={n} />
          ))}
        </div>
        <div className="marquee-track gap-3 pr-3" style={{ animationDirection: 'reverse', animationDuration: '52s' }}>
          {[...row2, ...row2].map((n, i) => (
            <MonoChip key={n + i} name={n} />
          ))}
        </div>
      </div>

      {/* stats */}
      <div className="mx-auto mt-16 max-w-[1200px] px-6">
        <div className="grid grid-cols-2 gap-y-10 border-t border-[var(--line)] pt-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal reveal-d${i + 1}`}>
              <div className="font-display text-[38px] font-light leading-none text-[var(--indigo)] md:text-[46px]">
                {s.value}
              </div>
              <p className="mt-2.5 max-w-[200px] text-[13px] leading-snug text-[var(--ink-soft)]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

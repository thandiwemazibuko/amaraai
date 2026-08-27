import { useReveal } from '@/hooks/useReveal'

export function Footer() {
  const ref = useReveal<HTMLElement>()
  return (
    <footer ref={ref}>
      {/* CTA */}
      <section className="grain relative overflow-hidden bg-[var(--night)] py-24 text-white md:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(700px 400px at 50% 110%, rgba(84,70,214,0.35), transparent 70%)' }}
        />
        <div className="relative mx-auto max-w-[760px] px-6 text-center">
          <h2 className="reveal font-display text-[36px] font-light leading-[1.08] tracking-[-0.015em] md:text-[56px]">
            Your next hire isn’t a person.{' '}
            <em className="text-[#b9b2e8]" style={{ fontStyle: 'italic' }}>It’s Amara.</em>
          </h2>
          <p className="reveal reveal-d1 mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
            Join the waitlist today. Connect your first tool in 15 minutes and watch your first task
            finish before your coffee does.
          </p>
          <div className="reveal reveal-d2 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#top"
              className="w-full rounded-full bg-white px-7 py-3 text-[14.5px] font-medium text-[var(--night)] transition-all duration-150 hover:bg-[var(--lavender)] active:scale-[0.98] sm:w-auto"
            >
              Get early access
            </a>
            <a
              href="#demo"
              className="w-full rounded-full border border-white/20 px-7 py-3 text-[14.5px] font-medium text-white/85 transition-colors duration-150 hover:bg-white/10 active:scale-[0.98] sm:w-auto"
            >
              Replay the demo
            </a>
          </div>
          <p className="reveal reveal-d3 font-mono2 mt-6 text-[10.5px] uppercase tracking-[0.2em] text-white/35">
            Founding pricing locked for the first 500 executives
          </p>
        </div>
      </section>

      {/* footer */}
      <div className="border-t border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[var(--indigo)]">
                <span className="absolute h-8 w-8 rounded-full border border-[var(--indigo)]/40" style={{ transform: 'scale(1.45)' }} />
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="font-display text-[19px] font-medium">Amara</span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-[var(--ink-faint)]">
              The agentic AI chief of staff for Africa’s executives. Text or voice — she runs the
              rest.
            </p>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-[var(--ink-faint)]">
              A product of <span className="font-medium text-[var(--ink-soft)]">Asande Ventures (Pty) Ltd</span>, Johannesburg, South Africa.
            </p>
            <p className="font-mono2 mt-5 text-[10.5px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
              Johannesburg · Cape Town · Nairobi · Accra · Kigali
            </p>
          </div>
          {[
            { h: 'Product', items: ['Capabilities', 'Integrations', 'Pricing', 'Changelog'] },
            { h: 'Company', items: ['About', 'Careers', 'Press kit', 'Contact'] },
            { h: 'Trust', items: ['Security', 'Privacy', 'Data residency', 'Status'] },
          ].map((col) => (
            <div key={col.h}>
              <p className="font-mono2 text-[10.5px] uppercase tracking-[0.2em] text-[var(--ink-faint)]">{col.h}</p>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((it) => (
                  <li key={it}>
                    <a href="#top" className="text-[13.5px] text-[var(--ink-soft)] transition-colors hover:text-[var(--indigo)]">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[var(--line)]">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-6 py-5 text-[12px] text-[var(--ink-faint)] sm:flex-row">
            <span>© 2026 Asande Ventures (Pty) Ltd · Johannesburg, South Africa</span>
            <span>Voice by ElevenLabs · Reasoning by Claude · Payments via Paystack & Flutterwave</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

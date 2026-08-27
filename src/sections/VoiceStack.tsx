import { useReveal } from '@/hooks/useReveal'
import { SectionLabel } from './shared'

export function VoiceStack() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="border-t border-[var(--line)] bg-[var(--lavender)]/50 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-2">
        <div className="reveal">
          <SectionLabel>The stack under the hood</SectionLabel>
          <h2 className="font-display mt-4 text-[30px] font-light leading-[1.12] md:text-[38px]">
            Speaks like a person. Thinks like a chief of staff.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--ink-soft)]">
            Amara pairs frontier reasoning with lifelike voice, so “run my day” is a sentence — not
            a software tutorial.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="font-mono2 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--lavender-deep)] bg-white text-[11px] font-medium text-[var(--indigo)]">11</span>
              <div>
                <h3 className="text-[15px] font-semibold">ElevenLabs voice</h3>
                <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
                  Natural, low-latency speech in and out. Voice notes from the school run or the
                  airport become executed tasks — and she answers back in a voice you chose.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-mono2 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--lavender-deep)] bg-white text-[11px] font-medium text-[var(--indigo)]">AI</span>
              <div>
                <h3 className="text-[15px] font-semibold">Claude reasoning</h3>
                <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
                  Every instruction is planned by Claude: it decomposes the job, picks the right
                  tools, double-checks amounts and recipients, and asks before it acts on anything
                  that matters.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-mono2 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--lavender-deep)] bg-white text-[11px] font-medium text-[var(--indigo)]">AF</span>
              <div>
                <h3 className="text-[15px] font-semibold">Built for African rails</h3>
                <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
                  Paystack, Flutterwave and M-Pesa natively. Naira, shilling, cedi and rand. WhatsApp
                  first — because that’s where business actually happens.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* voice card */}
        <div className="reveal reveal-d2">
          <div className="rounded-2xl border border-[var(--line)] bg-white p-7 shadow-[0_24px_60px_rgba(23,20,46,0.08)] md:p-9">
            <div className="flex items-center justify-between">
              <span className="font-mono2 text-[10.5px] uppercase tracking-[0.2em] text-[var(--ink-faint)]">Live voice session</span>
              <span className="flex items-center gap-1.5 text-[11.5px] font-medium text-[var(--mint)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)]" /> listening
              </span>
            </div>

            <div className="mt-8 flex h-24 items-center justify-center gap-1">
              {Array.from({ length: 42 }).map((_, i) => {
                const h = 12 + Math.abs(Math.sin(i * 0.55)) * 52
                return (
                  <span
                    key={i}
                    className="wave-bar w-[3px] rounded-full"
                    style={{
                      height: `${h}px`,
                      background: i % 5 === 0 ? 'var(--indigo)' : 'var(--lavender-deep)',
                      animationDelay: `${(i % 12) * 0.09}s`,
                      animationDuration: `${0.8 + (i % 4) * 0.12}s`,
                    }}
                  />
                )
              })}
            </div>

            <div className="mt-8 rounded-xl bg-[var(--paper)] p-4.5" style={{ padding: '18px' }}>
              <p className="text-[13.5px] leading-relaxed text-[var(--ink)]">
                “Amara, reschedule tomorrow’s calls — I’m flying to Kigali at 6. And pay the studio
                invoice if it’s under two hundred thousand.”
              </p>
            </div>
            <div className="mt-4 flex items-start gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--indigo)] text-[10px] font-semibold text-white">A</span>
              <p className="text-[13px] leading-relaxed text-[var(--ink-soft)]">
                Done — three calls moved to Thursday, invites updated. The studio invoice is R186,500,
                under your limit, so I’ve paid it via Paystack and filed the receipt in Drive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

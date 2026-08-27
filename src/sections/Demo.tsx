import { useEffect, useRef, useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { SectionLabel } from './shared'

/* ---------------- scripted scenarios ---------------- */

type Step = { label: string; detail: string }
type Result = { title: string; badge: string; rows: [string, string][]; foot: string }
type Scenario = { id: string; chip: string; prompt: string; steps: Step[]; result: Result }

const scenarios: Scenario[] = [
  {
    id: 'invoice',
    chip: 'Send an invoice',
    prompt: 'Invoice Chidi at Bloom Realty R850,000 for the Q3 retainer, due in 14 days.',
    steps: [
      { label: 'Claude reasons', detail: 'Parsed client, amount, terms · matched contact “Chidi Okonkwo — Bloom Realty”' },
      { label: 'QuickBooks', detail: 'Draft invoice #1042 created · VAT applied per your template' },
      { label: 'Paystack', detail: 'Payment link generated · split settlement to FNB R account' },
      { label: 'WhatsApp', detail: 'Sent to Chidi with polite cover note in your tone' },
    ],
    result: {
      title: 'Invoice #1042 sent',
      badge: 'Awaiting payment',
      rows: [
        ['Client', 'Chidi Okonkwo — Bloom Realty'],
        ['Amount', 'R850,000'],
        ['Due', '14 days · auto-reminder on day 10'],
        ['Payment link', 'paystack.com/pay/…1042'],
      ],
      foot: 'I’ll nudge him politely if it’s unpaid by day 10, and reconcile the books the moment it lands.',
    },
  },
  {
    id: 'cash',
    chip: 'Check cash position',
    prompt: 'What’s my cash position right now, and what’s overdue?',
    steps: [
      { label: 'Claude reasons', detail: 'Intent: liquidity snapshot · sources: accounting + payments' },
      { label: 'Xero', detail: 'Ledger synced · receivables & payables pulled' },
      { label: 'M-Pesa + Paystack', detail: 'Settlement balances aggregated across rails' },
      { label: 'ElevenLabs', detail: 'Summary read aloud in your preferred voice' },
    ],
    result: {
      title: 'Cash position — today',
      badge: 'Live from your books',
      rows: [
        ['Available across accounts', 'R4,215,300'],
        ['Overdue receivables', 'R1,640,000 · 3 invoices'],
        ['Bills due this week', 'R610,500'],
        ['Runway at current burn', '4.2 months'],
      ],
      foot: 'The biggest overdue is Bloom Realty at R850,000 — want me to send a reminder now?',
    },
  },
  {
    id: 'social',
    chip: 'Post to socials',
    prompt: 'Turn my keynote points from Nairobi into a LinkedIn post and an X thread for tomorrow morning.',
    steps: [
      { label: 'Claude reasons', detail: 'Source: keynote notes in Google Drive · tone: your voice profile' },
      { label: 'Content draft', detail: 'LinkedIn post (210 words) + 6-post X thread written' },
      { label: 'LinkedIn + X', detail: 'Scheduled 8:30 AM EAT · best-window analysis applied' },
      { label: 'Engagement watch', detail: 'Will reply to early comments per your playbook' },
    ],
    result: {
      title: 'Content scheduled',
      badge: 'Goes live 8:30 AM EAT',
      rows: [
        ['LinkedIn', '“Three things Nairobi taught me about scaling…”'],
        ['X thread', '6 posts · hook score 8.4/10'],
        ['Hashtags', '#AfricanTech #BuildInPublic + 3 niche'],
        ['Auto-engage', 'First-hour replies enabled'],
      ],
      foot: 'Drafts are in your review queue — say “approve” and I’ll handle the rest, comments included.',
    },
  },
  {
    id: 'meeting',
    chip: 'Book a meeting',
    prompt: 'Get 30 minutes with Amina from the fund next week. She’s in London, I’m in Accra.',
    steps: [
      { label: 'Claude reasons', detail: 'Participants, duration, constraints · timezone: GMT/GMT overlap' },
      { label: 'Google + Outlook', detail: 'Both calendars scanned · 4 mutual slots found' },
      { label: 'Email', detail: 'Amina received 3 options in a thread she can answer in one tap' },
      { label: 'Confirmed', detail: 'Tue 10:00 GMT · Meet link attached · reminder set' },
    ],
    result: {
      title: 'Meeting booked',
      badge: 'Tue · 10:00 GMT',
      rows: [
        ['With', 'Amina Yusuf — Kestrel Fund'],
        ['Duration', '30 min · Google Meet'],
        ['Prep brief', 'Her fund’s last 3 memos, summarized'],
        ['Reminder', 'You: 9:40 AM · Amina: day before'],
      ],
      foot: 'I’ll have a one-page brief on her portfolio in your inbox the evening before.',
    },
  },
]

/* ---------------- typing console ---------------- */

type Phase = 'idle' | 'prompt' | 'thinking' | 'steps' | 'result'

export function Demo() {
  const ref = useReveal<HTMLElement>()
  const [activeId, setActiveId] = useState('invoice')
  const [mode, setMode] = useState<'voice' | 'text'>('voice')
  const [phase, setPhase] = useState<Phase>('idle')
  const [typed, setTyped] = useState('')
  const [visibleSteps, setVisibleSteps] = useState(0)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const scenario = scenarios.find((s) => s.id === activeId)!

  const clear = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  const later = (fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms))
  }

  const run = (sc: Scenario) => {
    clear()
    setPhase('prompt')
    setTyped('')
    setVisibleSteps(0)
    // type the prompt
    const chars = sc.prompt.length
    for (let i = 1; i <= chars; i++) {
      later(() => setTyped(sc.prompt.slice(0, i)), 26 * i)
    }
    const afterPrompt = 26 * chars + 250
    later(() => setPhase('thinking'), afterPrompt)
    later(() => setPhase('steps'), afterPrompt + 900)
    sc.steps.forEach((_, i) => {
      later(() => setVisibleSteps(i + 1), afterPrompt + 900 + 700 * (i + 1))
    })
    later(() => setPhase('result'), afterPrompt + 900 + 700 * sc.steps.length + 500)
  }

  /* autoplay when section scrolls into view */
  const sectionRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run(scenarios[0])
          io.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => clear, [])

  const pick = (id: string) => {
    setActiveId(id)
    run(scenarios.find((s) => s.id === id)!)
  }

  const listening = phase === 'prompt' && mode === 'voice'

  return (
    <section
      id="demo"
      ref={(el) => {
        ;(ref as React.MutableRefObject<HTMLElement | null>).current = el
        sectionRef.current = el
      }} className="grain relative overflow-hidden border-t border-[var(--line)] bg-[var(--night)] py-20 text-white md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(760px 480px at 80% 0%, rgba(84,70,214,0.22), transparent 65%)' }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="reveal max-w-2xl">
          <SectionLabel dark>See her work</SectionLabel>
          <h2 className="font-display mt-4 text-[30px] font-light leading-[1.12] tracking-[-0.01em] md:text-[38px]">
            One prompt. Watch the agent run.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60">
            A scripted preview of the Amara console — the same flow you’d get by text or voice.
            Pick a job and watch her plan, call your tools, and report back.
          </p>
        </div>

        <div className="reveal reveal-d1 mt-10 grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* left rail: scenario chips + mode */}
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            <div className="mb-0 hidden lg:mb-2 lg:block">
              <p className="font-mono2 text-[10.5px] uppercase tracking-[0.2em] text-white/40">Try a job</p>
            </div>
            {scenarios.map((s) => (
              <button
                key={s.id}
                onClick={() => pick(s.id)}
                className={`shrink-0 rounded-xl border px-4 py-3 text-left text-[13.5px] font-medium transition-all duration-200 lg:w-full ${
                  activeId === s.id
                    ? 'border-[var(--indigo)] bg-[var(--indigo)]/20 text-white'
                    : 'border-white/10 bg-white/[0.03] text-white/55 hover:border-white/25 hover:text-white/85'
                }`}
              >
                {s.chip}
              </button>
            ))}

            <div className="hidden lg:mt-6 lg:block">
              <p className="font-mono2 mb-2 text-[10.5px] uppercase tracking-[0.2em] text-white/40">Input mode</p>
              <div className="flex rounded-full border border-white/10 bg-white/[0.03] p-1">
                {(['voice', 'text'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`flex-1 rounded-full px-3 py-1.5 text-[12px] font-medium capitalize transition-colors ${
                      mode === m ? 'bg-white text-[var(--night)]' : 'text-white/55 hover:text-white'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-[11.5px] leading-relaxed text-white/35">
                {mode === 'voice'
                  ? 'Voice captured & transcribed, then spoken back by ElevenLabs.'
                  : 'Same agent, typed. Every step is logged and reversible.'}
              </p>
            </div>
          </div>

          {/* console */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--night-2)]/80 shadow-[0_40px_90px_rgba(0,0,0,0.45)]">
            {/* chrome */}
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
              </div>
              <span className="font-mono2 text-[10.5px] uppercase tracking-[0.2em] text-white/35">
                amara console · {mode === 'voice' ? 'voice' : 'text'} · claude opus
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-white/45">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)]" /> online
              </span>
            </div>

            <div className="space-y-5 p-5 md:p-7" style={{ minHeight: '430px' }}>
              {/* prompt bubble */}
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-[var(--indigo)] px-4.5 py-3 text-[14px] leading-relaxed" style={{ paddingLeft: '18px', paddingRight: '18px' }}>
                  {mode === 'voice' && (
                    <div className="mb-2 flex h-5 items-center gap-[3px]">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <span
                          key={i}
                          className={`wave-bar w-[2.5px] rounded-full bg-white/85 ${listening ? '' : 'wave-idle'}`}
                          style={{ height: `${8 + ((i * 37) % 12)}px`, animationDelay: `${i * 0.07}s` }}
                        />
                      ))}
                    </div>
                  )}
                  <span>
                    {typed}
                    {phase === 'prompt' && <span className="caret ml-0.5 inline-block h-[15px] w-[2px] translate-y-[2px] bg-white" />}
                  </span>
                  {mode === 'voice' && typed.length > 0 && (
                    <p className="font-mono2 mt-1.5 text-[9.5px] uppercase tracking-[0.18em] text-white/55">
                      transcribed · elevenlabs speech-to-text
                    </p>
                  )}
                </div>
              </div>

              {/* thinking */}
              {(phase === 'thinking' || phase === 'steps' || phase === 'result') && (
                <div className="step-in flex items-center gap-2.5 text-[13px] text-white/50">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--indigo)]/25 text-[11px]">A</span>
                  {phase === 'thinking' ? (
                    <span className="flex items-center gap-1.5">
                      Amara is planning
                      <span className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <span key={i} className="dot-bounce h-1 w-1 rounded-full bg-white/60" style={{ animationDelay: `${i * 0.18}s` }} />
                        ))}
                      </span>
                    </span>
                  ) : (
                    <span className="text-white/40">Plan ready — executing {scenario.steps.length} actions</span>
                  )}
                </div>
              )}

              {/* steps */}
              <div className="space-y-2.5">
                {scenario.steps.slice(0, visibleSteps).map((s, i) => (
                  <div key={s.label + i} className="step-in flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    <span className="check-pop mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[var(--mint)]/20 text-[10px] text-[var(--mint)]" style={{ height: '18px', width: '18px' }}>
                      ✓
                    </span>
                    <div>
                      <p className="font-mono2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#b9b2e8]">{s.label}</p>
                      <p className="mt-0.5 text-[12.5px] leading-relaxed text-white/55">{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* result card */}
              {phase === 'result' && (
                <div className="step-in rounded-xl border border-[var(--indigo)]/40 bg-gradient-to-b from-[var(--indigo)]/15 to-transparent p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-display text-[19px] font-normal">{scenario.result.title}</h4>
                    <span className="flex items-center gap-1.5 rounded-full border border-[var(--mint)]/30 bg-[var(--mint)]/10 px-2.5 py-1 text-[10.5px] font-medium text-[var(--mint)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)]" />
                      {scenario.result.badge}
                    </span>
                  </div>
                  <div className="mt-4 divide-y divide-white/8">
                    {scenario.result.rows.map(([k, v]) => (
                      <div key={k} className="flex items-start justify-between gap-4 py-2 text-[13px]">
                        <span className="text-white/45">{k}</span>
                        <span className="text-right font-medium text-white/90">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 border-t border-white/8 pt-3 text-[12.5px] italic leading-relaxed text-white/55">
                    “{scenario.result.foot}”
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="reveal mt-6 text-center text-[12px] text-white/30">
          Scripted preview — in the live product these actions execute against your real connected accounts, always with an audit trail.
        </p>
      </div>
    </section>
  )
}

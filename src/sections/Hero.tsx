
/* Orbit node positioning: parent ring rotates, node counter-rotates to stay upright */
function OrbitNode({
  angle,
  radius,
  reverse = false,
  name,
}: {
  angle: number
  radius: number
  reverse?: boolean
  name: string
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ transform: `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)` }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <div className={reverse ? 'orbit-node-rev' : 'orbit-node'}>
          <div className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-[11px] font-medium text-[var(--ink-soft)] shadow-[0_8px_24px_rgba(23,20,46,0.08)]">
            {name}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const ring1 = ['WhatsApp', 'Paystack', 'Gmail', 'LinkedIn']
  const ring2 = ['Xero', 'HubSpot', 'Instagram', 'M-Pesa', 'Outlook', 'Flutterwave']

  return (
    <section id="top" className="relative overflow-hidden pt-36 md:pt-44">
      {/* soft radial wash */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px]"
        style={{ background: 'radial-gradient(720px 420px at 50% 8%, rgba(84,70,214,0.10), transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="hero-in hero-in-1 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3.5 py-1.5 text-[12px] font-medium text-[var(--ink-soft)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)]" />
            Powered by Claude · Voice by ElevenLabs
          </div>

          <h1 className="hero-in hero-in-2 font-display mt-6 text-[42px] font-light leading-[1.06] tracking-[-0.015em] text-[var(--ink)] sm:text-[58px] md:text-[68px]">
            Every executive deserves a{' '}
            <em className="font-light not-italic text-[var(--indigo)]" style={{ fontStyle: 'italic' }}>
              chief of staff
            </em>
            . Now yours fits in your pocket.
          </h1>

          <p className="hero-in hero-in-3 mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--ink-soft)] md:text-[17px]">
            Amara is a fully agentic AI personal assistant. Say it or type it — she creates and
            sends invoices, pulls your numbers, runs your socials, books your meetings and keeps
            your CRM honest. Built for African executives, priced for reality.
          </p>

          <div className="hero-in hero-in-4 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="w-full rounded-full bg-[var(--indigo)] px-7 py-3 text-[14.5px] font-medium text-white transition-all duration-150 hover:bg-[var(--indigo-deep)] active:scale-[0.98] sm:w-auto"
            >
              Start free — no card required
            </a>
            <a
              href="#demo"
              className="w-full rounded-full border border-[var(--line)] bg-white px-7 py-3 text-[14.5px] font-medium text-[var(--ink)] transition-colors duration-150 hover:border-[var(--lavender-deep)] hover:bg-[var(--lavender)] active:scale-[0.98] sm:w-auto"
            >
              Watch her work ↓
            </a>
          </div>

          <p className="hero-in hero-in-4 font-mono2 mt-5 text-[11px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
            Text or voice · English, French, Swahili, Yorùbá, Hausa, Igbo
          </p>
        </div>

        {/* ---------- orbit visual ---------- */}
        <div className="relative mx-auto mt-10 flex justify-center pb-4 md:mt-4">
          <div className="relative h-[380px] w-[380px] origin-center scale-[0.72] sm:h-[520px] sm:w-[520px] sm:scale-[0.85] lg:scale-100">
            {/* rings */}
            <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--lavender-deep)]/80" />
            <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--lavender-deep)]/70" />
            <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--lavender)]" />

            {/* rotating ring groups */}
            <div className="orbit-ring-1 absolute inset-0">
              {ring1.map((n, i) => (
                <OrbitNode key={n} name={n} angle={i * 90 + 30} radius={170} />
              ))}
            </div>
            <div className="orbit-ring-2 absolute inset-0">
              {ring2.map((n, i) => (
                <OrbitNode key={n} name={n} angle={i * 60 + 8} radius={240} reverse />
              ))}
            </div>

            {/* core */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="core-pulse flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[var(--indigo)] text-white shadow-[0_18px_50px_rgba(84,70,214,0.4)]">
                <span className="font-display text-[17px] font-medium leading-none">Amara</span>
                <span className="font-mono2 mt-1 text-[8.5px] uppercase tracking-[0.2em] text-white/70">agent online</span>
              </div>
            </div>

            {/* floating status card — evidence, not decoration */}
            <div className="float-y absolute -right-4 top-16 hidden rounded-xl border border-[var(--line)] bg-white/90 p-3.5 shadow-[0_16px_40px_rgba(23,20,46,0.10)] backdrop-blur sm:block lg:-right-16">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--mint)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--mint)]" />
                </span>
                <span className="text-[12px] font-semibold">Invoice #1042 paid</span>
              </div>
              <p className="mt-1 text-[11.5px] text-[var(--ink-faint)]">R850,000 via Paystack · just now</p>
            </div>
            <div className="float-y absolute -left-4 bottom-16 hidden rounded-xl border border-[var(--line)] bg-white/90 p-3.5 shadow-[0_16px_40px_rgba(23,20,46,0.10)] backdrop-blur sm:block lg:-left-16" style={{ animationDelay: '1.6s' }}>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--indigo)] opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--indigo)]" />
                </span>
                <span className="text-[12px] font-semibold">Meeting booked</span>
              </div>
              <p className="mt-1 text-[11.5px] text-[var(--ink-faint)]">Tue 10:00 EAT · Google + Outlook synced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

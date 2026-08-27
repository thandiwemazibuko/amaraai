import { useEffect, useState } from 'react'

const links = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Live demo', href: '#demo' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-[var(--line)]/70 bg-[var(--paper)]">
        <p className="font-mono2 mx-auto max-w-[1200px] px-6 py-1.5 text-center text-[11px] tracking-[0.14em] text-[var(--ink-soft)]">
          EARLY ACCESS — FIRST 500 EXECUTIVES GET FOUNDING PRICING, FOREVER
        </p>
      </div>
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-[var(--line)] bg-[rgba(246,245,250,0.82)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[var(--indigo)]">
              <span className="absolute h-8 w-8 rounded-full border border-[var(--indigo)]/40" style={{ transform: 'scale(1.45)' }} />
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-display text-[20px] font-medium tracking-tight">Amara</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13.5px] font-medium text-[var(--ink-soft)] transition-colors duration-150 hover:text-[var(--ink)]"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#demo" className="text-[13.5px] font-medium text-[var(--ink-soft)] hover:text-[var(--ink)]">
              Sign in
            </a>
            <a
              href="#pricing"
              className="rounded-full bg-[var(--ink)] px-4.5 py-2 text-[13.5px] font-medium text-white transition-colors duration-150 hover:bg-[var(--indigo)]"
              style={{ paddingLeft: '18px', paddingRight: '18px' }}
            >
              Get early access
            </a>
          </div>

          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`h-px w-5 bg-[var(--ink)] transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`h-px w-5 bg-[var(--ink)] transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </button>
        </nav>

        {open && (
          <div className="border-t border-[var(--line)] bg-[var(--paper)] px-6 py-4 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[15px] font-medium text-[var(--ink-soft)]"
              >
                {l.label}
              </a>
            ))}
            <a href="#pricing" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-[var(--ink)] py-2.5 text-center text-[14px] font-medium text-white">
              Get early access
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

'use client'
import { useState } from 'react'
import Link from 'next/link'
import VivaSendLogo from './VivaSendLogo'

const NAV_LINKS = [
  { label: 'Galimybės', href: '#features' },
  { label: 'Kainos',    href: '#pricing'  },
  { label: 'Klientai',  href: '#clients'  },
  { label: 'Tinklaraštis', href: 'https://vivasend.lt/tinklarastis/', external: true },
  { label: 'Kontaktai', href: 'https://vivasend.lt/kontaktai/', external: true },
]

const REGISTER_URL =
  'https://auth.sender.net/register?scope=scope&client_id=22&response_type=code&redirect_uri=https://app.vivasend.com/'
const LOGIN_URL =
  'https://auth.sender.net/oauth/login?scope=scope&client_id=22&response_type=code&redirect_uri=https%3A%2F%2Fapp.vivasend.com%2F'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[68px] bg-bg/85 backdrop-blur-xl border-b border-vs-border">
        <Link href="/" className="flex items-center">
          <VivaSendLogo className="h-7 w-auto" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              {l.external ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vs-muted hover:text-vs-text text-sm transition-colors"
                >
                  {l.label}
                </a>
              ) : (
                <a href={l.href} className="text-vs-muted hover:text-vs-text text-sm transition-colors">
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm border border-vs-border2 rounded-lg text-vs-text hover:border-orange hover:text-orange transition-all"
          >
            Prisijungti
          </a>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm bg-orange text-white rounded-lg font-medium hover:bg-orange-dark transition-all hover:-translate-y-0.5"
          >
            Registruotis nemokamai
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Meniu"
        >
          <span className={`block w-[22px] h-[2px] bg-vs-text rounded transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-vs-text rounded transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-vs-text rounded transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-[68px] left-0 right-0 z-40 bg-bg/97 backdrop-blur-xl border-b border-vs-border px-[5%] py-6 flex flex-col gap-5 md:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
              className="text-vs-muted hover:text-vs-text text-base transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2.5 mt-2">
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm border border-vs-border2 rounded-lg text-vs-text text-center"
            >
              Prisijungti
            </a>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm bg-orange text-white rounded-lg font-medium text-center"
            >
              Registruotis nemokamai
            </a>
          </div>
        </div>
      )}
    </>
  )
}

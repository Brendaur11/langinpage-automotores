import { useState } from 'react'
import { waLink } from '../data'

const NAV_LINKS = [
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Vehículos', id: 'usados' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Testimonios', id: 'testimonios' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="font-display text-2xl font-extrabold text-white tracking-tight"
          >
            SOMOS <span className="text-primary">AUTO.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-gray-400 hover:text-white text-sm font-medium uppercase tracking-widest transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href={waLink('Hola Automotores! Quiero consultar sobre los vehículos disponibles.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white text-sm font-bold px-5 py-2 rounded transition-colors font-display tracking-wide uppercase"
            >
              Consultar ahora
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-[#111] border-b border-primary/20 flex flex-col p-6 gap-4 lg:hidden">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-gray-400 hover:text-white text-left text-base font-medium py-2 border-b border-gray-800 last:border-0 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href={waLink('Hola Automotores! Quiero consultar por WhatsApp.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold"
          >
            📱 Consultar por WhatsApp
          </a>
        </div>
      )}
    </>
  )
}

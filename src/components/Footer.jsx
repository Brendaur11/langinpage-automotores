import { Car, Mail, MapPin, Phone } from 'lucide-react'
import { waLink } from '../data'

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display text-xl font-extrabold text-white mb-3">
              SOMOS <span className="text-primary">AUTO.</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Tu próximo auto está acá. Comprá con confianza, financiación propia y entrega el mismo día.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Navegación</h4>
            <ul className="flex flex-col gap-2.5">
              {[['nosotros','Nosotros'],['usados','Vehículos'],['servicios','Servicios'],['testimonios','Testimonios']].map(([id,label]) => (
                <li key={id}>
                  <button onClick={() => scrollTo(id)} className="text-sm hover:text-white transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Contacto</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href={waLink('Hola!')} target="_blank" className="hover:text-white transition-colors"><Phone className="inline mr-2" /> WhatsApp</a></li>
              <li><a href="mailto:info@automotores.com.ar" className="hover:text-white transition-colors"><Mail className="inline mr-2" /> info@automotores.com.ar</a></li>
              <li><span><MapPin className="inline mr-2" /> Av. Siempreviva 742</span></li>
              <li><a href="tel:+5491112345678" className="hover:text-white transition-colors"><Phone className="inline mr-2" /> +54 9 11 1234-5678</a></li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Horarios</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>Lun – Vie: 9:00 a 18:00 hs</li>
              <li>Sábados: 9:00 a 13:00 hs</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-wrap justify-between gap-3 text-xs">
          <span>© 2025 <span className="text-primary">Automotores</span>. Todos los derechos reservados.</span>
          <span className="text-gray-600">Diseñado para convertir vehículos</span>
        </div>
      </div>
    </footer>
  )
}

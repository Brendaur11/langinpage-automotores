import SectionHeader from '../components/SectionHeader'
import AutoCard from '../components/AutoCard'
import { AUTOS_USADOS, waLink } from '../data'
import { Phone } from 'lucide-react'

export default function AutosUsados() {
  return (
    <section id="usados" className="bg-gray-50 py-24 px-6 section-scroll-margin">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Nuestro stock"
          title="Vehículos disponibles"
          subtitle="Todos revisados, con historial y garantía. Stock actualizado semanalmente."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {AUTOS_USADOS.map((auto) => (
            <AutoCard key={auto.id} auto={auto} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={waLink('Hola! Quiero ver el stock completo de vehículos disponibles en Automotores.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-display font-bold uppercase tracking-wide px-8 py-4 rounded transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,53,39,0.35)]"
          >
            <Phone className="w-5 h-5" /> Ver stock completo por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

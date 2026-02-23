import { Phone } from 'lucide-react'
import { waLink } from '../data'

export default function CTAFinal() {
  return (
    <section id="contacto" className="relative bg-primary py-24 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/15 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-display text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          ¿Listo para manejar tu próximo auto?
        </h2>
        <p className="text-white/85 text-lg mb-10">
          Hablá con nosotros hoy. Sin turnos, sin esperas.
          Respondemos al instante por WhatsApp.
        </p>
        <a
          href={waLink('Hola Automotores! Quiero consultar sobre los vehículos disponibles y opciones de financiación.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 font-display font-extrabold uppercase tracking-wide text-lg px-10 py-4 rounded transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
        >
          <Phone className="inline mr-2" /> Escribinos ahora — Es gratis
        </a>
        <p className="text-white/60 text-sm mt-5">
          Respondemos en menos de 5 minutos en horario comercial.
        </p>
      </div>
    </section>
  )
}

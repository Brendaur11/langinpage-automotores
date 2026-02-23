import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { Building, ClipboardCheck, Clock, Handshake, MapPin } from 'lucide-react'

const PILLARS = [
  { icon: MapPin, title: 'Ubicación central', desc: 'En el corazón de la ciudad, fácil acceso.' },
  { icon: Handshake, title: 'Trato personalizado', desc: 'Sin presión. Tu tiempo, tu decisión.' },
  { icon: ClipboardCheck, title: 'Transparencia total', desc: 'Historial y peritaje disponibles siempre.' },
  { icon: Clock, title: 'Gestión express', desc: 'Trámites y entrega el mismo día.' },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-white py-24 px-6 section-scroll-margin">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            tag="Quiénes somos"
            title={<>Más de 15 años<br />moviendo confianza</>}
            subtitle="Automotores nació con una misión clara: hacerle fácil la compra de un auto a cada persona. Sin letra chica, sin sorpresas, con asesoramiento de verdad."
          />
          <div className="grid grid-cols-2 gap-4 mt-10">
            {PILLARS.map((p, i) => {
              const Icon = p.icon

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-5 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="mb-2">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-bold text-base mb-1">{p.title}</h4>
                  <p className="text-sm text-gray-400">{p.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-[16/10] rounded-xl bg-gray-100 flex flex-col items-center justify-center gap-4 text-gray-400"
        >
          <div className="text-7xl"><Building className='w-4 h-4'></Building></div>
          <p className="text-sm">Automotores — Est. 2009</p>
        </motion.div>
      </div>
    </section>
  )
}

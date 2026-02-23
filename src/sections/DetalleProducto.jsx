import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { AUTO_DETALLE, waLink } from '../data'
import { Car, Phone } from 'lucide-react'

export default function DetalleProducto() {
  const [activeThumb, setActiveThumb] = useState(0)
  const d = AUTO_DETALLE
  const msgConsulta = `Hola Automotores! Me interesa la ${d.nombre} ${d.anio}. ¿Podrían darme más información?`
  const msgTestDrive = `Hola! Quiero coordinar un test drive de la ${d.nombre} ${d.anio}.`

  return (
    <section id="detalle" className="bg-white py-24 px-6 section-scroll-margin">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <SectionHeader tag="Destacado" title="Vehículo del mes" />
        </div>

        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          {/* Gallery */}
          <div className="bg-[#111] p-4 space-y-3">
            <motion.div
              key={activeThumb}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg flex items-center justify-center text-8xl"
            >
              {d.emojis[activeThumb]}
            </motion.div>
            <div className="grid grid-cols-4 gap-2">
              {d.emojis.map((e, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`aspect-[4/3] bg-[#222] rounded-md flex items-center justify-center text-2xl transition-opacity ${
                    activeThumb === i ? 'opacity-100 ring-2 ring-primary' : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="p-6 lg:p-10">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="font-display text-3xl font-extrabold">{d.nombre}</h3>
                <p className="text-gray-400 text-sm mt-1">{d.anio} · {d.km}</p>
              </div>
              <div className="font-display text-4xl font-extrabold text-primary">{d.precio}</div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">{d.desc}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {d.specs.map((s, i) => {
                const Icon = s.icon
                return (
                  <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <span className="text-xl text-red-500"><Icon /></span>
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wide">{s.label}</div>
                      <div className="text-sm font-semibold">{s.val}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={waLink(msgConsulta)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] text-center bg-primary hover:bg-primary-dark text-white font-display font-bold uppercase tracking-wide px-6 py-3.5 rounded transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,53,39,0.35)]"
              >
                <Phone className="inline mr-2" /> Consultar por WhatsApp
              </a>
              <a
                href={waLink(msgTestDrive)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] text-center border border-gray-300 hover:border-primary text-dark font-display font-bold uppercase tracking-wide px-6 py-3.5 rounded transition-all"
              >
                <Car className="inline mr-2" /> Pedir test drive
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

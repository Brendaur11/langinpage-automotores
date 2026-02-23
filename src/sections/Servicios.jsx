import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { SERVICIOS } from '../data'

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white py-24 px-6 section-scroll-margin">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Lo que hacemos"
          title="Servicios"
          subtitle="Todo lo que necesitás en un solo lugar."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          {SERVICIOS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-start gap-5 p-6 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/[0.02] transition-all"
            >
              <span className="font-display text-3xl font-extrabold text-primary/30 min-w-[2rem] leading-none mt-0.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold mb-1">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

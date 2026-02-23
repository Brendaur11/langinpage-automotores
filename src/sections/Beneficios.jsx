import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { BENEFICIOS } from '../data'

export default function Beneficios() {
  return (
    <section id="beneficios" className="bg-[#111] py-24 px-6 section-scroll-margin">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionHeader
            tag="¿Por qué elegirnos?"
            title="Lo que nos hace distintos"
            subtitle="Comprás un auto. Nosotros te damos tranquilidad."
            light
            center
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFICIOS.map((b, i) => {
            const Icon = b.icon
            return(
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-7 hover:border-primary hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center text-xl mb-5">
                  <Icon className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

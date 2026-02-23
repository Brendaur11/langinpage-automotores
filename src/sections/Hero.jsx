import { motion } from 'framer-motion'
import { waLink } from '../data'
import { Smartphone } from 'lucide-react'
// import auto from '../assets/img/auto.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#0a0a0a] pt-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0805] to-[#0a0a0a]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#d43527 1px, transparent 1px), linear-gradient(90deg, #d43527 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <div>
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary-light px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            Stock disponible hoy
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="font-display text-6xl md:text-8xl font-extrabold text-white leading-[0.95] tracking-tight mb-6">
            Tu próximo<br />auto te<br />espera <span className="text-primary">acá.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
            0km y usados seleccionados. Financiación propia, sin banco, sin vueltas.
            Comprá con confianza y retirá el mismo día.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
            <a
              href={waLink('Hola Automotores! Quiero ver los vehículos disponibles y consultar financiación.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-display font-bold text-base uppercase tracking-wide px-7 py-3.5 rounded transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,53,39,0.35)]"
            >
              <Smartphone className="w-4 h-4" /> Ver catálogo en WhatsApp
            </a>
            <button
              onClick={() => scrollTo('usados')}
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white text-white font-display font-bold text-base uppercase tracking-wide px-7 py-3.5 rounded transition-all hover:bg-white/5"
            >
              Ver vehículos ↓
            </button>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="flex gap-10 mt-10">
            {[
              { num: '+300', label: 'Autos vendidos' },
              { num: '15', label: 'Años en el rubro' },
              { num: '98%', label: 'Satisfacción' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-extrabold text-white">
                  <span className="text-primary">{s.num}</span>
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center text-[8rem]">
            {/* <img src="" alt="Auto" /> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

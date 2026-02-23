import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { TESTIMONIOS } from '../data'

export default function Testimonios() {
  const [current, setCurrent] = useState(0)
  const total = TESTIMONIOS.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  const t = TESTIMONIOS[current]

  return (
    <section id="testimonios" className="bg-[#111] py-24 px-6 section-scroll-margin">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <SectionHeader
            tag="Lo que dicen"
            title="Clientes que confiaron en nosotros"
            subtitle="Más de 300 familias ya eligieron Automotores."
            light
            center
          />
        </div>

        {/* Carousel */}
        <div className="relative min-h-[280px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-2xl p-8 md:p-10 text-center"
            >
              <div className="text-yellow-400 text-xl mb-5">★★★★★</div>
              <p className="text-white text-lg leading-relaxed italic mb-8">"{t.texto}"</p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-display font-bold text-white text-base">
                  {t.inicial}
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">{t.nombre}</div>
                  <div className="text-sm text-gray-400">{t.detalle}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center text-white transition-colors"
          >
            ←
          </button>
          <div className="flex gap-2">
            {TESTIMONIOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-gray-700'}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center text-white transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

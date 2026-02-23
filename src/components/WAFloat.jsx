import { waLink } from '../data'

export default function WAFloat() {
  return (
    <a
      href={waLink('Hola Automotores! Quisiera consultar sobre sus vehículos.')}
      target="_blank"
      rel="noopener noreferrer"
      title="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center text-2xl shadow-lg shadow-[#25d366]/40 hover:scale-110 transition-transform animate-pulse"
    >
      💬
    </a>
  )
}

import { waLink } from '../data'
import {
  Fuel,
  Settings,
  DoorOpen,
  Gauge,
  Smartphone,
  GaugeCircle,
  DoorOpenIcon,
  SettingsIcon,
  FuelIcon
} from 'lucide-react'

export default function AutoCard({ auto }) {
  const msg = `Hola Automotores! Me interesa el ${auto.nombre} ${auto.anio} (${auto.km}). ¿Sigue disponible?`

  return (
    <article className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary transition-all duration-300 cursor-pointer group">

      {/* Image placeholder */}
      <div className="relative aspect-[16/10] bg-gradient-to-br from-[#1a1a1a] to-[#111] flex items-center justify-center">
        
        {/* Badge */}
        <span
          className={`absolute top-3 left-3 text-xs font-bold px-2 py-0.5 rounded text-white uppercase tracking-wide ${
            auto.tipo === '0km' ? 'bg-green-600' : 'bg-primary'
          }`}
        >
          {auto.tipo === '0km' ? '0 KM' : 'Usado'}
        </span>

        {/* Icono auto en vez de emoji */}
        <GaugeCircle className="w-16 h-16 text-white/30 group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-display text-xl font-extrabold">
          {auto.nombre}
        </h3>

        <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
          <GaugeCircle className="w-4 h-4" />
          {auto.anio} · {auto.km}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-500">

          <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded">
            <FuelIcon className="w-4 h-4 text-primary" />
            {auto.combustible}
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded">
            <SettingsIcon className="w-4 h-4 text-primary" />
            {auto.transmision}
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded col-span-2">
            <DoorOpenIcon className="w-4 h-4 text-primary" />
            {auto.puertas}
          </div>

        </div>

        {/* Precio */}
        <p className="font-display text-2xl font-extrabold text-primary mb-4">
          {auto.precio}
        </p>

        {/* Botón */}
        <a
          href={waLink(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-display font-bold text-sm uppercase tracking-wide py-3 rounded transition-all duration-300 hover:-translate-y-0.5"
        >
          <Smartphone className="w-4 h-4" />
          Consultar
        </a>

      </div>
    </article>
  )
}
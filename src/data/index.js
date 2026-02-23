import { Calendar, Car, Clock, CreditCard, FileText, Fuel, MapPin, Palette, RefreshCcw, SettingsIcon, ShieldEllipsis, User } from "lucide-react"

// ─── WhatsApp Config ───────────────────────────────────────────────────────
export const WA_NUMBER = '5491112345678'
export const waLink = (msg) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

// ─── Beneficios ────────────────────────────────────────────────────────────
export const BENEFICIOS = [
  {
    icon: ShieldEllipsis,
    title: 'Garantía Extendida',
    desc: 'Todos nuestros vehículos usados cuentan con garantía de 6 meses sobre tren motriz.',
  },
  {
    icon: FileText,
    title: 'Documentación en Orden',
    desc: 'Transferencia rápida y toda la paperería al día. Comprás sin dolores de cabeza.',
  },
  {
    icon: CreditCard,
    title: 'Financiación Propia',
    desc: 'Plan de cuotas fijas en pesos sin banco. Simulá tu cuota al instante.',
  },
  {
    icon: RefreshCcw,
    title: 'Recibimos Tu Usado',
    desc: 'Tasamos tu vehículo sin cargo y lo tomamos como parte de pago.',
  },
  {
    icon: Car,
    title: 'Test Drive Inmediato',
    desc: 'Manejá el auto antes de decidirte. Sin turno previo, cuando vos quieras.',
  },
  {
    icon: Clock,
    title: 'Entrega Rápida',
    desc: 'Retirás el auto el mismo día de la compra. Sin esperas innecesarias.',
  },
]

// ─── Servicios ─────────────────────────────────────────────────────────────
export const SERVICIOS = [
  {
    title: 'Venta de 0km',
    desc: 'Acceso a toda la gama de modelos nuevos con precio de lista y financiación oficial.',
  },
  {
    title: 'Venta de Usados',
    desc: 'Stock renovado semanalmente. Vehículos revisados, certificados y con garantía.',
  },
  {
    title: 'Financiación Propia',
    desc: 'Cuotas en pesos, sin banco, con el 30% de entrada.',
  },
  {
    title: 'Consignación',
    desc: 'Vendemos tu auto por vos. Sin complicaciones ni esperas.',
  },
  {
    title: 'Posventa',
    desc: 'Taller de confianza asociado para tu servicio oficial o mantenimiento.',
  },
  {
    title: 'Peritaje y Tasación',
    desc: 'Valuamos tu vehículo de forma gratuita con criterio de mercado real.',
  },
]

// ─── Autos Usados ──────────────────────────────────────────────────────────
export const AUTOS_USADOS = [
  {
    id: 1,
    nombre: 'Toyota Corolla',
    anio: 2021,
    tipo: 'usado',
    precio: '$18.500.000',
    combustible: 'Nafta',
    transmision: 'Automático',
    puertas: '4 puertas',
    km: '38.000 km',
  },
  {
    id: 2,
    nombre: 'Volkswagen Polo',
    anio: 2022,
    tipo: 'usado',
    precio: '$14.200.000',
    combustible: 'Nafta',
    transmision: '6 marchas',
    puertas: '5 puertas',
    km: '22.000 km',
  },
  {
    id: 3,
    nombre: 'Chevrolet Tracker',
    anio: 2023,
    tipo: 'usado',
    precio: '$21.800.000',
    combustible: 'Nafta',
    transmision: 'Automático',
    puertas: '5 puertas',
    km: '15.500 km',
  },
  {
    id: 4,
    nombre: 'Ford Ranger',
    anio: 2020,
    tipo: 'usado',
    precio: '$22.500.000',
    combustible: 'Diesel',
    transmision: '6 marchas',
    puertas: '4 puertas',
    km: '55.000 km',
  },
  {
    id: 5,
    nombre: 'Peugeot 208',
    anio: 2023,
    tipo: '0km',
    precio: '$16.900.000',
    combustible: 'Nafta',
    transmision: '5 marchas',
    puertas: '5 puertas',
    km: '0 km',
  },
  {
    id: 6,
    nombre: 'Renault Duster',
    anio: 2022,
    tipo: 'usado',
    precio: '$17.300.000',
    combustible: 'Nafta',
    transmision: '6 marchas',
    puertas: '5 puertas',
    km: '28.000 km',
  },
]

// ─── Auto Destacado ────────────────────────────────────────────────────────
export const AUTO_DETALLE = {
  nombre: 'Toyota Hilux SR 4x4',
  anio: 2021,
  km: '41.000 km',
  precio: '$28.900.000',
  desc:
    'Hilux SR 4x4 en excelente estado, full equipo. Motor 2.8 Turbo Diesel de 204 CV. Caja automática de 6 velocidades. Única mano, siempre en taller Toyota. Cuenta con cámara de retroceso, sensores de estacionamiento, asientos de cuero, climatizador automático y sistema multimedia táctil. Lista para transferir.',
  specs: [
    { icon: SettingsIcon, label: 'Motor', val: '2.8 TD 204CV' },
    { icon: Fuel, label: 'Combustible', val: 'Diesel' },
    { icon: MapPin, label: 'Kilómetros', val: '41.000 km' },
    { icon: RefreshCcw, label: 'Transmisión', val: 'Automática 6M' },
    { icon: Car, label: 'Puertas', val: '4 puertas' },
    { icon: Palette, label: 'Color', val: 'Blanco Perla' },
    { icon: Calendar, label: 'Año', val: '2021' },
    { icon: User, label: 'Dueños', val: '1 propietario' },
  ],
  emojis: ['🛻', '🚙', '🚘', '🚗'],
}

// ─── Testimonios ───────────────────────────────────────────────────────────
export const TESTIMONIOS = [
  {
    texto:
      'Compré mi primera Hilux en Automotores y la atención fue impecable. Me explicaron todo, no hubo presión y la entrega fue el mismo día.',
    nombre: 'Marcos Fernández',
    detalle: 'Compró Ford Ranger 2021',
    inicial: 'MF',
  },
  {
    texto:
      'Vine a tasar mi auto y me dieron el mejor precio de la zona. Además me ayudaron a encontrar el 0km que buscaba con financiación propia.',
    nombre: 'Laura Giménez',
    detalle: 'Compró Peugeot 208 0km',
    inicial: 'LG',
  },
  {
    texto:
      'Me sorprendió la transparencia. Me mostraron todo el historial del auto, el peritaje completo y sin letra chica. Eso vale mucho en este rubro.',
    nombre: 'Rodrigo Castro',
    detalle: 'Compró Toyota Corolla 2022',
    inicial: 'RC',
  },
  {
    texto:
      'El trato fue excelente. Vine sin saber qué quería y me asesoraron según mi presupuesto. Salí con mi Tracker ese mismo día. 10 puntos.',
    nombre: 'Valentina Torres',
    detalle: 'Compró Chevrolet Tracker 2023',
    inicial: 'VT',
  },
]

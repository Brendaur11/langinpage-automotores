import Hero from '../sections/Hero'
import Nosotros from '../sections/Nosotros'
import Beneficios from '../sections/Beneficios'
import Servicios from '../sections/Servicios'
import AutosUsados from '../sections/AutosUsados'
import DetalleProducto from '../sections/DetalleProducto'
import Testimonios from '../sections/Testimonios'
import CTAFinal from '../sections/CTAFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <Nosotros />
      <Beneficios />
      <Servicios />
      <AutosUsados />
      <DetalleProducto />
      <Testimonios />
      <CTAFinal />
    </>
  )
}

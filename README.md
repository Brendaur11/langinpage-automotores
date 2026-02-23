# Automotores — Landing Page

Landing page profesional para concesionaria de autos 0km y usados.

---

## 🗂 Estructura de carpetas

```
automotores/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              ← Entry point con BrowserRouter
    ├── App.jsx               ← Routes (React Router DOM)
    ├── index.css             ← Tailwind base styles
    │
    ├── data/
    │   └── index.js          ← Arrays mockeados + helper waLink()
    │
    ├── layout/
    │   └── MainLayout.jsx    ← Navbar + Outlet + Footer + WAFloat
    │
    ├── components/
    │   ├── Navbar.jsx        ← Navbar fija con menú mobile
    │   ├── Footer.jsx        ← Footer persistente
    │   ├── WAFloat.jsx       ← Botón flotante WhatsApp
    │   ├── SectionHeader.jsx ← Header reutilizable por sección
    │   └── AutoCard.jsx      ← Card de vehículo usado
    │
    ├── sections/
    │   ├── Hero.jsx          ← CTA principal above the fold
    │   ├── Nosotros.jsx      ← Historia y pilares
    │   ├── Beneficios.jsx    ← Grilla de diferenciadores
    │   ├── Servicios.jsx     ← Lista de servicios
    │   ├── AutosUsados.jsx   ← Grid de autos disponibles
    │   ├── DetalleProducto.jsx ← Producto destacado con galería
    │   ├── Testimonios.jsx   ← Carrusel de reviews
    │   └── CTAFinal.jsx      ← CTA de cierre
    │
    └── pages/
        └── Home.jsx          ← Composición de todas las secciones
```

---

## 🚀 Setup

```bash
npm install
npm run dev
```

---

## ⚙️ Tecnologías

| Tech | Uso |
|------|-----|
| React 18 | UI |
| Vite 5 | Build / Dev |
| TailwindCSS 3 | Estilado |
| React Router DOM 6 | Routing con BrowserRouter |
| Framer Motion 11 | Animaciones |

---

## 📱 CTAs de WhatsApp

Todos los botones de conversión usan `wa.me` con mensajes predefinidos:

```js
// src/data/index.js
export const WA_NUMBER = '5491112345678'  // ← Cambiar por número real
export const waLink = (msg) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
```

**Puntos de contacto:**
- Hero → CTA principal
- AutosUsados → Por cada auto + botón "Ver stock completo"
- DetalleProducto → Consultar + Test Drive
- CTAFinal → CTA de cierre
- WAFloat → Botón flotante 24/7
- Navbar → "Consultar ahora"

---

## 🎨 Paleta de colores

| Variable | Valor | Uso |
|----------|-------|-----|
| `primary` | `#d43527` | CTA, acentos, tags |
| `primary-dark` | `#b02d22` | Hover de botones |
| `dark` | `#0a0a0a` | Backgrounds oscuros |
| `white` | `#ffffff` | Texto sobre oscuro, fondos |

---

## 📝 Para personalizar

1. **Número de WhatsApp**: Editar `WA_NUMBER` en `src/data/index.js`
2. **Autos disponibles**: Editar array `AUTOS_USADOS` en `src/data/index.js`
3. **Auto destacado**: Editar objeto `AUTO_DETALLE` en `src/data/index.js`
4. **Testimonios**: Editar array `TESTIMONIOS` en `src/data/index.js`
5. **Imágenes**: Reemplazar emojis placeholder por `<img>` reales en `AutoCard.jsx` y `DetalleProducto.jsx`

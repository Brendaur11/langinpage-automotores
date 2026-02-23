export default function SectionHeader({ tag, title, subtitle, light = false, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <span
        className={`inline-block text-xs font-bold tracking-[0.12em] uppercase border-l-[3px] border-primary pl-3 mb-3 ${
          light ? 'text-primary' : 'text-primary'
        }`}
      >
        {tag}
      </span>
      <h2
        className={`font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight ${
          light ? 'text-white' : 'text-dark'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base leading-relaxed max-w-xl ${light ? 'text-gray-400' : 'text-gray-500'} ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

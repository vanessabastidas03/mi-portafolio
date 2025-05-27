import { Star, Quote } from "lucide-react"
import Link from "next/link"

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "Profesora de Programación",
      content:
        "Vanessa demuestra una dedicación excepcional en sus proyectos. Su capacidad para resolver problemas complejos y su atención al detalle la destacan entre sus compañeros.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Compañero de Estudios",
      content:
        "Trabajar con Vanessa en proyectos grupales ha sido increíble. Su creatividad y habilidades técnicas aportan mucho valor al equipo. Siempre está dispuesta a ayudar.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Mentora de Desarrollo",
      content:
        "He visto el crecimiento de Vanessa como desarrolladora y es impresionante. Su pasión por aprender y aplicar nuevas tecnologías es admirable.",
      rating: 5,
    },
    {
      name: "Luis Herrera",
      role: "Coordinador Académico",
      content:
        "Vanessa sobresale por su compromiso académico y su capacidad para trabajar bajo presión. Sus proyectos siempre reflejan calidad e innovación.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-center flex-1">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                PORTFOLIO
              </h1>
              <p className="text-xl text-purple-700 mt-1 font-medium">Vanessa</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center space-x-8 pb-4">
            <Link href="/" className="text-purple-700 hover:text-purple-900 font-medium transition-colors">
              Home
            </Link>
            <Link
              href="/testimonials"
              className="text-pink-600 hover:text-pink-700 font-medium border-b-2 border-pink-500 transition-colors"
            >
              Testimonials
            </Link>
            <Link href="/experience" className="text-purple-700 hover:text-purple-900 font-medium transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="text-purple-700 hover:text-purple-900 font-medium transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Testimonios
          </h2>
          <p className="text-lg text-purple-700">Lo que dicen sobre mi trabajo y dedicación</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 rounded-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <Quote className="w-6 h-6 text-purple-600" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-purple-600 leading-relaxed mb-4 italic">"{testimonial.content}"</p>
              <div className="border-t border-purple-200 pt-4">
                <h4 className="font-semibold text-purple-800">{testimonial.name}</h4>
                <p className="text-sm text-purple-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl border-0 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">¿Trabajaste conmigo?</h3>
            <p className="text-purple-100 mb-6">
              Si hemos colaborado en algún proyecto, me encantaría conocer tu experiencia. Tu feedback es valioso para
              mi crecimiento profesional.
            </p>
            <Link href="/contact">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Compartir Testimonio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

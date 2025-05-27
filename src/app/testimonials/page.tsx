import Link from "next/link";

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-center flex-1">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                PORTFOLIO
              </h1>
              <p className="text-xl text-purple-700 mt-1 font-medium">
                Vanessa
              </p>
            </div>
          </div>

          <nav className="flex justify-center space-x-8 pb-4">
            <Link
              href="/"
              className="text-purple-700 hover:text-purple-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/testimonials"
              className="text-pink-600 hover:text-pink-700 font-medium border-b-2 border-pink-500 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/experience"
              className="text-purple-700 hover:text-purple-900 font-medium transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="text-purple-700 hover:text-purple-900 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Mi Trayectoria Universitaria
          </h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Durante mi paso por la universidad, he aprendido no solo a dominar
            herramientas y lenguajes de programación, sino también a trabajar en
            equipo, resolver problemas reales y adaptarme rápidamente a nuevas
            tecnologías. Esta experiencia ha sido fundamental para mi
            crecimiento como desarrolladora y como persona.
          </p>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Testimonios
          </h2>
          <p className="text-lg text-purple-700">
            Lo que dicen sobre mi trabajo y dedicación
          </p>
        </div>

        <div className="mt-16 max-w-2xl mx-auto p-8 bg-white/70 rounded-lg shadow-xl">
          <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">
            ¿Quieres dejar tu testimonio?
          </h3>
          <p className="text-purple-600 mb-6 text-center">
            Si has trabajado conmigo o has sido parte de mi proceso, me
            encantaría leer tu opinión.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="text"
              placeholder="Tu rol o relación (Docente, Compañero, etc.)"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              placeholder="Tu testimonio"
              rows={4}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Enviar Testimonio
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

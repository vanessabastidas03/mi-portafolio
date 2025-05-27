import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export default function Contact() {
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
            <Link href="/testimonials" className="text-purple-700 hover:text-purple-900 font-medium transition-colors">
              Testimonials
            </Link>
            <Link href="/experience" className="text-purple-700 hover:text-purple-900 font-medium transition-colors">
              Experience
            </Link>
            <Link
              href="/contact"
              className="text-pink-600 hover:text-pink-700 font-medium border-b-2 border-pink-500 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Contacto
          </h2>
          <p className="text-lg text-purple-700">¡Hablemos sobre tu próximo proyecto!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 bg-white/70 backdrop-blur-sm shadow-lg border border-purple-200 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-800 mb-6">Envíame un mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-700 mb-2">Asunto</label>
                <input
                  type="text"
                  placeholder="¿En qué puedo ayudarte?"
                  className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-700 mb-2">Mensaje</label>
                <textarea
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  rows={5}
                  className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-purple-200 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-700">vanessa@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-700">+57 300 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-700">Pasto, Nariño, Colombia</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-purple-200 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Sígueme en</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl border-0 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Disponibilidad</h3>
              <p className="text-purple-100 mb-4">
                Actualmente estoy disponible para proyectos freelance y colaboraciones. ¡No dudes en contactarme!
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm">Disponible para nuevos proyectos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

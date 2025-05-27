import {
  GraduationCap,
  MapPin,
  Calendar,
  Code2,
  BookOpen,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function About() {
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
              className="text-purple-700 hover:text-purple-900 font-medium transition-colors"
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Sobre Mí
          </h2>
          <p className="text-lg text-purple-700">
            Conoce más sobre mi trayectoria académica y pasiones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-purple-200 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-purple-800">
                Educación
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-500" />
                <span className="text-purple-700 font-medium">
                  Ingeniería de Software
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-500" />
                <span className="text-purple-600">
                  Universidad Cooperativa de Colombia - Pasto
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span className="text-purple-600">Estudiante Activa</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-purple-200 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-pink-600" />
              <h3 className="text-xl font-semibold text-purple-800">
                Habilidades
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-purple-600">Desarrollo Frontend</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-purple-600">Diseño de Interfaces</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-purple-600">Resolución de Problemas</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-purple-600">Trabajo en Equipo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl border-0 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Mi Historia</h3>
          <p className="text-purple-100 leading-relaxed text-center">
            Como estudiante de Ingeniería de Software en la Universidad
            Cooperativa de Colombia en Pasto, me apasiona el mundo de la
            tecnología y el desarrollo de software. Cada día es una oportunidad
            para aprender algo nuevo y aplicar mis conocimientos en proyectos
            creativos que marquen la diferencia. Mi objetivo es convertirme en
            una desarrolladora que no solo escriba código, sino que cree
            experiencias digitales memorables.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link href="/projects">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg shadow-lg rounded-lg transition-all duration-300">
              Ver Mis Proyectos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

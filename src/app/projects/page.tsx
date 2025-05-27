import { Code, Palette, ShoppingBag, Users } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Login Card",
      description:
        "Interfaz de inicio de sesión moderna con validación de formularios y experiencia de usuario fluida.",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Makeup",
      description:
        "Web de maquillaje con catálogo de productos, tips y tutoriales para entusiastas y profesionales.",
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Maquillaje",
      description:
        "Plataforma de servicios de maquillaje profesional. Permite reservar citas y ver portfolios.",
      icon: <ShoppingBag className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "API Redes",
      description:
        "API para redes sociales que gestiona usuarios, publicaciones y notificaciones en tiempo real.",
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Mis Proyectos Destacados
          </h2>
          <p className="text-lg text-purple-700">
            Explora algunos de mis trabajos más representativos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 rounded-lg"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} text-white mb-4`}
              >
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">
                {project.title}
              </h3>
              <p className="text-purple-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl border-0 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes una idea en mente?
            </h3>
            <p className="text-purple-100 mb-6">
              Me encanta trabajar en proyectos desafiantes que marquen la
              diferencia. ¡Hablemos sobre cómo puedo ayudarte a hacer realidad
              tu visión!
            </p>
            <Link href="/contact">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Contactar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

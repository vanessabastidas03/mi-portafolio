import { Mail, User, FolderOpen, Sparkles, Code, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
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
              className="text-pink-600 hover:text-pink-700 font-medium border-b-2 border-pink-500 transition-colors"
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
            <Link
              href="/hobbies"
              className="text-purple-700 hover:text-purple-900 font-medium transition-colors"
            >
              Hobbies
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl border-0 rounded-lg">
              <h2 className="text-xl font-bold mb-4">PORTFOLIO</h2>
              <p className="text-purple-100 text-sm leading-relaxed">
                Explorando el mundo del desarrollo de software con pasión y
                creatividad. Cada línea de código es una nueva aventura.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-purple-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    <h3 className="text-lg font-semibold text-purple-800">
                      ¡Hola, mundo!
                    </h3>
                  </div>
                  <p className="text-purple-700 mb-4 font-medium">
                    Soy Vanessa ✨
                  </p>
                  <p className="text-purple-600 text-sm leading-relaxed">
                    Transformo ideas en realidad digital. Mi pasión por la
                    tecnología me impulsa a crear soluciones innovadoras que
                    conectan el diseño con la funcionalidad. ¡Bienvenido a mi
                    universo creativo!
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Link href="/about">
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 shadow-lg transition-all duration-300 hover:shadow-xl px-4 py-2 rounded-lg">
                      <User className="w-4 h-4" />
                      About me
                    </button>
                  </Link>
                  <Link href="/projects">
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white border-0 shadow-lg transition-all duration-300 hover:shadow-xl px-4 py-2 rounded-lg">
                      <FolderOpen className="w-4 h-4" />
                      View Projects
                    </button>
                  </Link>

                  <Link href="/contact">
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg transition-all duration-300 hover:shadow-xl px-4 py-2 rounded-lg">
                      <Mail className="w-4 h-4" />
                      Contact me
                    </button>
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-purple-200 rounded-lg">
                    <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center mb-4 shadow-inner">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-lg">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Image
                      src="/mifoto_presentacion.jpeg"
                      alt="Vanessa presentación 1"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md"
                    />
                    <Image
                      src="/mifoto_presentacion2.jpeg"
                      alt="Vanessa presentación 2"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md"
                    />
                    <Image
                      src="/mifoto_presentacion3.jpeg"
                      alt="Vanessa presentación 3"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>

                <div className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-purple-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-5 h-5 text-pink-600" />
                    <h3 className="text-lg font-semibold text-purple-800">
                      Mis Pasiones
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg shadow-inner flex items-center justify-center">
                      <span className="text-xs font-medium text-purple-700">
                        Coding
                      </span>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg shadow-inner flex items-center justify-center">
                      <span className="text-xs font-medium text-pink-700">
                        Design
                      </span>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-lg shadow-inner flex items-center justify-center">
                      <span className="text-xs font-medium text-indigo-700">
                        Innovation
                      </span>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-purple-300 to-pink-300 rounded-lg shadow-inner flex items-center justify-center">
                      <span className="text-xs font-medium text-purple-700">
                        Learning
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mt-12 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm">
            © Vanessa {new Date().getFullYear()} Contact: vanessa@example.com
          </div>
        </div>
      </footer>
    </div>
  );
}

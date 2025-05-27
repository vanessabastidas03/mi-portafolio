import { Calendar, MapPin, Award, BookOpen, Code, Users } from "lucide-react"
import Link from "next/link"

export default function Experience() {
  const experiences = [
    {
      title: "Desarrollo de Proyectos Académicos",
      organization: "Universidad Cooperativa de Colombia",
      period: "2022 - Presente",
      location: "Pasto, Colombia",
      description:
        "Desarrollo de múltiples proyectos de software como parte de mi formación académica, incluyendo aplicaciones web, sistemas de gestión y APIs.",
      skills: ["JavaScript", "React", "Node.js", "Database Design"],
    },
    {
      title: "Participante en Hackathons Estudiantiles",
      organization: "Eventos Universitarios",
      period: "2023 - Presente",
      location: "Regional",
      description:
        "Participación activa en competencias de programación y desarrollo de software, trabajando en equipos multidisciplinarios.",
      skills: ["Trabajo en Equipo", "Resolución de Problemas", "Prototipado Rápido"],
    },
    {
      title: "Proyectos de Desarrollo Frontend",
      organization: "Proyectos Personales",
      period: "2023 - Presente",
      location: "Remoto",
      description:
        "Creación de interfaces de usuario modernas y responsivas, enfocándome en la experiencia del usuario y las mejores prácticas de desarrollo.",
      skills: ["HTML/CSS", "Tailwind CSS", "UI/UX Design", "Responsive Design"],
    },
  ]

  const achievements = [
    {
      title: "Mejor Proyecto de Semestre",
      description: "Reconocimiento por el desarrollo de una aplicación web innovadora",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Participación en Conferencias Tech",
      description: "Asistencia a eventos de tecnología y desarrollo de software",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Certificaciones en Desarrollo Web",
      description: "Cursos completados en plataformas de educación online",
      icon: <BookOpen className="w-5 h-5" />,
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
            <Link href="/testimonials" className="text-purple-700 hover:text-purple-900 font-medium transition-colors">
              Testimonials
            </Link>
            <Link
              href="/experience"
              className="text-pink-600 hover:text-pink-700 font-medium border-b-2 border-pink-500 transition-colors"
            >
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
            Mi Experiencia
          </h2>
          <p className="text-lg text-purple-700">Trayectoria académica y proyectos desarrollados</p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-12">
          {experiences.map((exp, index) => (
            <div key={index} className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-purple-200 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-purple-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                  <p className="text-purple-700 font-medium mb-3">{exp.organization}</p>
                  <p className="text-purple-600 leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">Logros y Reconocimientos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-purple-200 text-center rounded-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4">
                  {achievement.icon}
                </div>
                <h4 className="font-semibold text-purple-800 mb-2">{achievement.title}</h4>
                <p className="text-purple-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl border-0 rounded-lg text-center">
          <Code className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Siempre Aprendiendo</h3>
          <p className="text-purple-100 mb-6">
            Mi experiencia está en constante crecimiento. Cada proyecto es una oportunidad para aprender nuevas
            tecnologías y mejorar mis habilidades como desarrolladora.
          </p>
          <Link href="/projects">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Ver Mis Proyectos
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

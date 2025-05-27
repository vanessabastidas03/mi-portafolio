import React from "react";

export default function Hobbies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Mis Pasatiempos
          </h1>
          <p className="text-lg text-purple-700 mt-2">
            Conoce un poco más sobre lo que disfruto hacer en mi tiempo libre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-purple-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              Meditación
            </h2>
            <p className="text-purple-700 text-base">
              Dedico tiempo a la meditación porque me ayuda a conectar conmigo
              misma, reducir el estrés y mantener un equilibrio mental. Es un
              momento sagrado en el que me desconecto del ruido del mundo para
              reencontrarme con mi paz interior.
            </p>
          </div>

          <div className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-pink-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-pink-800 mb-4">
              Ir al Gimnasio
            </h2>
            <p className="text-pink-700 text-base">
              El gimnasio es más que ejercicio físico, es disciplina, energía y
              superación personal. Me encanta entrenar, sentirme activa y
              fuerte, y ver cómo mi cuerpo responde positivamente a cada
              esfuerzo. Es mi forma de cuidar de mí.
            </p>
          </div>

          <div className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-indigo-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
              Tiempo en la Naturaleza
            </h2>
            <p className="text-indigo-700 text-base">
              Disfruto mucho estar rodeada de naturaleza, ya sea en caminatas al
              aire libre, visitar parques o simplemente respirar aire puro. La
              conexión con el entorno natural me llena de inspiración y me
              renueva por completo.
            </p>
          </div>

          <div className="p-6 bg-white/70 backdrop-blur-sm shadow-lg border border-purple-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              Aprendizaje Creativo
            </h2>
            <p className="text-purple-700 text-base">
              Me gusta aprender cosas nuevas, ya sea sobre diseño, desarrollo, o
              habilidades que despiertan mi lado creativo. Siempre estoy
              explorando nuevas formas de crecer personal y profesionalmente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

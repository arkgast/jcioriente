import HuellaOrienteImg from '../assets/huella-oriente.jpg';
import HuellitasAmigasImg from '../assets/huellitas-amigas.jpg'

export function Projects() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/*#1*/}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Huella oriente
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Huella Oriente es la Iniciativa de un Programa encaminado a
                valorar y reconocer el trabajo en actividades,
                proyectos-programas y gestión dentro de JCI Oriente, tiene sus
                bases en generar un histórico de Programas y Proyectos
                destacados desde la fundación de JCI Oriente hasta la gestión
                actual, proponiendo mostrar los primeros resultados en el 30
                aniversario de JCI Oriente.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src={HuellaOrienteImg}
              alt="Huella Oriente"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>

        {/*#2*/}
        <div className="pt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Comunicación inclusiva
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                “Las señas son a mis ojos lo que las palabras son a tus oídos.”
                “La lengua de Señas es un derecho humano, y no es solo una
                opción.” <span className="text-primary">Ralph Singleton</span>
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nosotros como miembros activos de JCI analizamos los en nuestra
                comunidad buscando soluciones, poniendo en habilidades
                adquiridas con compromiso y responsabilidad.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                El programa COMUNICACIÓN INCLUSIVA nació de una simple idea,
                luego se transformó en una necesidad. Hoy por hoy vemos que ha
                ganado bastante presencia en las noticias y al mismo tiempo
                exponen la gran necesidad de ser atendidos.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Aprendiendo lenguaje de señas contribuimos en el desarrollo del
                ODS 10 en impulsar el desarrollo de la cultura de Sordos,
                creando sensibilización en la población, establecer inclusión
                social y adoptar esta lengua como un idioma más.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-last">
            <img
              src="https://media.istockphoto.com/id/173913231/photo/i-love-you-sign.jpg?s=612x612&w=0&k=20&c=YcTq921-Rx3VvKNbEUrJ0WSHnlZ23S8t31V5pIwyPUM="
              alt="Comunicacón Inclusiva"
              className="h-[42rem] w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>

        {/*#1*/}
        <div className="pt-16 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Huellitas amigas
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                La situación de los animales desprotegidos es un reflejo de nuestra sociedad
                y de la responsabilidad que tenemos hacia aquellos seres que dependen de nosotros.
                A través de nuestro proyecto, buscamos no solo proveerles un refugio y sustento,
                sino también educar y concientizar sobre el valor inmenso de una mascota y la cultura de la adopción.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Inspirados por acciones a nivel mundial y reconociendo la situación particular
                de nuestra región, invitamos a cada uno de ustedes a ser parte de esta
                transformadora iniciativa. Con tu apoyo, podemos asegurar un futuro mejor para
                estos animales y, en el proceso, reafirmar los lazos de comunidad y empatía
                que nos unen como sociedad.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src={HuellitasAmigasImg}
              alt="Huellitas Amigas"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;

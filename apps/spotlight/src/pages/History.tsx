import { TrophyIcon } from '@heroicons/react/20/solid';

export function History() {
  return (
    <>
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <img
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src="https://images.unsplash.com/photo-1658855305528-e73fac4f1ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-24 xl:w-1/2">
              <p className="text-primary text-base font-semibold leading-7">
                Legado de Liderazgo
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Comprometidos con la sociedad
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Somos una Organización fundada el 14 de Noviembre de 1993, desde
                nuestros inicios hemos sido pioneros en el desarrollo de
                liderazgos enfocados en proyectos de impacto ambiental, social y
                empresarial; con programas insignias como ser: World Clean Up
                Day, Madre Emprendedora, Emprende Oriente, Transformado Vidas,
                Creando Oportunidades.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                <p>
                  Entre los logros más destacables de nuestra organización
                  podemos nombrar:
                </p>
                <ul className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <TrophyIcon
                      className="text-success mt-1 h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <span>
                      Presidente Local más sobresaliente (Anderson Soria), 2018
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <TrophyIcon
                      className="text-success mt-1 h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <span>
                      Mejor Proyecto de Desarrollo Sostenible (World Clean Up
                      Day), 2018
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <TrophyIcon
                      className="text-success mt-1 h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <span>
                      Mejor Proyecto de Desarrollo Sostenible (World Clean Up
                      Day) Conferencia de Área, 2018
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <TrophyIcon
                      className="text-success mt-1 h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <span>
                      Mejor proyecto de impacto comunitario (SCZ te quiero
                      sostenible), 2019
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <TrophyIcon
                      className="text-success mt-1 h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <span>100% de eficiencia, 2019</span>
                  </li>
                  <li className="flex gap-x-3">
                    <TrophyIcon
                      className="text-success mt-1 h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <span>
                      Mejor Programa Local de Crecimiento y Desarrollo (Making a
                      change «Reload» / Directora María Fernanda Donoso), 2020
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <TrophyIcon
                      className="text-success mt-1 h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <span>
                      Mejor Programa Local de Desarrollo de Habilidades
                      Personales (Comunicación Inclusiva «Hazlo con el corazón»
                      / Director Julio Caballero), 2020
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <TrophyIcon
                      className="text-success mt-1 h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <span>
                      Presidente Local Más Sobresaliente (Barón Rojo Mejía),
                      2020
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <TrophyIcon
                      className="text-success mt-1 h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <span>100% de eficiencia, 2020</span>
                  </li>
                  <li className="flex gap-x-3">
                    <TrophyIcon
                      className="text-success mt-1 h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <span>
                      Finalista en la Conferencia de Área como mejor Programa de
                      Cooperación Interinstitucional (Programa Green Smart
                      Business / Director Jonathan Rosado), 2021
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <TrophyIcon
                      className="text-success mt-1 h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                    <span>Organización Local más sobresaliente, 2021</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**/}
      <div className="overflow-hidden bg-white px-6 py-16 lg:px-8 xl:py-36">
        <div className="mx-auto max-w-max lg:max-w-7xl">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="max-w-prose text-base lg:max-w-none">
              <h2 className="text-primary font-semibold leading-6">
                Leyendas del Oriente
              </h2>
              <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Leyenda del Oso Toño
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative md:bg-white md:p-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
                  <p>
                    Cuenta la leyenda que hace muy muy poco tiempo atrás, el
                    Gran Tótem de la Tierra del Patujú se había despertado de su
                    largo sueño. En su altar, encontró innumerables trofeos de
                    guerra y reconocimientos por sus hazañas; lo único que
                    restaba eran pocos guerreros, pero en ese momento, el Gran
                    Oso de las Montañas emitió un gran rugido que hizo caer
                    todos los viejos empolvados trofeos, y paciente se sentó en
                    la silla de Oriente.
                  </p>
                  <p>
                    Al rugido acudieron nobles y gentiles, pero no todos estaban
                    a la altura de la compañía de aquel Gran Tótem y se
                    marcharon; y por más ruidoso o estrepitoso que haya sido su
                    retiro, no lanzó mayor sonido que las palabras del viejo
                    oso.
                  </p>
                </div>
                <div className="prose prose-lg prose-indigo mt-6 text-gray-500 lg:mt-0">
                  <p>
                    Hoy, despúes de ese algún poco tiempo, nuevos son los
                    guerreros que portan orgullosos la marca de aquel momento en
                    el que fueron convocados a recrear y tomar los estandartes
                    del Oriente. Sólo tres fueron al Gran Concilio de Tribus en
                    tierras altas. La gente tiene registrados tres, pero cuando
                    aquellos tres hablan o actúan, se escucha el rugir de toda
                    la tribu que aún los espera y añora su regreso. Ellos ya son
                    un trofeo... El Gran Oso sigue allí vigilando su noble
                    creación, de honor, causa y gloria es su mirada, más el que
                    lo desafía al mal, cae bajo su pata.
                  </p>
                  <p>
                    Gran Oso del Oriente que guías la unión de tus aliados, al
                    sonar los tambores y rugir la brisa apacible de tu sombra...
                    ¡OH! Dicen algunas voces del Oriente: "Es el Oso, el Oso
                    viene del Oriente", mas eso no importa, pues es la unión de
                    una familia en un solo y gran corazón. Vos y yo somos parte
                    de ello.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;

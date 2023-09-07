import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid';
import HomeCover from '../assets/home-cover.jpeg';

const cards = [
  {
    name: 'Misión',
    description:
      'Ofrecer oportunidades de desarrollo de liderazgo que empoderen a los jóvenes para crear un cambio positivo.',
    icon: NewspaperIcon,
  },
  {
    name: 'Visión',
    description: 'Ser la principal red mundial de jóvenes líderes.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Postúlate',
    description: '¿Quieres ser parte de JCI Oriente? ¡Postúlate!',
    icon: PhoneIcon,
  },
];

export function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-48 sm:py-32">
      <img
        src={HomeCover}
        alt="JCI Oriente"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-72">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            JCI Oriente
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-gray-900/60 p-6 ring-1 ring-inset ring-white/10 text-shadow"
            >
              <card.icon
                className="h-7 w-5 flex-none text-secondary"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

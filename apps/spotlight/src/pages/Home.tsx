import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid';
import HomeCover from '../assets/home-cover.jpeg';
import { useTranslation } from 'react-i18next';

/**
 * cards is an array of objects with the following structure:
 * {
 *   name: string,
 *   icon: React.ElementType,
 * }
 *
 * name is the name of the card, used to translate the title and text
 * icon is the icon to be displayed on the card
 */
const cards = [
  {
    name: 'mission',
    icon: NewspaperIcon,
  },
  {
    name: 'vision',
    icon: LifebuoyIcon,
  },
  {
    name: 'joinUs',
    icon: PhoneIcon,
  },
];

export function Home() {
  const { t } = useTranslation();
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
            {t('home.title')}
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
                <h3 className="font-semibold text-white">
                  {t(`${card.name}.title`)}
                </h3>
                <p className="mt-2 text-gray-300">{t(`${card.name}.text`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

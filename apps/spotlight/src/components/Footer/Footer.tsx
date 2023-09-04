import { Icon, IconNames, IconProps } from '@jcioriente/ui';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../constants';

export const mainNavigation = [
  { name: 'Postulate', to: '#' },
  { name: 'Actividades', to: '#' },
  { name: 'Historia', to: '#' },
  { name: 'Convenios', to: '#' },
];

export const socialNetworks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/JCI.Oriente.Bolivia',
    icon: (props: IconProps) => <Icon {...props} name={IconNames.Facebook} />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/jci.oriente/',
    icon: (props: IconProps) => <Icon {...props} name={IconNames.Instagram} />,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props: IconProps) => <Icon {...props} name={IconNames.Twitter} />,
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (props: IconProps) => <Icon {...props} name={IconNames.YouTube} />,
  },
  {
    name: 'TikTok',
    href: '#',
    icon: (props: IconProps) => <Icon {...props} name={IconNames.TikTok} />,
  },
];

export function Footer() {
  return (
    <div className="mx-auto max-w-full overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <nav
        className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        aria-label="Footer"
      >
        {mainNavigation.map((route) => (
          <div key={route.name} className="pb-6">
            <Link
              to={route.to}
              className="text-sm leading-6 text-black-light hover:text-secondary"
            >
              {route.name}
            </Link>
          </div>
        ))}
      </nav>
      <div className="mt-10 flex justify-center space-x-10">
        {socialNetworks.map((item) => (
          <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="mt-10 text-center text-xs leading-5 text-gray-500">
        &copy; 2023 {APP_NAME}. Todos los derechos reservados.
      </p>
    </div>
  );
}

import { NestedRoute } from '@jcioriente/types';
import { Icon, IconNames, IconProps } from '@jcioriente/ui';
import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { APP_NAME } from '../../constants';
import { AppRoutes, getChildrenRoutes } from '../../routes';

type SocialMediaLink = NestedRoute & {
  icon: (props: IconProps) => ReactElement;
};

export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: 'Facebook',
    path: 'https://www.facebook.com/JCI.Oriente.Bolivia',
    icon: (props: IconProps) => <Icon {...props} name={IconNames.Facebook} />,
  },
  {
    name: 'Instagram',
    path: 'https://www.instagram.com/jci.oriente/',
    icon: (props: IconProps) => <Icon {...props} name={IconNames.Instagram} />,
  },
  {
    name: 'Twitter',
    path: '#',
    icon: (props: IconProps) => <Icon {...props} name={IconNames.Twitter} />,
  },
  {
    name: 'YouTube',
    path: '#',
    icon: (props: IconProps) => <Icon {...props} name={IconNames.YouTube} />,
  },
  {
    name: 'TikTok',
    path: '#',
    icon: (props: IconProps) => <Icon {...props} name={IconNames.TikTok} />,
  },
];

export function Footer() {
  const location = useLocation();
  return (
    <div className="mx-auto max-w-full overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <nav
        className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        aria-label="Footer"
      >
        {getChildrenRoutes(AppRoutes.footerNavigation).map(
          (route: NestedRoute) => (
            <div key={route.name} className="pb-6">
              <Link
                to={route.path}
                className="text-sm leading-6 text-black-light hover:text-secondary"
                aria-label={`Ir a la página de ${route.name}`}
                aria-current={
                  location.pathname === route.path ? 'page' : undefined
                }
              >
                {route.name}
              </Link>
            </div>
          ),
        )}
      </nav>
      <div className="mt-10 flex justify-center space-x-10">
        {socialMediaLinks.map((item) => (
          <a
            key={item.name}
            href={item.path}
            target="_blank"
            rel="noreferrer"
            aria-label={`Síguenos en ${item.name}`}
          >
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

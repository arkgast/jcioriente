import { Link, useLocation } from 'react-router-dom';
import { Route } from '../../../routes';

export function MainMenuLinks({ routes }: { routes: Route[] }) {
  const location = useLocation();
  const ariaCurrent = location.pathname === '/' ? 'page' : undefined;

  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {routes.map((route) => (
        <Link
          to={route.path}
          key={route.name}
          aria-label={`Ir a la página de ${route.name}`}
          aria-current={ariaCurrent}
          className="main-menu-link"
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}

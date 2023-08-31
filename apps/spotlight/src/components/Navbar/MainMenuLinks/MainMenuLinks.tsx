import { Link, useLocation } from 'react-router-dom';
import { Route } from '../../../routes';

export function MainMenuLinks({ routes }: { routes: Route[] }) {
  const location = useLocation()
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {routes.map(route => (
        <Link
          to={route.path}
          key={route.name}
          aria-label={`Ir a la página de ${route.name}`}
          aria-current={location.pathname === route.path ? "page" : undefined}
          className="main-menu-link"
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}

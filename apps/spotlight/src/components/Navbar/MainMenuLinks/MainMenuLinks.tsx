import { BaseRoute } from '@jcioriente/types';
import { NavLink, useLocation } from 'react-router-dom';

export function MainMenuLinks({ routes }: { routes: BaseRoute[] }) {
  const location = useLocation();
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {routes.map((route) => (
        <NavLink
          to={route.path}
          key={route.name}
          aria-label={`Ir a la página de ${route.name}`}
          aria-current={location.pathname === route.path ? 'page' : undefined}
          className={({ isActive }) => {
            const baseClasses = 'main-menu-link';
            if (!isActive) {
              return baseClasses;
            }
            return `${baseClasses} text-secondary hover:brightness-110`;
          }}
        >
          {route.name}
        </NavLink>
      ))}
    </div>
  );
}

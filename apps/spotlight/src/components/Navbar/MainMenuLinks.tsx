import { useLocation } from 'react-router-dom'
import { Route } from '../../routes'
import { Link } from 'react-router-dom'

export function MainMenuLinks({ routes }: { routes: Route[] }) {
  const location = useLocation()
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {routes.map(route => (
        <Link
          to={route.path}
          key={route.name}
          aria-label={`Go to ${route.name} page`}
          aria-current={location.pathname === route.path ? "true" : undefined}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}

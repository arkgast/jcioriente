import { Route } from '../../routes'
import { Link } from 'react-router-dom'

export function MainMenuLinks({ routes }: { routes: Route[] }) {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {routes.map(route => (
        <Link
          to={route.path}
          key={route.name}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}



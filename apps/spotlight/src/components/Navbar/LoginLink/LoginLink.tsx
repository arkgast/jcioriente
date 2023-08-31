import { Link } from 'react-router-dom'
import { Route } from '../../../routes'

export function LoginLink({ route }: { route: Route }) {
  return (
    <Link
      to={route.path}
      className="text-sm font-semibold leading-6 text-gray-900"
      aria-label={`Ir a la página de ${route.name}`}
    >
      {route.name} <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

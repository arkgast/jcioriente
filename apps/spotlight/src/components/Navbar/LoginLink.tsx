import { Link } from 'react-router-dom'
import { Route } from '../../routes'

export function LoginLink({ route }: { route: Route }) {
  return (
    <Link
      to={route.path}
      className="text-sm font-semibold leading-6 text-gray-900"
      aria-label="Go to login page"
    >
      {route.name} <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

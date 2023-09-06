import { BaseRoute } from '@jcioriente/types';
import { Link } from 'react-router-dom';

export function LoginLink({ route }: { route: BaseRoute }) {
  return (
    <Link
      to={route.path}
      className="main-menu-link"
      aria-label={`Ir a la página de ${route.name}`}
    >
      {route.name} <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

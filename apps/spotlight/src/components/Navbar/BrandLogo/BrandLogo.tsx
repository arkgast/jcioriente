import { BaseRoute } from '@jcioriente/types';
import { Link, useLocation } from 'react-router-dom';
import LogoImg from '../../../assets/logo.jpeg';
import { APP_NAME } from '../../../constants';
import { AppRoutes } from '../../../routes';

export function BrandLogo({ route }: { route: BaseRoute }) {
  const location = useLocation();
  const ariaCurrent = location.pathname === route.path ? 'page' : undefined;

  return (
    <Link
      to={route.path}
      className="-m-1.5 p-1.5"
      data-testid="brand-logo"
      aria-label={`Ir a la página de ${AppRoutes.home.name}`}
      aria-current={ariaCurrent}
    >
      <span className="sr-only">{APP_NAME}</span>
      <img className="h-8 w-auto" src={LogoImg} alt={APP_NAME} />
    </Link>
  );
}

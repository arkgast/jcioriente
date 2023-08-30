import { Link, useLocation } from 'react-router-dom'
import { Route } from '../../routes'
import LogoImg from '../../assets/logo.jpeg';
import { APP_NAME } from '../../constants';

export function BrandLogo({ route }: { route: Route }) {
  const location = useLocation()

  return (
    <Link
      to={route.path}
      className="-m-1.5 p-1.5"
      data-testid="brand-logo"
      aria-label={`Go to ${APP_NAME} home page`}
      aria-current={location.pathname === route.path ? 'true' : undefined}
    >
      <span className="sr-only">{APP_NAME}</span>
      <img
        className="h-8 w-auto"
        src={LogoImg}
        alt={APP_NAME}
      />
    </Link>
  )
}

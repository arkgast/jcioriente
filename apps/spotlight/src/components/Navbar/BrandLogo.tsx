import { Link } from 'react-router-dom'
import { Route } from '../../routes'
import LogoImg from '../../assets/logo.jpeg';

export function BrandLogo({ route }: { route: Route }) {
  return (
    <Link to={route.path} className="-m-1.5 p-1.5">
      <span className="sr-only">JCI Oriente</span>
      <img
        className="h-8 w-auto"
        src={LogoImg}
        alt="JCI Oriente"
      />
    </Link>
  )
}



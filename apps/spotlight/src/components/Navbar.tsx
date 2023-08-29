import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/proyectos">Proyectos</Link>
    </nav>
  )
}

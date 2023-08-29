import { Outlet } from 'react-router-dom'
import { Navbar } from './components'

export const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>JCI Oriente</h1>
      </main>
      <Outlet />
    </>
  )
}


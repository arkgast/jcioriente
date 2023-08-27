import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <header>
        <div className="flex justify-end">
          <Link className="mx-2 p-2 hover:bg-blue-200" to='/'>Inicio</Link>
          <Link className="mx-2 p-2 hover:bg-blue-400" to='/proyectos'>Proyectos</Link>
        </div>
      </header>
      <main>
        <h1>JCI Oriente</h1>
      </main>
      <Outlet />
    </>
  )
}

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <h1>Inicio</h1>
      },
      {
        path: '/proyectos',
        element: <h1>Proyectos</h1>
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { App } from './App';
import { AppRoutes } from './routes';
import { ErrorPage, Home } from './pages';
import { Login } from './pages/Login';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: AppRoutes.home.path,
        element: <Home />,
      },
      {
        path: AppRoutes.about.path,
        element: (
          <h1 className="text-center font-semibold py-16">
            {AppRoutes.about.name}
          </h1>
        ),
      },
      {
        path: AppRoutes.projects.path,
        element: (
          <h1 className="text-center font-semibold py-16">
            {AppRoutes.projects.name}
          </h1>
        ),
      },
      {
        path: AppRoutes.contactUs.path,
        element: (
          <h1 className="text-center font-semibold py-16">
            {AppRoutes.contactUs.name}
          </h1>
        ),
      },
      {
        path: AppRoutes.login.path,
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);

import { StrictMode, Suspense, lazy } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AppRoutes } from './routes';

const Home = lazy(() => import('./pages/Home'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const Login = lazy(() => import('./pages/Login/Login'));

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
    <Suspense fallback={<h1>Loading</h1>}>
      <RouterProvider router={routes} />
    </Suspense>
  </StrictMode>,
);

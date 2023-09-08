import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { appRoutes } from './appRoutes';

const App = lazy(() => import('../App'));
const Home = lazy(() => import('../pages/Home'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const Login = lazy(() => import('../pages/Login'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: appRoutes.home.path,
        element: <Home />,
      },
      {
        path: appRoutes.about.path,
        element: (
          <h1 className="text-center font-semibold py-16">
            {appRoutes.about.name}
          </h1>
        ),
      },
      {
        path: appRoutes.projects.path,
        element: (
          <h1 className="text-center font-semibold py-16">
            {appRoutes.projects.name}
          </h1>
        ),
      },
      {
        path: appRoutes.contactUs.path,
        element: (
          <h1 className="text-center font-semibold py-16">
            {appRoutes.contactUs.name}
          </h1>
        ),
      },
      {
        path: appRoutes.login.path,
        element: <Login />,
      },
    ],
  },
]);

export function Routes() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <RouterProvider router={routes} />;
    </Suspense>
  );
}

export default Routes;

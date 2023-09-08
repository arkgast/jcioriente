import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { appRoutes } from './appRoutes';

const About = lazy(() => import('../pages/About'));
const Activities = lazy(() => import('../pages/Activities'));
const Alliances = lazy(() => import('../pages/Alliances'));
const App = lazy(() => import('../App'));
const Contact = lazy(() => import('../pages/Contact'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const History = lazy(() => import('../pages/History'));
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Projects = lazy(() => import('../pages/Projects'));
const SuspenseLoader = lazy(() => import('../components/SuspenseLoader'));

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
        element: <About />,
      },
      {
        path: appRoutes.projects.path,
        element: <Projects />,
      },
      {
        path: appRoutes.contactUs.path,
        element: <Contact />,
      },
      {
        path: appRoutes.login.path,
        element: <Login />,
      },
      {
        path: appRoutes.footerNavigation.children?.activities.path,
        element: <Activities />,
      },
      {
        path: appRoutes.footerNavigation.children?.alliances.path,
        element: <Alliances />,
      },
      {
        path: appRoutes.footerNavigation.children?.history.path,
        element: <History />,
      },
    ],
  },
]);

export function Routes() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default Routes;

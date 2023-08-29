import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { App } from './App'
import { AppRoutes } from './constants'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: AppRoutes.home.path,
        element: <h1>{AppRoutes.home.name}</h1>
      },
      {
        path: AppRoutes.about.path,
        element: <h1>{AppRoutes.about.name}</h1>
      },
      {
        path: AppRoutes.projects.path,
        element: <h1>{AppRoutes.projects.name}</h1>
      },
      {
        path: AppRoutes.contactUs.path,
        element: <h1>{AppRoutes.contactUs.name}</h1>
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

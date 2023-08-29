import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { App } from './App'
import { Routes } from './constants'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: Routes.home.path,
        element: <h1>{Routes.home.name}</h1>
      },
      {
        path: Routes.about.path,
        element: <h1>{Routes.about.name}</h1>
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

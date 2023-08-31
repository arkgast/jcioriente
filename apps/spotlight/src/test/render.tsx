import { RenderResult, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { MemoryRouter, RouterProvider, createMemoryRouter } from 'react-router-dom';

export function renderWithRouter(ui: ReactElement, { route = '/' } = {}): RenderResult {
  const routes = [
    {
      path: route,
      element: ui,
    }
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: [route]
  })

  return render(<RouterProvider router={router} />);
};

import { RenderResult, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

type RenderWithRouterOptions = {
  route: string;
  additionalEntries?: string[];
}

export function renderWithRouter(ui: ReactElement, options: RenderWithRouterOptions = { route: '/' }): RenderResult {
  const { route, additionalEntries } = options;
  const routes = [
    {
      path: route,
      element: ui,
    },
    ...(additionalEntries || []).map((path) => ({
      path,
      element: ui,
    }))
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: [route]
  })

  return render(<RouterProvider router={router} />);
};

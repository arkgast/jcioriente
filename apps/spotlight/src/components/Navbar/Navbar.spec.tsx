import { fireEvent, screen } from '@testing-library/react';
import { MainRoutes, appRoutes, getMainMenuRoutes } from '../../routes';
import { renderWithRouter } from '../../test';
import { Navbar } from './Navbar';

describe('Navbar Component', () => {
  let routes: MainRoutes;

  beforeAll(() => {
    routes = getMainMenuRoutes();
  });

  it('should render the component', () => {
    renderWithRouter(
      <Navbar
        routes={routes}
        homeRoute={appRoutes.home}
        loginRoute={appRoutes.login}
      />,
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('should have the correct aria-current attribute', () => {
    renderWithRouter(
      <Navbar
        routes={routes}
        homeRoute={appRoutes.home}
        loginRoute={appRoutes.login}
      />,
      { route: '/projects' },
    );

    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      if (link.getAttribute('href') === '/projects') {
        expect(link).toHaveAttribute('aria-current', 'page');
      } else {
        expect(link).not.toHaveAttribute('aria-current');
      }
    });
  });

  it.only('should have the correct aria-expanded attribute', () => {
    const { container } = renderWithRouter(
      <Navbar
        routes={routes}
        homeRoute={appRoutes.home}
        loginRoute={appRoutes.login}
      />,
    );

    screen.debug(container);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});

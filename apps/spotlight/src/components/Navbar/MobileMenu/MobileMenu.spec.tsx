import { fireEvent, screen } from '@testing-library/react';
import { MainRoutes, appRoutes, getMainMenuRoutes } from '../../../routes';
import { renderWithRouter } from '../../../test';
import { MobileMenu } from './MobileMenu';

describe('MobileMenu Component', () => {
  let routes: MainRoutes;

  beforeAll(() => {
    routes = getMainMenuRoutes();
  });

  it('should render the component', () => {
    renderWithRouter(
      <MobileMenu
        open={true}
        onClose={vi.fn()}
        routes={routes}
        homeRoute={appRoutes.home}
        loginRoute={appRoutes.login}
      />,
    );

    const links = screen.getAllByRole('link');
    // +2 because of the BrandLogo and Login links
    expect(links.length).toBe(routes.length + 2);
  });

  it('should have correct aria-current attribute', () => {
    renderWithRouter(
      <MobileMenu
        open={true}
        onClose={vi.fn()}
        routes={routes}
        homeRoute={appRoutes.home}
        loginRoute={appRoutes.login}
      />,
      { route: appRoutes.projects.path },
    );

    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      if (link.getAttribute('href') === appRoutes.projects.path) {
        expect(link).toHaveAttribute('aria-current', 'page');
      } else {
        expect(link).not.toHaveAttribute('aria-current');
      }
    });
  });

  it('should have the correct aria-labels for each link', () => {
    renderWithRouter(
      <MobileMenu
        open={true}
        onClose={vi.fn()}
        routes={routes}
        homeRoute={appRoutes.home}
        loginRoute={appRoutes.login}
      />,
    );

    const [, ...links] = screen.getAllByRole('link');
    links.forEach((link, index) => {
      if (index < routes.length) {
        expect(link).toHaveAttribute(
          'aria-label',
          `Ir a la página de ${routes[index].name}`,
        );
      } else {
        expect(link).toHaveAttribute(
          'aria-label',
          'Ir a la página de Iniciar sesión',
        );
      }
    });
  });

  it('should call onClose when the close button is clicked', () => {
    const mockOnClose = vi.fn();

    renderWithRouter(
      <MobileMenu
        open={true}
        onClose={mockOnClose}
        routes={routes}
        homeRoute={appRoutes.home}
        loginRoute={appRoutes.login}
      />,
    );

    const closeButton = screen.getByRole('button', { name: 'Cerrar menú' });
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should not render the links when the menu is closed', () => {
    renderWithRouter(
      <MobileMenu
        open={false}
        onClose={vi.fn()}
        routes={routes}
        homeRoute={appRoutes.home}
        loginRoute={appRoutes.login}
      />,
    );

    const links = screen.queryAllByRole('link');
    expect(links.length).toBe(0);
  });

  it('should not render the close button when the menu is closed', () => {
    renderWithRouter(
      <MobileMenu
        open={false}
        onClose={vi.fn()}
        routes={routes}
        homeRoute={appRoutes.home}
        loginRoute={appRoutes.login}
      />,
    );

    const closeButton = screen.queryByRole('button', { name: 'Cerrar menú' });
    expect(closeButton).not.toBeInTheDocument();
  });
});

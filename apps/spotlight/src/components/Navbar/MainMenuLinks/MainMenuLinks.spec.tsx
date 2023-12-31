import { fireEvent, screen } from '@testing-library/react';
import { MainRoutes, appRoutes, getMainMenuRoutes } from '../../../routes';
import { renderWithRouter } from '../../../test';
import { MainMenuLinks } from './MainMenuLinks';

describe('MainMenuLinks Component', () => {
  let routes: MainRoutes;

  beforeAll(() => {
    routes = getMainMenuRoutes();
  });

  it('should render', () => {
    renderWithRouter(<MainMenuLinks routes={routes} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(routes.length);
  });

  it('should have the correct aria-label for each link', () => {
    renderWithRouter(<MainMenuLinks routes={routes} />);
    const links = screen.getAllByRole('link');
    links.forEach((link, index) => {
      expect(link).toHaveAttribute(
        'aria-label',
        `Ir a la página de ${routes[index].name}`,
      );
    });
  });

  it('should update aria-current when location changes', () => {
    renderWithRouter(<MainMenuLinks routes={routes} />, {
      route: appRoutes.home.path,
      additionalEntries: [appRoutes.about.path],
    });

    const homeLink = screen.getByText(appRoutes.home.name);
    const aboutLink = screen.getByText(appRoutes.about.name);

    expect(homeLink).toHaveAttribute('aria-current', 'page');
    expect(aboutLink.getAttribute('aria-current')).toBeNull();

    fireEvent.click(aboutLink);

    expect(homeLink.getAttribute('aria-current')).toBeNull();
    expect(aboutLink).toHaveAttribute('aria-current', 'page');
  });

  it('shoud not set aria-current when location does not match', () => {
    renderWithRouter(<MainMenuLinks routes={routes} />, {
      route: '/non-existing-route',
    });
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).not.toHaveAttribute('aria-current');
    });
  });
});

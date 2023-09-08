import { screen } from '@testing-library/react';
import { APP_NAME } from '../../../constants';
import { appRoutes } from '../../../routes';
import { renderWithRouter } from '../../../test';
import { BrandLogo } from './BrandLogo';

describe('BrandLogo Component', () => {
  const { home, about } = appRoutes;

  it('should render', () => {
    renderWithRouter(<BrandLogo route={home} />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('should have an aria-label attribute', () => {
    renderWithRouter(<BrandLogo route={home} />);
    const link = screen.getByRole('link');
    expect(link.getAttribute('aria-label')).toEqual(
      `Ir a la página de ${home.name}`,
    );
  });

  it('should conditionally set aria-current based on the current route', () => {
    const { unmount } = renderWithRouter(<BrandLogo route={home} />, {
      route: home.path,
    });
    const link = screen.getByRole('link');
    expect(link.getAttribute('aria-current')).toEqual('page');

    // Unmount previous component to avoid having multiple Link components in the DOM
    unmount();

    // For non-matching route
    renderWithRouter(<BrandLogo route={home} />, { route: about.path });
    const newLink = screen.getByRole('link');
    expect(newLink.getAttribute('aria-current')).toBeNull();
  });

  it('should have sr-only text for screen readers', () => {
    renderWithRouter(<BrandLogo route={home} />);
    const srOnlyText = screen.getByText(APP_NAME, { selector: 'span' });
    expect(srOnlyText).toBeInTheDocument();
    expect(srOnlyText).toHaveClass('sr-only');
  });

  it('should have alt text for logo image', () => {
    renderWithRouter(<BrandLogo route={home} />);
    const image = screen.getByAltText((content, element) => {
      if (!element) return false;

      return element.tagName.toLowerCase() === 'img' && content === APP_NAME;
    });
    expect(image).toBeInTheDocument();
  });
});

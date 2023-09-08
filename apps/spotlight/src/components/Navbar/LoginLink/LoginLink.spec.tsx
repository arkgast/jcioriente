import { screen } from '@testing-library/react';
import { appRoutes } from '../../../routes';
import { renderWithRouter } from '../../../test';
import { LoginLink } from './LoginLink';

describe('LoginLink Component', () => {
  it('should render', () => {
    renderWithRouter(<LoginLink route={appRoutes.login} />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('should have the correct aria-label', () => {
    renderWithRouter(<LoginLink route={appRoutes.login} />);
    const link = screen.getByRole('link');
    expect(link.getAttribute('aria-label')).toEqual(
      `Ir a la página de ${appRoutes.login.name}`,
    );
  });

  it('should set aria-hidden to true for the arrow symbol', () => {
    renderWithRouter(<LoginLink route={appRoutes.login} />);

    const arrow = screen.getByRole('link').querySelector('span');
    expect(arrow).toHaveAttribute('aria-hidden', 'true');
  });
});

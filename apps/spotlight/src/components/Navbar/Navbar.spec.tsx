import { fireEvent, screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import { renderWithRouter } from '../../test';

describe('Navbar Component', () => {
  it('should render the component', () => {
    renderWithRouter(<Navbar />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('should have the correct aria-current attribute', () => {
    renderWithRouter(<Navbar />, { route: '/projects' });

    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      if (link.getAttribute('href') === '/projects') {
        expect(link).toHaveAttribute('aria-current', 'page');
      } else {
        expect(link).not.toHaveAttribute('aria-current');
      }
    });
  });

  it('should have the correct aria-expanded attribute', () => {
    renderWithRouter(<Navbar />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});

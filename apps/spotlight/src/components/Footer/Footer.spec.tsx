import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test';
import { Footer, socialNetworks, mainNavigation } from './Footer';

describe('Footer', () => {
  it('should render successfully', () => {
    renderWithRouter(<Footer />);
    const footer = screen.getByRole('navigation');
    expect(footer).toBeInTheDocument();
  });

  it('should render the correct links', () => {
    renderWithRouter(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mainNavigation.length + socialNetworks.length);
  });

  it('should render the correct social networks', () => {
    renderWithRouter(<Footer />);
    const links = screen.getAllByRole('link');
    const socialNetworksLinks = links.slice(
      mainNavigation.length,
      links.length,
    );
    expect(socialNetworksLinks).toHaveLength(socialNetworks.length);
  });

  it('should render the correct main navigation', () => {
    renderWithRouter(<Footer />);
    const links = screen.getAllByRole('link');
    const mainNavigationLinks = links.slice(0, mainNavigation.length);
    expect(mainNavigationLinks).toHaveLength(mainNavigation.length);
  });

  it('should render the correct social networks icons', () => {
    renderWithRouter(<Footer />);
    const links = screen.getAllByRole('link');
    const socialNetworksLinks = links.slice(
      mainNavigation.length,
      links.length,
    );
    socialNetworksLinks.forEach((_, index) => {
      const socialNetworkName = socialNetworks[index].name;
      const icon = screen.getByText(socialNetworkName);
      expect(icon).toBeInTheDocument();
    });
  });

  it('should render the correct social networks links', () => {
    renderWithRouter(<Footer />);
    const links = screen.getAllByRole('link');
    const socialNetworksLinks = links.slice(
      mainNavigation.length,
      links.length,
    );
    socialNetworksLinks.forEach((link, index) => {
      const socialNetworkHref = socialNetworks[index].href;
      expect(link).toHaveAttribute('href', socialNetworkHref);
    });
  });

  it('should render the correct main navigation links', () => {
    renderWithRouter(<Footer />);
    const links = screen.getAllByRole('link');
    const mainNavigationLinks = links.slice(0, mainNavigation.length);
    mainNavigationLinks.forEach((link, index) => {
      const mainNavigationHref = mainNavigation[index].to;
      expect(link).toHaveAttribute('href', mainNavigationHref);
    });
  });

  it('should render the correct main navigation names', () => {
    renderWithRouter(<Footer />);
    const links = screen.getAllByRole('link');
    const mainNavigationLinks = links.slice(0, mainNavigation.length);
    mainNavigationLinks.forEach((link, index) => {
      const mainNavigationName = mainNavigation[index].name;
      expect(link).toHaveTextContent(mainNavigationName);
    });
  });
});

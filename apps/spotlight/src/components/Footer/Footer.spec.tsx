import { NestedRoute } from '@jcioriente/types';
import { fireEvent, screen } from '@testing-library/react';
import { AppRoutes, getChildrenRoutes } from '../../routes';
import { renderWithRouter } from '../../test';
import { Footer, socialMediaLinks } from './Footer';

describe('Footer', () => {
  let mainNavigation: NestedRoute[];

  beforeEach(() => {
    mainNavigation = getChildrenRoutes(AppRoutes.footerNavigation);
  });

  it('should render successfully', () => {
    renderWithRouter(<Footer />);
    const footer = screen.getByRole('navigation');
    expect(footer).toBeInTheDocument();
  });

  it('should render the correct links', () => {
    renderWithRouter(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mainNavigation.length + socialMediaLinks.length);
  });

  it('should render the correct social networks', () => {
    renderWithRouter(<Footer />);
    const links = screen.getAllByRole('link');
    const socialNetworksLinks = links.slice(
      mainNavigation.length,
      links.length,
    );
    expect(socialNetworksLinks).toHaveLength(socialMediaLinks.length);
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
      const socialNetworkName = socialMediaLinks[index].name;
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
      const socialNetworkHref = socialMediaLinks[index].path;
      expect(link.getAttribute('href')).toEqual(socialNetworkHref);
    });
  });

  it('should render the correct main navigation links', () => {
    renderWithRouter(<Footer />);
    const links = screen.getAllByRole('link');
    const mainNavigationLinks = links.slice(0, mainNavigation.length);
    mainNavigationLinks.forEach((link, index) => {
      const mainNavigationHref = mainNavigation[index].path;
      expect(link.getAttribute('href')).toEqual(mainNavigationHref);
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

  it('should change aria-current when the route changes', () => {
    const footerLinks = AppRoutes.footerNavigation.children;
    if (!footerLinks) {
      return expect(footerLinks).toBeDefined();
    }

    renderWithRouter(<Footer />, {
      route: footerLinks.history.path,
      additionalEntries: [footerLinks.activities.path],
    });

    const historyLink = footerLinks.history;
    const activitiesLink = footerLinks.activities;

    const historyLinkElement = screen.getByText(historyLink.name);
    const activitiesLinkElement = screen.getByText(activitiesLink.name);

    expect(historyLinkElement).toHaveAttribute('aria-current', 'page');
    expect(activitiesLinkElement).not.toHaveAttribute('aria-current', 'page');

    fireEvent.click(activitiesLinkElement);

    expect(historyLinkElement).not.toHaveAttribute('aria-current', 'page');
    expect(activitiesLinkElement).toHaveAttribute('aria-current', 'page');
  });
});

import { BaseRoute, NestedRoute, Route } from '@jcioriente/types';
import { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { LoginLink } from './LoginLink';
import { MainMenuLinks } from './MainMenuLinks';
import { MobileMenu } from './MobileMenu';
import { MobileMenuButton } from './MobileMenuButton';

const MobileMenuState = {
  Open: 'open',
  Closed: 'closed',
};

type NavbarProps = {
  routes: Route<Record<string, NestedRoute>>[];
  homeRoute: BaseRoute;
  loginRoute: BaseRoute;
};

export function Navbar({ routes, loginRoute, homeRoute }: NavbarProps) {
  const [mobileMenuState, setMobileMenuState] = useState(
    MobileMenuState.Closed,
  );

  function handleMenuOpen() {
    setMobileMenuState(MobileMenuState.Open);
  }

  function handleMenuClose() {
    setMobileMenuState(MobileMenuState.Closed);
  }

  return (
    <>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <BrandLogo route={homeRoute} />
        </div>
        <div className="flex lg:hidden">
          <MobileMenuButton
            onClick={handleMenuOpen}
            isExpanded={mobileMenuState === MobileMenuState.Open}
          />
        </div>
        <MainMenuLinks routes={routes} />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LoginLink route={loginRoute} />
        </div>
      </nav>
      <MobileMenu
        open={mobileMenuState === MobileMenuState.Open}
        onClose={handleMenuClose}
        routes={routes}
        loginRoute={loginRoute}
        homeRoute={homeRoute}
      />
    </>
  );
}

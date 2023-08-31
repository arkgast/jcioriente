import { useState } from 'react';
import { AppRoutes, getMainMenuRoutes } from '../../routes';
import { BrandLogo } from './BrandLogo';
import { LoginLink } from './LoginLink';
import { MainMenuLinks } from './MainMenuLinks';
import { MobileMenu } from './MobileMenu';
import { MobileMenuButton } from './MobileMenuButton';

const MobileMenuState = {
  Open: 'open',
  Closed: 'closed'
}

export function Navbar() {
  const { home, login } = AppRoutes
  const appRoutes = getMainMenuRoutes()

  const [mobileMenuState, setMobileMenuState] = useState(MobileMenuState.Closed);

  function handleMenuOpen() {
    setMobileMenuState(MobileMenuState.Open)
  }

  function handleMenuClose() {
    setMobileMenuState(MobileMenuState.Closed)
  }

  return (
    <>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <BrandLogo route={home} />
        </div>
        <div className="flex lg:hidden">
          <MobileMenuButton
            onClick={handleMenuOpen}
            isExpanded={mobileMenuState === MobileMenuState.Open}
          />
        </div>
        <MainMenuLinks routes={appRoutes} />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LoginLink route={login} />
        </div>
      </nav>
      <MobileMenu
        open={mobileMenuState === MobileMenuState.Open}
        onClose={handleMenuClose}
        routes={appRoutes}
        loginRoute={login}
        homeRoute={home}
      />
    </>
  );
}

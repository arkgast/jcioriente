import { Bars3Icon } from '@heroicons/react/24/outline';
import { BaseRoute, NestedRoute, Route } from '@jcioriente/types';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { MainMenuLinks } from './MainMenuLinks';
import { MobileMenu } from './MobileMenu';

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
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={handleMenuOpen}
            aria-expanded={mobileMenuState === MobileMenuState.Open}
          >
            <span className="sr-only">Abrir menu principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <MainMenuLinks routes={routes} />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            to={loginRoute.path}
            className={({ isActive }) => {
              const baseClasses = 'main-menu-link';
              if (!isActive) {
                return baseClasses;
              }
              return `${baseClasses} text-secondary hover:brightness-110`;
            }}
            aria-label={`Ir a la página de ${loginRoute.name}`}
          >
            {loginRoute.name} <span aria-hidden="true">&rarr;</span>
          </NavLink>
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

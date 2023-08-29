import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes, Route } from '../routes';

const appRoutes = Object.entries(AppRoutes)
  .map(([_, route]) => route)
  .filter(route => route.menuSettings.displayInMainMenu);

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <Dialog as="div" className="lg:hidden" open={open} onClose={onClose}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <BrandLogo />
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={onClose}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {appRoutes.map((route) => (
                <Link
                  key={route.name}
                  to={route.path}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {route.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Link
                to={AppRoutes.login.path}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {AppRoutes.login.name}
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

function MobileMenuButton({ onClick }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={onClick}
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}

function MainMenuLinks({ routes }: { routes: Route[] }) {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {routes.map(route => (
        <Link key={route.name} to={route.path} className="text-sm font-semibold leading-6 text-gray-900">
          {route.name}
        </Link>
      ))}
    </div>
  );
}

function BrandLogo() {
  return (
    <Link to={AppRoutes.home.path} className="-m-1.5 p-1.5">
      <span className="sr-only">JCI Oriente</span>
      <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt=""
      />
    </Link>
  )
}

function LoginLink() {
  return (
    <Link to={AppRoutes.login.path} className="text-sm font-semibold leading-6 text-gray-900">
      {AppRoutes.login.name} <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <BrandLogo />
        </div>
        <div className="flex lg:hidden">
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
        </div>
        <MainMenuLinks routes={appRoutes} />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LoginLink />
        </div>
      </nav>
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}

export { Navbar };

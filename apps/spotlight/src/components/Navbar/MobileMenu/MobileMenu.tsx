import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { BaseRoute } from '@jcioriente/types';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from '../BrandLogo';

export type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  routes: BaseRoute[];
  homeRoute: BaseRoute;
  loginRoute: BaseRoute;
};

export function MobileMenu(props: MobileMenuProps) {
  const { open, onClose, routes, homeRoute, loginRoute } = props;
  const location = useLocation();

  return (
    <Dialog as="div" className="lg:hidden" open={open} onClose={onClose}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel
        className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        aria-label="Menú principal"
      >
        <div className="flex items-center justify-between">
          <BrandLogo route={homeRoute} />
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={onClose}
          >
            <span className="sr-only">Cerrar menú</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6" aria-labelledby="main-menu">
              <h2 id="main-menu" className="sr-only">
                Menu principal
              </h2>
              {routes.map((route) => (
                <Link
                  key={route.name}
                  to={route.path}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  aria-current={
                    location.pathname === route.path ? 'page' : undefined
                  }
                  aria-label={`Ir a la página de ${route.name}`}
                >
                  {route.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Link
                to={loginRoute.path}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                aria-current={
                  location.pathname === loginRoute.path ? 'page' : undefined
                }
                aria-label="Ir a la página de Iniciar sesión"
              >
                {loginRoute.name}
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

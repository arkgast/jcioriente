import { Routes, Route, NestedRoute } from '@jcioriente/types';
import { MainRoutes, MainRouteKeys, NestedRouteKeys } from './types';

export const appRoutes: Routes<MainRouteKeys, NestedRouteKeys> = {
  home: {
    path: '/',
    name: 'Inicio',
    menuSettings: {
      displayInMainMenu: true,
    },
  },
  about: {
    path: '/quienes-somos',
    name: 'Quiénes somos',
    menuSettings: {
      displayInMainMenu: true,
    },
    children: {
      history: {
        path: '/quienes-somos/historia',
        name: 'Historia',
      },
      members: {
        path: '/quienes-somos/miembros',
        name: 'Miembros',
      },
      presidents: {
        path: '/quienes-somos/presidentes',
        name: 'Presidentes',
      },
    },
  },
  projects: {
    path: '/proyectos',
    name: 'Proyectos',
    menuSettings: {
      displayInMainMenu: true,
    },
  },
  contactUs: {
    path: '/contactanos',
    name: 'Contáctanos',
    menuSettings: {
      displayInMainMenu: true,
    },
  },
  login: {
    path: '/iniciar-sesion',
    name: 'Iniciar sesión',
    menuSettings: {
      displayInMainMenu: false,
    },
  },
  footerNavigation: {
    path: '#',
    name: 'Footer navigation',
    menuSettings: {
      displayInMainMenu: false,
    },
    children: {
      apply: {
        path: '/',
        name: 'Postúlate',
      },
      activities: {
        path: '/',
        name: 'Actividades',
      },
      history: {
        path: '/',
        name: 'Historia',
      },
      alliances: {
        path: '/',
        name: 'Alianzas',
      },
    },
  },
};

// TODO: Improve Route type in order to have a better type inference.
export function getMainMenuRoutes(): MainRoutes {
  return Object.values(appRoutes).filter(
    (route) => route.menuSettings.displayInMainMenu,
  );
}

export function getChildrenRoutes(
  route: Route<Record<string, NestedRoute>>,
): NestedRoute[] {
  return Object.values(route.children ?? {});
}

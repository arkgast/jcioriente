import { Routes, Route, NestedRoute } from '@jcioriente/types';

export type RoutesKeys =
  | 'home'
  | 'about'
  | 'projects'
  | 'contactUs'
  | 'login'
  | 'footerNavigation';

type AboutChildren = 'history' | 'members' | 'presidents';
type FooterChildren = 'apply' | 'activities' | 'alliances' | 'history';

type NestedRoutes = {
  about: Record<AboutChildren, NestedRoute>;
  footerNavigation: Record<FooterChildren, NestedRoute>;
};

export const AppRoutes: Routes<RoutesKeys, NestedRoutes> = {
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
    path: '/login',
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
        path: '/postulate',
        name: 'Postúlate',
      },
      activities: {
        path: '/actividades',
        name: 'Actividades',
      },
      history: {
        path: '/quienes-somos/historia',
        name: 'Historia',
      },
      alliances: {
        path: '/alianzas',
        name: 'Alianzas',
      },
    },
  },
};

// TODO: Improve Route type in order to have a better type inference.
export function getMainMenuRoutes(): Route<Record<string, NestedRoute>>[] {
  return Object.values(AppRoutes).filter(
    (route) => route.menuSettings.displayInMainMenu,
  );
}

export function getChildrenRoutes(
  route: Route<Record<string, NestedRoute>>,
): NestedRoute[] {
  return Object.values(route.children ?? {});
}

import { Routes, Route } from '@jcioriente/types';

export type RoutesKeys = 'home' | 'about' | 'projects' | 'contactUs' | 'login';

export const AppRoutes: Routes<RoutesKeys> = {
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
};

export function getMainMenuRoutes(): Route[] {
  return Object.values(AppRoutes).filter(
    (route) => route.menuSettings.displayInMainMenu,
  );
}

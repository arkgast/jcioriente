export const Routes = {
  home: {
    path: '/',
    name: 'Inicio',
  },
  about: {
    path: '/quienes-somos',
    name: 'Quiénes somos',
    children: {
      history: {
        path: '/quienes-somos/historia',
        name: 'Historia',
      },
      presidents: {
        path: '/quienes-somos/presidentes',
        name: 'Presidentes',
      },
      members: {
        path: '/quienes-somos/miembros',
        name: 'Miembros',
      },
    },
  },
  projects: {
    path: '/proyectos',
    name: 'Proyectos',
  },
  contact: {
    path: '/contactanos',
    name: 'Contáctanos',
  },
  login: {
    path: '/login',
    name: 'Iniciar sesión',
  },
};

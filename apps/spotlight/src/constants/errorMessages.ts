export type ErrorMessage = {
  title: string;
  description: string;
};

export type ErrorMessages = {
  [key: string | number]: ErrorMessage;
};

export const errorMessages: ErrorMessages = {
  defaultError: {
    title: 'Ocurrió un error',
    description:
      'Lo sentimos, pero algo salió mal. Por favor, inténtalo de nuevo más tarde.',
  },
  404: {
    title: 'Página no encontrada',
    description:
      'Lo sentimos, no pudimos encontrar la página que estás buscando.',
  },
  400: {
    title: 'Solicitud incorrecta',
    description: 'Por favor, verifica tu entrada.',
  },
  401: {
    title: 'No autorizado',
    description: 'Por favor, inicia sesión para acceder a esta página.',
  },
  403: {
    title: 'Prohibido',
    description: 'No tienes permiso para acceder a esta página.',
  },
  500: {
    title: 'Error interno del servidor',
    description: 'Algo salió mal en nuestro lado.',
  },
};

import { Link, useRouteError } from 'react-router-dom';
import { errorMessages } from '../../constants';
import { appRoutes } from '../../routes';

export function ErrorPage() {
  const error = useRouteError() as { status?: number };
  const errorStatus = error.status;

  let errorMessage = errorMessages.defaultError;
  if (errorStatus) {
    errorMessage = errorMessages[errorStatus];
  }

  return (
    <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-secondary text-base font-semibold">{errorStatus}</p>
        <h1 className="text-dark mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          {errorMessage.title}
        </h1>
        <p className="text-dark-light mt-6 text-base leading-7">
          {errorMessage.description}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={appRoutes.home.path}
            aria-label={`Ir a la página de ${appRoutes.home.name}`}
            className="bg-secondary focus-visible:outline-danger rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Ir a la página de {appRoutes.home.name}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;

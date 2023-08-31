import { Link, useRouteError } from 'react-router-dom'
import { errorMessages } from '../constants'
import { AppRoutes } from '../routes'

export function ErrorPage() {
  const error = useRouteError()

  let errorMessage = errorMessages.defaultError
  const errorStatus = (error as { status?: number })?.status
  if (errorStatus) {
    errorMessage = errorMessages[errorStatus]
  }

  return (
    <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-secondary">{errorStatus}</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-dark sm:text-5xl">{errorMessage.title}</h1>
        <p className="mt-6 text-base leading-7 text-dark-light">{errorMessage.description}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={AppRoutes.home.path}
            className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-secondary hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger"
          >
            Ir a la página de Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

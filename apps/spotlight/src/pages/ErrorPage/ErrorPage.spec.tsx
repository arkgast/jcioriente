import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../test'
import { ErrorPage } from './ErrorPage'
import { errorMessages } from '../../constants'
import * as reactRouterDom from 'react-router-dom'
import { AppRoutes } from '../../routes'

// Mock react-router-dom
// TODO: Investigate. For some reason it requires to return the actual module
// with the spread operator in order to work.
// Otherwise is not possible to spy on the useRouteError hook.
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")
  return {
    ...(actual || {}),
  }
})


describe('ErrorPage Component', () => {
  it('should display the default error message when there is no error status', () => {
    vi.spyOn(reactRouterDom, "useRouteError").mockImplementation(() => ({ status: null }))

    const { defaultError } = errorMessages
    renderWithRouter(<ErrorPage />)
    expect(screen.getByText(defaultError.title)).toBeInTheDocument()
    expect(screen.getByText(defaultError.description)).toBeInTheDocument()
  })

  it('should display the error message according to the error status', async () => {
    vi.spyOn(reactRouterDom, "useRouteError").mockImplementation(() => ({ status: 404 }))

    const { 404: error404 } = errorMessages
    renderWithRouter(<ErrorPage />)
    expect(screen.getByText(error404.title)).toBeInTheDocument()
    expect(screen.getByText(error404.description)).toBeInTheDocument()
  })

  it('should have the correct aria-label for the link', () => {
    renderWithRouter(<ErrorPage />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('aria-label', `Ir a la página de ${AppRoutes.home.name}`)
  })
})

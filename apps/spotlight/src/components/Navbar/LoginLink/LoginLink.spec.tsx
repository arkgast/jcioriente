import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { LoginLink } from './LoginLink'
import { MemoryRouter } from 'react-router-dom'
import { AppRoutes } from '../../../routes'

const renderWithRouter = () => {
  return render(
    <MemoryRouter>
      <LoginLink route={AppRoutes.login} />
    </MemoryRouter>
  )
}

describe('LoginLink Component', () => {
  it('should render', () => {
    renderWithRouter()
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
  })

  it('should have the correct aria-label', () => {
    renderWithRouter()
    const link = screen.getByRole('link')
    expect(link.getAttribute('aria-label')).toEqual(`Ir a la página de ${AppRoutes.login.name}`)
  })

  it('should set aria-hidden to true for the arrow symbol', () => {
    renderWithRouter()
    const arrow = screen.getByRole('link').querySelector('span')
    expect(arrow).toHaveAttribute('aria-hidden', 'true')
  })
})

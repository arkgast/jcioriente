import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      {ui}
    </MemoryRouter>
  )
}

describe('Navbar Component', () => {
  it('should render the component', () => {
    renderWithRouter(<Navbar />)

    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('should have the correct aria-current attribute', () => {
    renderWithRouter(<Navbar />, { route: '/projects' })

    const links = screen.getAllByRole('link')
    links.forEach(link => {
      if (link.getAttribute('href') === '/projects') {
        expect(link).toHaveAttribute('aria-current', 'page')
      } else {
        expect(link).not.toHaveAttribute('aria-current')
      }
    })
  })

  it('should have the correct aria-expanded attribute', () => {
    renderWithRouter(<Navbar />)

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})

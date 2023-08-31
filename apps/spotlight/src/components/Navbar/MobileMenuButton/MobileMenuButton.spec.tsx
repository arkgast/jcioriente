import { fireEvent, render, screen } from '@testing-library/react'
import { MobileMenuButton } from './MobileMenuButton'

describe('MobileMenuButton Component', () => {
  it('should render the component', () => {
    render(
      <MobileMenuButton onClick={vi.fn()} isExpanded={true} />
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    const onClick = vi.fn()
    render(
      <MobileMenuButton onClick={onClick} isExpanded={true} />
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should have the aria-expanded attribute set to true when isExpanded is true', () => {
    render(
      <MobileMenuButton onClick={vi.fn()} isExpanded={true} />
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})

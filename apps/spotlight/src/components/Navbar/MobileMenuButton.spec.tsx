import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { MobileMenuButton } from './MobileMenuButton'

describe('MobileMenuButton Component', () => {
  it('should render the component', () => {
    render(
      <MobileMenuButton onClick={vi.fn()} />
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    const onClick = vi.fn()
    render(
      <MobileMenuButton onClick={onClick} />
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })
})

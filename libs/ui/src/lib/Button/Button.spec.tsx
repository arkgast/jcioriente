import { fireEvent, render } from '@testing-library/react';
import { Button } from './Button';
import { sizeClasses, variantColorClasses } from './buttonClasses';

describe('Button', () => {
  beforeAll(() => {
    // Mock console.warn to prevent the warnings from appearing in the test output.
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the children', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('should render the correct variations of a button', () => {
    const { getByText } = render(
      <Button variant="outline" color="primary" size="sm">
        Click me
      </Button>,
    );

    const button = getByText('Click me');
    expect(button.getAttribute('class')).toContain(
      `${variantColorClasses.outline.primary} ${sizeClasses.sm}`,
    );
  });

  it('should handle invalid props gracefully', () => {
    const { getByText } = render(
      <Button
        // @ts-expect-error - Testing invalid color prop.
        color="invalid-color"
        // @ts-expect-error - Testing invalid variant prop.
        variant="invalid-variant"
        // @ts-expect-error - Testing invalid size prop.
        size="invalid-size"
      >
        Click me
      </Button>,
    );

    const button = getByText('Click me');

    expect(button.getAttribute('class')).toContain(
      `${variantColorClasses.solid.primary} ${sizeClasses.md}`,
    );
  });

  it('should handle the click event', () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

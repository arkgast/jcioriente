import { fireEvent, render, waitFor } from '@testing-library/react';
import { Contact } from './Contact';

describe('Contact', () => {
  it('should render', () => {
    const { container } = render(<Contact />);
    expect(container).toBeTruthy();
  });

  it('should render a form', () => {
    const { container } = render(<Contact />);
    expect(container.querySelector('form')).toBeTruthy();
  });

  it('should render all fields for the form component', () => {
    const { container } = render(<Contact />);
    expect(container.querySelector('input[name="name"]')).toBeTruthy();
    expect(container.querySelector('input[name="email"]')).toBeTruthy();
    expect(container.querySelector('input[name="phone"]')).toBeTruthy();
    expect(container.querySelector('button[type="submit"]')).toBeTruthy();
  });

  it.each([
    ['', 'El nombre debe tener al menos 8 caracteres'],
    ['A'.repeat(65), 'El nombre debe tener máximo 64 caracteres'],
    ['Alejandra', 'El nombre debe tener solo letras y máximo 4 palabras'],
  ])(
    'should show an error message when the name is $errorMesssage',
    (inputValue, errorMessage) => {
      const { getByLabelText, getByText } = render(<Contact />);
      const nameInput = getByLabelText('Nombre completo');
      fireEvent.change(nameInput, inputValue);

      const submit = getByText('Postúlate!');
      fireEvent.click(submit);

      waitFor(() => {
        expect(getByLabelText(errorMessage)).toBeInTheDocument();
      });
    },
  );
});

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

  describe('Submit form', () => {
    it.each([
      ['', 'El nombre es requerido'],
      ['Ana Ana', 'El nombre debe tener mínimo 2 caracteres'],
      ['A'.repeat(65), 'El nombre debe tener máximo 64 caracteres'],
      ['Ana +', 'El nombre debe tener solo letras'],
      [' ', 'El nombre debe tener solo letras'],
      ['Ana', 'El nombre debe tener de 2 a 4 palabras'],
    ])(
      'should show an error message when the name is $errorMesssage',
      (inputValue, errorMessage) => {
        const { getByLabelText, getByText } = render(<Contact />);
        const nameInput = getByLabelText('Nombre completo');
        const submit = getByText('Postúlate!');

        fireEvent.change(nameInput, inputValue);
        fireEvent.click(submit);

        waitFor(() => {
          expect(getByLabelText(errorMessage)).toBeInTheDocument();
        });
      },
    );

    it.each([
      ['', 'El correo electrónico es requerido'],
      ['ana', 'El correo electrónico debe ser válido'],
      ['ana@gmail', 'El correo electrónico debe ser válido'],
    ])(
      'should show an error message when the email is $errorMesssage',
      (inputValue, errorMessage) => {
        const { getByLabelText, getByText } = render(<Contact />);
        const emailInput = getByLabelText('Correo electrónico');
        const submit = getByText('Postúlate!');

        fireEvent.change(emailInput, inputValue);
        fireEvent.click(submit);

        waitFor(() => {
          expect(getByLabelText(errorMessage)).toBeInTheDocument();
        });
      },
    );

    it.each([
      ['', 'El teléfono es requerido'],
      ['ana', 'El teléfono debe ser válido'],
      ['23432344', 'El teléfono fijo debe ser válido'],
      ['3343', 'El teléfono fijo debe ser válido'],
      ['43432344 ', 'El teléfono fijo debe ser válido'],
      ['782938439', 'El número de celular debe ser válido'],
      ['6', 'El número de celular debe ser válido'],
    ])(
      'show show an error message when the phone is $errorMessage',
      (inputValue, errorMessage) => {
        const { getByLabelText, getByText } = render(<Contact />);
        const phoneInput = getByLabelText('Teléfono');
        const submit = getByText('Postúlate!');

        fireEvent.change(phoneInput, inputValue);
        fireEvent.click(submit);

        waitFor(() => {
          expect(getByLabelText(errorMessage)).toBeInTheDocument();
        });
      },
    );
  });
});

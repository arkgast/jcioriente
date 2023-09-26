import { fireEvent, render, waitFor } from '@testing-library/react';
import { Login } from './Login';

describe('Login', () => {
  it('should render successfully', () => {
    const { getByText } = render(<Login />);

    expect(getByText('Inicia sesión en tu cuenta')).toBeInTheDocument();
  });

  it('should submit the form with valid data', async () => {
    const { getByLabelText, getByText } = render(<Login />);

    const emailInput = getByLabelText('Correo electrónico');
    const passwordInput = getByLabelText('Contraseña');
    fireEvent.change(emailInput, 'test@test.com');
    fireEvent.change(passwordInput, '123456');

    const submitButton = getByText('Iniciar sesión');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(emailInput).toHaveValue('');
      expect(passwordInput).toHaveValue('');
      expect(submitButton).toBeEnabled();
    });
  });

  it('should show an error message when the email is invalid', async () => {
    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText('Correo electrónico');
    const passwordInput = getByLabelText('Contraseña');
    fireEvent.change(emailInput, 'test');
    fireEvent.change(passwordInput, '123456');

    const submitButton = getByText('Iniciar sesión');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        getByText('El correo electrónico no es válido'),
      ).toBeInTheDocument();
    });
  });

  it('should show an error message when the password is invalid', async () => {
    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText('Correo electrónico');
    const passwordInput = getByLabelText('Contraseña');
    fireEvent.change(emailInput, 'test@test.com');
    fireEvent.change(passwordInput, '123');

    const submitButton = getByText('Iniciar sesión');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        getByText('La contraseña debe tener al menos 6 caracteres'),
      ).toBeInTheDocument();
    });
  });
});

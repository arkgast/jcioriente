import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@jcioriente/ui';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

// Define the shape of the form data using Zod schema.
const schema = z.object({
  email: z.string().email({ message: 'El correo electrónico no es válido' }),
  password: z
    .string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

// Define the shape of the form data.
type Inputs = {
  email: string;
  password: string;
};

export function Login() {
  // Initialize React Hook Form and set up validation using Zod schema.
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    // Simulate API call.
    setLoading(true);
    window.setTimeout(() => {
      console.log({ data });

      reset();

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
          Inicia sesión en tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          noValidate
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input
              label="Correo electrónico"
              id="email"
              type="email"
              autoComplete="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email')}
            />
          </div>

          <div>
            <Input
              label="Contraseña"
              id="password"
              type="password"
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password?.message}
              aria-invalid={errors.password ? 'true' : 'false'}
              {...register('password')}
            />
          </div>

          <div>
            <Button
              type="submit"
              className="w-full"
              color="secondary"
              disabled={loading}
            >
              Iniciar sesión
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

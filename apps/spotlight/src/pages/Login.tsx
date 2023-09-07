import { Button, Input } from '@jcioriente/ui';

export function Login() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
          Inicia sesión en tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Input
              label="Correo electrónico"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
            />
          </div>

          <div>
            <Input
              label="Contraseña"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
            />
          </div>

          <div>
            <Button type="submit" className="w-full" color="secondary">
              Iniciar sesión
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

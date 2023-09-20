import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Icon, IconNames, Input } from '@jcioriente/ui';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactForm, schema } from './schema';

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Postúlate a JCI Oriente
            </h2>
          </div>

          <div className="mt-10">
            <div>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Input
                    id="name"
                    label="Nombre completo"
                    placeholder="e.g. Baron Rojo"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    {...register('name')}
                  />
                </div>

                <div>
                  <Input
                    id="email"
                    label="Correo electrónico"
                    placeholder="e.g. baron.rojo@gmail.com"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    {...register('email')}
                  />
                </div>

                <div>
                  <Input
                    id="phone"
                    label="Teléfono"
                    placeholder="e.g. 69812308"
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    {...register('phone')}
                  />
                </div>

                <div>
                  <Button type="submit" className="w-full">
                    Postúlate!
                  </Button>
                </div>
              </form>
            </div>

            <div className="mt-10 hidden">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">o</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href="/#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] bg-[#4267b2] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                >
                  <Icon
                    name={IconNames.Facebook}
                    className="h-5 w-5 text-white"
                  />
                  <span className="text-sm font-semibold leading-6">
                    Facebook
                  </span>
                </a>

                <a
                  href="/#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] bg-[#1da1f2] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                >
                  <Icon
                    name={IconNames.Twitter}
                    className="h-5 w-5 text-white"
                  />
                  <span className="text-sm font-semibold leading-6">
                    Twitter
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default Contact;

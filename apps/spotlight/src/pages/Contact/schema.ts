import { z } from 'zod';

export const schema = z.object({
  name: z
    .string()
    .min(8, { message: 'El nombre debe tener al menos 8 caracteres' })
    .max(64, { message: 'El nombre debe tener como máximo 40 caracteres' })
    .refine((value) => /^(?:[a-zA-Z]+\s){1,3}[a-zA-Z]+/.test(value), {
      message: 'El nombre debe tener solo letras y máximo 4 palabras',
    }),
  email: z.string().email({ message: 'El correo electrónico debe ser válido' }),
  phone: z.string().min(8, { message: 'El teléfono debe tener 8 dígitos' }),
});

export type ContactForm = z.infer<typeof schema>;

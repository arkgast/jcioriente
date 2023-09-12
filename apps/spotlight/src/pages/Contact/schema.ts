import { z } from 'zod';

export const schema = z.object({
  name: z
    .string({
      required_error: 'El nombre es requerido',
    })
    .min(8, { message: 'El nombre debe tener al menos 8 caracteres' })
    .max(64, { message: 'El nombre debe tener como máximo 40 caracteres' })
    .regex(/^[a-zA-Z](?:[a-zA-Z]*\s?[a-zA-Z]+)*/g, {
      message: 'El nombre debe tener solo letras',
    })
    .regex(/^(?:\S+\s){1,3}\S+$/g, {
      message: 'El nombre debe tener de 2 a 4 palabras',
    }),
  email: z
    .string({
      required_error: 'El correo electrónico es requerido',
    })
    .email({ message: 'El correo electrónico debe ser válido' }),
  phone: z
    .string({
      required_error: 'El número de teléfono es requerido',
    })
    .regex(/^\d+$/g, {
      message: 'El número de teléfono debe ser válido',
    })
    .regex(/^[234]{1}[0-9]{6}/g, {
      message: 'El número de teléfono fijo debe ser válido',
    })
    .regex(/^[67]{1}[0-9]{7}/g, {
      message: 'El número de celular debe ser válido',
    }),
});

export type ContactForm = z.infer<typeof schema>;

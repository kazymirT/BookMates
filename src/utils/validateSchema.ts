import { z } from 'zod';

const email = z
  .string()
  .min(1, 'Це поле є обов`язковим.')
  .email('Неправильний формат електронної пошти');

const password = z
  .string()
  .min(1, 'поле є обов`язковим')
  .regex(/^(?=.*[a-zа-я])/, 'мінімум одна мала літера')
  .regex(/^(?=.*[A-ZА-Я])/, 'мінімум одна велика літера')
  .regex(/^(?=.*[0-9])/, 'мінімум одна цифра')
  .min(8, 'мінімальна кількість символів 8')
  .max(12, 'максимальна кількість символів 12');

export const loginSchema = z.object({
  email: email,
  password: password,
  rememberMe: z.boolean(),
});
export type LoginValues = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, 'поле є обов`язковим')
      .regex(/^[A-ZА-Я]/, 'Ім`я має починатись з великої літери')
      .min(4, 'мінімум 4 символи')
      .max(20, 'максимум 20 символів'),
    surName: z
      .string()
      .min(1, 'поле є обов`язковим')
      .regex(/^[A-ZА-Я]/, 'Прізвище має починатись з великої літери')
      .min(4, 'мінімум 4 символи')
      .max(20, 'максимум 20 символів'),
    email: email,
    confirmEmail: email,
    password: password,
    rememberMe: z.boolean(),
  })
  .refine((data) => data.confirmEmail === data.email, {
    path: ['confirmEmail'],
    message: 'Електрона адреса не збігається',
  });

export type RegisterValues = z.infer<typeof registerSchema>;

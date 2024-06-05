import { z } from 'zod';

import { TOPICS } from '@/utils/constants';
const accept = z.boolean().refine((data) => data === true);

const email = z
  .string()
  .min(1, 'Це поле є обов`язковим.')
  .max(25, 'максимальна кількість символів 25')
  .email('Неправильний формат електронної пошти');
const password = z
  .string()
  .min(1, 'Це поле є обов`язковим.')
  .regex(/^(?!.*\s).+$/, 'пробіли на початку, всередині і в кінці заборонені')
  .regex(/^(?=.*[a-zа-я])/, 'мінімум одна мала літера')
  .regex(/^(?=.*[A-ZА-Я])/, 'мінімум одна велика літера')
  .regex(/^(?=.*[0-9])/, 'мінімум одна цифра')
  .min(8, 'мінімальна кількість символів 8')
  .max(12, 'максимальна кількість символів 12');

export const loginSchema = z.object({
  email: email,
  password: password,
  accept: accept,
});
export type LoginValues = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(1, 'Це поле є обов`язковим.')
      .regex(/^[A-ZА-ЯІЇЄ]/, 'Ім`я має починатись з великої літери')
      .min(4, 'мінімум 4 символи')
      .max(20, 'максимум 20 символів'),
    lastName: z
      .string()
      .min(1, 'Це поле є обов`язковим.')
      .regex(/^[A-ZА-ЯІЇЄ]/, 'Прізвище має починатись з великої літери')
      .min(4, 'мінімум 4 символи')
      .max(20, 'максимум 20 символів'),
    email: email,
    confirmEmail: email,
    password: password,
    accept: accept,
  })
  .refine((data) => data.confirmEmail === data.email, {
    path: ['confirmEmail'],
    message: 'Електрона адреса не збігається',
  });

export type RegisterValues = z.infer<typeof registerSchema>;

const TopicsEnum = z.nativeEnum(TOPICS, {
  required_error: 'Це поле є обов`язковим.',
});

export const feedbackSchema = z.object({
  email: email,
  topic: TopicsEnum,
  question: z.string().min(5, { message: 'мінімум 5 символів' }),
});

export type FeedbackValues = z.infer<typeof feedbackSchema>;

export const searchSchema = z.object({
  search: z
    .string()
    .min(3, 'мінімум 3 символи')
    .max(25, 'максимум 25 символів'),
});

export type SearchValues = z.infer<typeof searchSchema>;

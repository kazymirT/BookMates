import { z } from 'zod';

import { TOPICS } from '@/utils/constants';
const accept = z.boolean().refine((data) => data === true);

const email = z
  .string()
  .min(1, 'Це поле є обов`язковим.')
  .max(30, 'максимальна кількість символів 30')
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
});
export type LoginValues = z.infer<typeof loginSchema>;

export const resetPasswordSchema = z.object({
  email: email,
});
export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

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

export const orderSchema = z.object({
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
  phone: z
    .string()
    .regex(
      /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      'Введіть дійсний номер телефону'
    ),
  city: z.string({
    required_error: 'Це поле є обов`язковим.',
    invalid_type_error: 'Це поле є обов`язковим.',
  }),
  department: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .min(4, "Це поле є обов'язковим"),
  pay: z.string(),
});

export type OrderValues = z.infer<typeof orderSchema>;
const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ['image/png'];

export const addBookSchema = z.object({
  title: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .min(1, 'Це поле є обов`язковим.'),
  authors: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .min(1, 'Це поле є обов`язковим.'),

  description: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .min(1, 'Це поле є обов`язковим.'),

  price: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^\d{1,5}(,\d{2})?$/, 'Введіть коректну ціну'),
  year: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^\d{4}$/, 'Введіть коректний рік'),
  quantity: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^\d{1,5}$/, 'Введіть коректну кількісь'),
  picture: z
    .instanceof(File)
    .optional()
    .refine((file) => {
      return file ? file.size <= MAX_UPLOAD_SIZE : false;
    }, 'File size must be less than 3MB')
    .refine((file) => {
      return file ? ACCEPTED_FILE_TYPES.includes(file.type) : false;
    }, 'File must be a PNG'),
});

export type AddBookValues = z.infer<typeof addBookSchema>;

export const addCategorySchema = z.object({
  category: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .min(1, 'Це поле є обов`язковим.'),
});

export type AddCategoryValues = z.infer<typeof addCategorySchema>;

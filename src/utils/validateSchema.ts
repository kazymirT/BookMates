import { TFunction } from 'i18next';
import { z } from 'zod';

import { ORDER_STATUS, TOPICS_VALIDATE } from '@/utils/constants';
const accept = z.boolean().refine((data) => data === true);
const acceptB = z.boolean();
const phone = z
  .string()
  .regex(
    /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
    'Введіть дійсний номер телефону'
  );
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
const getPhone = (t: TFunction<'translation', undefined>) => {
  return z
    .string()
    .regex(/^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, t?.('forms-error.phone'));
};
const getEmail = (t: TFunction<'translation', undefined>) => {
  return z
    .string()
    .min(1, { message: t?.('forms-error.email.required') })
    .max(30, { message: t?.('forms-error.email.max') })
    .email({ message: t?.('forms-error.email.email') });
};
const getPassword = (t: TFunction<'translation', undefined>) => {
  return z
    .string()
    .min(1, { message: t?.('forms-error.password.required') })
    .regex(/^(?!.*\s).+$/, { message: t?.('forms-error.password.space') })
    .regex(/^(?=.*[a-zа-я])/, {
      message: t?.('forms-error.password.lower-letter'),
    })
    .regex(/^(?=.*[A-ZА-Я])/, {
      message: t?.('forms-error.password.upper-letter'),
    })
    .regex(/^(?=.*[0-9])/, { message: t?.('forms-error.password.number') })
    .min(8, { message: t?.('forms-error.password.min') })
    .max(12, { message: t?.('forms-error.password.max') });
};
const getFirstName = (t: TFunction<'translation', undefined>) => {
  return z
    .string()
    .min(1, { message: t?.('forms-error.first-name.required') })
    .regex(/^[A-ZА-ЯІЇЄ]/, { message: t?.('forms-error.first-name.upper') })
    .min(4, { message: t?.('forms-error.first-name.min') })
    .max(20, { message: t?.('forms-error.first-name.max') });
};
const getLastName = (t: TFunction<'translation', undefined>) => {
  return z
    .string()
    .min(1, { message: t?.('forms-error.last-name.required') })
    .regex(/^[A-ZА-ЯІЇЄ]/, { message: t?.('forms-error.last-name.upper') })
    .min(4, { message: t?.('forms-error.last-name.min') })
    .max(20, { message: t?.('forms-error.last-name.max') });
};

export const getLoginSchema = (t: TFunction<'translation', undefined>) => {
  return z.object({
    email: getEmail(t),
    password: getPassword(t),
  });
};
export type LoginValues = z.infer<ReturnType<typeof getLoginSchema>>;

export const getResetPasswordSchema = (
  t: TFunction<'translation', undefined>
) => {
  return z.object({
    email: getEmail(t),
  });
};
export type ResetPasswordValues = z.infer<
  ReturnType<typeof getResetPasswordSchema>
>;
export const getRegisterSchema = (t: TFunction<'translation', undefined>) => {
  return z
    .object({
      firstName: getFirstName(t),
      lastName: getLastName(t),
      email: getEmail(t),
      confirmEmail: getEmail(t),
      password: getPassword(t),
      accept: accept,
    })
    .refine((data) => data.confirmEmail === data.email, {
      path: ['confirmEmail'],
      message: t?.('forms-error.email-confirm'),
    });
};

export type RegisterValues = z.infer<ReturnType<typeof getRegisterSchema>>;

const getTopicsEnum = (t: TFunction<'translation', undefined>) => {
  return z.nativeEnum(TOPICS_VALIDATE, {
    required_error: t?.('forms-error.topic'),
  });
};
// const getOrderEnum = (t: TFunction<'translation', undefined>) => {
//   return z.nativeEnum(ORDER_STATUS, {
//     required_error: t?.('form-error.topic'),
//   });
// };
const OrderEnum = z.nativeEnum(ORDER_STATUS, {
  required_error: 'Це поле є обов`язковим.',
});

export const getFeedbackSchema = (t: TFunction<'translation', undefined>) => {
  return z.object({
    email: getEmail(t),
    topic: getTopicsEnum(t),
    question: z.string().min(5, { message: t?.('forms-error.question') }),
  });
};

export type FeedbackValues = z.infer<ReturnType<typeof getFeedbackSchema>>;

export const getOrderSchema = (t: TFunction<'translation', undefined>) => {
  return z.object({
    firstName: getFirstName(t),
    lastName: getLastName(t),
    email: getEmail(t),
    phone: getPhone(t),
    city: z.string({
      required_error: t?.('forms-error.city'),
      invalid_type_error: t?.('forms-error.city'),
    }),
    department: z
      .string({
        required_error: t?.('forms-error.city'),
        invalid_type_error: t?.('forms-error.city'),
      })
      .min(4, t?.('form-error.required')),
    pay: z.string(),
  });
};

export type OrderValues = z.infer<ReturnType<typeof getOrderSchema>>;
const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ['image/png'];

export const editBookSchema = z.object({
  title: z
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
  authorNames: z.string().array().nonempty({ message: 'Мінімум один автор' }),
  categoryNames: z
    .string()
    .array()
    .nonempty({ message: 'Мінімум одна категорія' }),
  languageNames: z.string().array().nonempty({ message: 'Мінімум одна мова' }),
  price: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^\d{1,5}(,\d{2})?$/, 'Введіть коректну ціну'),
  discount: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^\d{1,2}?$/, 'Введіть коректний відсоток знижки'),
  year: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^\d{4}$/, 'Введіть коректний рік'),
  totalQuantity: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^\d{1,5}$/, 'Введіть коректну кількісь'),
  isExpected: acceptB,
});
export type EditBookValues = z.infer<typeof editBookSchema>;

export const pictureSchema = z.object({
  picture: z
    .instanceof(FileList)
    .optional()
    .refine((file) => {
      return file?.length ? file[0].size <= MAX_UPLOAD_SIZE : false;
    }, 'File size must be less than 3MB')
    .refine((file) => {
      return file?.length ? ACCEPTED_FILE_TYPES.includes(file[0].type) : false;
    }, 'File must be a PNG'),
});

export type PictureValues = z.infer<typeof pictureSchema>;

export const addBookSchema = editBookSchema.extend({
  picture: pictureSchema,
});
export type AddBookValues = z.infer<typeof addBookSchema>;

export const addAttributesSchema = z.object({
  attributes: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .min(1, 'Це поле є обов`язковим.'),
});

export type AddAttributesValues = z.infer<typeof addAttributesSchema>;

export const userInfoSchema = z.object({
  userId: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^\d{1,9}$/, 'Введіть коректний id'),
  date: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^\d{4}(.\d{2})(.\d{2})$/, 'Введіть коректну дату'),
  name: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .min(1, 'Це поле є обов`язковим.'),
  city: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .min(1, 'Це поле є обов`язковим.'),
  phone: phone,
  email: email,
  password: password,
});

export type UserInfoValues = z.infer<typeof userInfoSchema>;

export const userNotInfoSchema = z.object({
  name: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .min(1, 'Це поле є обов`язковим.'),
  city: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .min(1, 'Це поле є обов`язковим.'),
  phone: phone,
  email: email,
});

export type UserNotInfoValues = z.infer<typeof userNotInfoSchema>;

export const orderListSchema = z.object({
  orderId: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^\d{1,5}$/, 'Введіть коректне id'),
  userId: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^\d{1,5}$/, 'Введіть коректне id'),
  book: z
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

  quantity: z
    .string({
      required_error: 'Це поле є обов`язковим.',
      invalid_type_error: 'Це поле є обов`язковим.',
    })
    .regex(/^\d{1,5}$/, 'Введіть коректну кількісь'),
  status: OrderEnum,
});

export type OrderListValues = z.infer<typeof orderListSchema>;

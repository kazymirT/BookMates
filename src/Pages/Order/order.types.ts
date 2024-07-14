import { Control, UseFormRegisterReturn, FieldErrors } from 'react-hook-form';

export type PersonalInfoFormProps = {
  register: {
    firstName: UseFormRegisterReturn<'firstName'>;
    lastName: UseFormRegisterReturn<'lastName'>;
    email: UseFormRegisterReturn<'email'>;
    phone: UseFormRegisterReturn<'phone'>;
  };
  errors: FieldErrors<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    department: string;
    pay: string;
  }>;
};

export type NovaPoshtaFormProps = {
  control: Control<
    {
      city: string;
      department: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      pay: string;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;
  errors: FieldErrors<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    department: string;
    pay: string;
  }>;
};

export interface InputProps {
  title: string;
  variant: 'phone' | 'email';
  defaultValues: {
    email?: string;
    phone?: string;
  };
}

export interface RadioFormProps {
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  variant?: 'user' | 'sort';
}

export interface RadioFormProps {
  options: string[];
  defaultValue?: string;
  onChange: (value: string) => void;
}

export interface RadioBtnProps {
  id: string;
  value: string;
  name: string;
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

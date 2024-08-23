export type InputProps = {
  errorMessage?: string;
  placeholder: string;
  onChange: (newValue: FileList | undefined) => void;
};

export type DropdownProps = {
  options: React.ReactNode;
  control: React.ReactNode;
  variant: 'menu' | 'category' | 'filter';
  tagName: string;
  isOverflow?: boolean;
};

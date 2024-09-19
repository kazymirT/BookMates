import { BookById } from '@/redux/services/services.types';

export interface EditBookProps {
  id: number;
  book: BookById;
  handleClose: () => void;
  handleOpenPopup: () => void;
}

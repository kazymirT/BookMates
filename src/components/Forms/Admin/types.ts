import { BookById } from '@/redux/services/services.types';

export interface EditBookProps {
  book: BookById;
  handleClose: () => void;
  handleOpenPopup: () => void;
}

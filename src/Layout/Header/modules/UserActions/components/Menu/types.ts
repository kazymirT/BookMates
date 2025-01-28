import { ModalState } from '@/redux/slices/modalSlice';

export interface MenuProps {
  onClose: () => void;
}

export type MenuItem = {
  key: string;
  label: string;
  modalType: ModalState['openedModalType'];
};

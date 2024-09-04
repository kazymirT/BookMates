import { InputAdminProps } from '../InputAdmin/InputAdmin.types';

export interface InputFileProps extends InputAdminProps {
  onReset?: () => void;
  onClean?: () => void;
}

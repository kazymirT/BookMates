import { render } from '@testing-library/react';
import { vi } from 'vitest';

import DeletePopup from '../DeletePopup';
import { DeletePopupProps } from '../types';

export const setup = (props?: Partial<DeletePopupProps>) => {
  const defaultProps: DeletePopupProps = {
    onClose: props?.onClose ?? vi.fn(),
    onDelete: props?.onDelete ?? vi.fn(),
    ...props,
  };

  return render(<DeletePopup {...defaultProps} />);
};

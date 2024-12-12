import { render } from '@testing-library/react';
import { vi } from 'vitest';

import InputAdmin from '../InputAdmin';
import { InputAdminProps } from '../InputAdmin.types';

export const setup = (props?: Partial<InputAdminProps>) => {
  const mockOnChange = vi.fn();
  const defaultProps: InputAdminProps = {
    onChange: mockOnChange,
    ...props,
  };

  return render(<InputAdmin {...defaultProps} />);
};

import { render } from '@testing-library/react';
import { vi } from 'vitest';

import InputFile from '../InputFile';
import { InputFileProps } from '../InputFile.types';

export const setup = (props?: Partial<InputFileProps>) => {
  const mockOnChange = vi.fn();
  const defaultProps: InputFileProps = {
    onChange: mockOnChange,
    ...props,
  };

  return render(<InputFile {...defaultProps} />);
};

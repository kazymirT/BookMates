import { render } from '@testing-library/react';

import Input from '../Input';
import { InputProps } from '../Input.types';

export const setup = (props?: Partial<InputProps>) => {
  const defaultProps: InputProps = {
    ...props,
  };

  return render(<Input {...defaultProps} />);
};

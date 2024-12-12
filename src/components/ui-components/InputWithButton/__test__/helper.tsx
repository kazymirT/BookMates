import { render } from '@testing-library/react';

import InputWithButton from '../InputWithButton';
import { InputWithButtonProps } from '../InputWithButton.types';

export const setup = (props?: Partial<InputWithButtonProps>) => {
  const defaultProps: InputWithButtonProps = {
    variant: props?.variant ?? 'email',
    ...props,
  };

  return render(<InputWithButton {...defaultProps} />);
};

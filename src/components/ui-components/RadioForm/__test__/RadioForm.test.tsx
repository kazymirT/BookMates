import { render, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';

import RadioForm from '../RadioForm';
import { RadioFormProps } from '../types';

describe('RadioForm', () => {
  const setup = (props?: Partial<RadioFormProps>) => {
    const defaultProps: RadioFormProps = {
      options: ['Option 1', 'Option 2', 'Option 3'],
      value: '',
      onChange: vi.fn(),
      ...props,
    };

    return render(<RadioForm {...defaultProps} />);
  };

  it('renders the radio buttons correctly', () => {
    const { getByLabelText } = setup();

    expect(getByLabelText('Option 1')).toBeInTheDocument();
    expect(getByLabelText('Option 2')).toBeInTheDocument();
    expect(getByLabelText('Option 3')).toBeInTheDocument();
  });

  it('sets the default selected value', () => {
    const { getByLabelText } = setup({ value: 'Option 2' });

    const option2 = getByLabelText('Option 2') as HTMLInputElement;

    expect(option2.checked).toBe(true);
  });

  it('calls onChange when a radio button is clicked', () => {
    const mockOnChange = vi.fn();
    const { getByLabelText } = setup({ onChange: mockOnChange });

    const option3 = getByLabelText('Option 3');

    fireEvent.click(option3);

    expect(mockOnChange).toHaveBeenCalledWith('Option 3');
  });

  it('handles no default value gracefully', () => {
    const { getByLabelText } = setup();

    const option1 = getByLabelText('Option 1') as HTMLInputElement;
    const option2 = getByLabelText('Option 2') as HTMLInputElement;

    expect(option1.checked).toBe(false);
    expect(option2.checked).toBe(false);
  });
});

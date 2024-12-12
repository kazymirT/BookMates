import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, vi, expect, afterEach } from 'vitest';

import { SELECT_DROP_INDICATOR } from '../constants';
import SelectMulti from '../SelectMulti';
import { SelectProps } from '../SelectMulti.types';

describe('SelectMulti', () => {
  afterEach(() => {
    cleanup();
  });
  const mockOptions = [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
  ];
  const mockOnChange = vi.fn();

  const setup = (props?: Partial<SelectProps>) => {
    const defaultProps: SelectProps = {
      value: [],
      options: mockOptions,
      onChange: mockOnChange,
      error: false,
      helperText: '',
      style: undefined,
      ...props,
    };

    return render(<SelectMulti {...defaultProps} />);
  };

  it('renders the select multi component with options', async () => {
    const user = userEvent.setup();
    const { getByText, getByTestId } = setup();

    const dropdownIndicator = getByTestId(SELECT_DROP_INDICATOR);
    expect(dropdownIndicator).toBeInTheDocument();

    await user.click(dropdownIndicator!);

    mockOptions.forEach((option) => {
      expect(getByText(option.label)).toBeInTheDocument();
    });
  });

  it('displays selected values', () => {
    const { getByText } = setup({
      value: ['Option 1'],
    });

    expect(getByText('Option 1')).toBeInTheDocument();
  });

  it('applies the error class when error is true', () => {
    const { container } = setup({ error: true });

    expect(container.querySelector('.container-error')).toBeInTheDocument();
  });

  it('displays helper text when provided', () => {
    const helperText = 'This is a helper message.';
    const { getByText } = setup({ helperText });

    expect(getByText(helperText)).toBeInTheDocument();
  });

  it('applies the secondary style when the style prop is set', () => {
    const { container } = setup({ style: 'secondary' });

    expect(container.querySelector('.secondary')).toBeInTheDocument();
  });

  it('highlights options on hover', async () => {
    const user = userEvent.setup();
    const { getByText, container } = setup();

    const dropdownIndicator = container.querySelector('.indicator');
    await user.click(dropdownIndicator!);

    const option = getByText('Option 1');
    await user.hover(option);

    expect(option).toHaveClass('option_focused');
  });
});

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, vi, expect } from 'vitest';

import { SELECT_INDICATOR_TEST_ID } from '../constants';
import Select from '../Select';
import { SelectProps } from '../Select.types';

describe('Select', () => {
  const mockOptions = ['Option 1', 'Option 2', 'Option 3'];
  const mockOnChange = vi.fn();

  const setup = (props?: Partial<SelectProps>) => {
    const defaultProps: SelectProps = {
      value: '',
      options: mockOptions,
      onChange: mockOnChange,
      error: false,
      helperText: '',
      style: undefined,
      ...props,
    };

    return render(<Select {...defaultProps} />);
  };

  it('renders the select component with options', async () => {
    const user = userEvent.setup();
    const { getByText, getByTestId } = setup();

    await user.click(getByTestId(SELECT_INDICATOR_TEST_ID));

    mockOptions.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });

  it('displays the correct selected value', () => {
    const { getByText } = setup({ value: 'Option 2' });

    // Перевіряємо, чи відображається вибране значення
    expect(getByText('Option 2')).toBeInTheDocument();
  });

  it('calls onChange with the correct value when an option is selected', async () => {
    const user = userEvent.setup();
    const { getByText, getByTestId } = setup();

    await user.click(getByTestId(SELECT_INDICATOR_TEST_ID));

    await user.click(getByText('Option 1'));

    expect(mockOnChange).toHaveBeenCalledWith('Option 1');
  });

  it('applies the error class when error is true', () => {
    const { container } = setup({ error: true });

    // Перевіряємо, чи додано клас помилки
    expect(container.querySelector('.container-error')).toBeInTheDocument();
  });

  it('displays helper text when provided', () => {
    const helperText = 'This is a helper message.';
    const { getByText } = setup({ helperText });

    // Перевіряємо, чи відображається допоміжний текст
    expect(getByText(helperText)).toBeInTheDocument();
  });

  it('applies the secondary style when the style prop is set', () => {
    const { container } = setup({ style: 'secondary' });

    // Перевіряємо, чи додано стиль secondary
    expect(container.querySelector('.secondary')).toBeInTheDocument();
  });

  it('renders a custom dropdown indicator', () => {
    const { container } = setup();

    // Перевіряємо, чи відображається кастомний індикатор
    expect(container.querySelector('.indicator')).toBeInTheDocument();
  });

  it('highlights options on hover', async () => {
    const user = userEvent.setup();
    const { getByText, getByTestId } = setup();

    await user.click(getByTestId(SELECT_INDICATOR_TEST_ID));

    const option = getByText('Option 1');

    user.hover(option);

    expect(option).toHaveClass('option_focused');
  });
});

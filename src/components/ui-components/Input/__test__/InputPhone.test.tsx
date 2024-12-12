import { cleanup, fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { INPUT_PHONE_REQUIRED } from '../constants';
import InputPhone from '../InputPhone';

describe('InputPhone Component', () => {
  afterEach(() => {
    cleanup();
  });
  it('renders the input with default props', () => {
    const placeholder = 'Enter your phone';
    const { getByText, getByRole } = render(
      <InputPhone placeholder={placeholder} />
    );

    const input = getByRole('textbox');
    const span = getByText(placeholder);

    expect(input).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(span).toHaveClass('span');
    expect(span).not.toHaveClass('span-active');
  });

  it('shows required message when requiredMessage prop is provided', () => {
    const placeholder = 'Phone is required';
    const { getByTestId } = render(
      <InputPhone placeholder={placeholder} requiredMessage />
    );

    const requiredMessage = getByTestId(INPUT_PHONE_REQUIRED);

    expect(requiredMessage).toHaveTextContent(placeholder);
  });

  it('updates input value and activates span on input', async () => {
    const user = userEvent.setup();
    const { getByRole, getByText } = render(<InputPhone placeholder="Phone" />);

    const input = getByRole('textbox');
    const span = getByText('Phone');

    await user.type(input, '1234567890');

    expect(input).toHaveValue('+38 (123) 456-78-90');
    expect(span).toHaveClass('span-active');
  });

  it('handles focus and blur events correctly', async () => {
    const focusMock = vi.fn();
    const blurMock = vi.fn();
    const user = userEvent.setup();
    const { getByRole, getByText } = render(
      <InputPhone placeholder="Phone" onFocus={focusMock} onBlur={blurMock} />
    );

    const input = getByRole('textbox');
    const span = getByText('Phone');

    expect(span).toHaveClass('span');
    expect(span).not.toHaveClass('span-active');

    await user.click(span);
    expect(focusMock).toHaveBeenCalledOnce();
    expect(span).toHaveClass('span-active');

    await fireEvent.blur(input);
    expect(blurMock).toHaveBeenCalledOnce();
  });

  it('displays an error message when provided', () => {
    const errorMessage = 'Invalid phone number';
    const { getByText } = render(
      <InputPhone placeholder="Phone" errorMessage={errorMessage} />
    );

    const error = getByText(errorMessage);

    expect(error).toBeInTheDocument();
    expect(error).toHaveClass('error');
  });

  it('renders the input as valid when no error is present', async () => {
    const { getByRole } = render(
      <InputPhone placeholder="Phone" noValidate={false} />
    );

    const input = getByRole('textbox');

    await fireEvent.blur(input);

    expect(input).toHaveClass('input-valid');
  });

  it('focuses and sets cursor correctly on span click', async () => {
    const { getByRole, getByText } = render(<InputPhone placeholder="Phone" />);

    const input = getByRole('textbox');
    const span = getByText('Phone');

    await fireEvent.click(span);

    expect(input).toHaveFocus();
  });

  it('handles the mask and cursor placement correctly', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<InputPhone placeholder="Phone" />);

    const input = getByRole('textbox') as HTMLInputElement;

    await user.type(input, '1234567');

    expect(input).toHaveValue('+38 (123) 456-7_-__');
    const cursorPosition = input.selectionStart;

    expect(cursorPosition).toBe(input.value.indexOf('_'));
  });
});

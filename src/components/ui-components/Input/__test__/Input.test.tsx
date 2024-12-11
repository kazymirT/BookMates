import { cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { setup } from './helper';
import {
  INPUT_ERROR_MESSAGE,
  INPUT_PASSWORD_BUTTON,
  INPUT_REQUIRED_MESSAGE,
  INPUT_SPAN_ID,
  INPUT_TEST_ID,
} from '../constants';

describe('Input Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the input with default props and no error or required message', () => {
    const placeholder = 'span message';
    const { getByTestId, queryByTestId } = setup({ placeholder });
    const span = getByTestId(INPUT_SPAN_ID);

    expect(getByTestId(INPUT_TEST_ID)).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(span).toHaveTextContent(placeholder);

    expect(queryByTestId(INPUT_REQUIRED_MESSAGE)).not.toBeInTheDocument();
    expect(queryByTestId(INPUT_PASSWORD_BUTTON)).not.toBeInTheDocument();
    expect(queryByTestId(INPUT_ERROR_MESSAGE)).not.toBeInTheDocument();
  });

  it('displays error and required messages when provided', () => {
    const errorMessage = 'error here';
    const placeholder = 'span message';
    const { getByTestId } = setup({
      placeholder,
      errorMessage,
      requiredMessage: true,
    });
    const error = getByTestId(INPUT_ERROR_MESSAGE);
    const required = getByTestId(INPUT_REQUIRED_MESSAGE);

    expect(required).toBeInTheDocument();
    expect(required).toHaveTextContent(placeholder);

    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent(errorMessage);
  });

  it('renders a password input and toggles visibility on button click', async () => {
    const user = userEvent.setup();
    const { getByTestId } = setup({ type: 'password' });

    const passwordButton = getByTestId(INPUT_PASSWORD_BUTTON);
    const input = getByTestId(INPUT_TEST_ID);

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');

    expect(passwordButton).toBeInTheDocument();
    await user.click(passwordButton);

    expect(input).toHaveAttribute('type', 'text');

    await user.click(passwordButton);

    expect(input).toHaveAttribute('type', 'password');
  });

  it('handles focus and blur events correctly', async () => {
    const focusMock = vi.fn();
    const blurMock = vi.fn();
    const user = userEvent.setup();
    const { getByTestId } = setup({ onFocus: focusMock, onBlur: blurMock });

    const input = getByTestId(INPUT_TEST_ID);
    const span = getByTestId(INPUT_SPAN_ID);

    expect(input).toHaveValue('');
    expect(input).not.toHaveFocus();
    expect(span).toHaveClass('span-inactive');

    await user.click(span);
    expect(focusMock).toHaveBeenCalledOnce();
    expect(span).toHaveClass('span-active');
    expect(span).toHaveClass('span-animation');
    expect(input).toHaveFocus();

    await fireEvent.blur(input);

    expect(blurMock).toHaveBeenCalledOnce();
    expect(span).toHaveClass('span-inactive');
  });

  it('renders input with initial value and ensures span remains active', async () => {
    const value = 'test value';
    const { getByTestId } = setup({ value });

    const input = getByTestId(INPUT_TEST_ID);
    const span = getByTestId(INPUT_SPAN_ID);

    expect(input).toHaveValue(value);
    expect(span).toHaveClass('span-active');
    expect(span).not.toHaveClass('span-animation');

    await fireEvent.blur(input);

    expect(span).not.toHaveClass('span-inactive');
  });

  it('updates input value and span state on typing', async () => {
    const user = userEvent.setup();
    const value = 'test value';
    const { getByTestId } = setup();

    const input = getByTestId(INPUT_TEST_ID);
    const span = getByTestId(INPUT_SPAN_ID);

    expect(input).toHaveValue('');
    expect(span).toHaveClass('span-inactive');
    expect(span).not.toHaveClass('span-active');
    expect(span).not.toHaveClass('span-animation');

    await user.type(input, value);

    expect(span).not.toHaveClass('span-inactive');
    expect(span).toHaveClass('span-active');
    expect(input).toHaveValue(value);
  });
});

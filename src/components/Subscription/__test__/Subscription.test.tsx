import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { z } from 'zod';

import { setup } from './helper';

vi.mock('@/utils/validateSchema', () => ({
  getResetPasswordSchema: vi.fn(() =>
    z.object({
      email: z.string().email('Invalid email address'),
    })
  ),
}));

describe('Subscription Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  const title = 'Subscribe to the Newsletter';
  const buttonText = 'Subscribe';
  const description =
    'Be the first to hear about new books and receive our recommendations.';
  it('renders correctly with all elements', () => {
    const { getByRole, getByText, getByPlaceholderText } = setup();

    expect(getByRole('heading', { level: 3 })).toHaveTextContent(title);
    expect(getByText(description)).toBeInTheDocument();
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByRole('button', { name: buttonText })).toBeDisabled();
  });

  it('validates email input and enables submit button', async () => {
    const { getByRole, getByPlaceholderText } = setup();

    const emailInput = getByPlaceholderText('Email');
    const submitButton = getByRole('button', {
      name: buttonText,
    });

    await fireEvent.focus(emailInput);
    await fireEvent.blur(emailInput);
    expect(submitButton).toBeDisabled();

    await fireEvent.change(emailInput, {
      target: { value: 'test@example.com' },
    });
    expect(submitButton).toHaveAttribute('disabled', '');
  });

  it('submits the form and resets it', async () => {
    const user = userEvent.setup();
    const { getByRole, getByPlaceholderText } = setup({ variant: 'author' });

    const emailInput = getByPlaceholderText('Email');
    const submitButton = getByRole('button', {
      name: buttonText,
    });

    await user.type(emailInput, 'test@example.com');
    await user.click(submitButton);

    expect(emailInput).toHaveValue('');
  });
});

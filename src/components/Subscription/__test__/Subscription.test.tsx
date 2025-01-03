import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';

import { setup } from './helper';

describe('Subscription Component', () => {
  const title = 'Subscribe to the Newsletter';
  const buttonText = 'Subscribe';
  const description =
    'Be the first to hear about new books and receive our recommendations.';
  const placeholderText = 'Email';
  const testEmail = 'test@example.com';

  afterEach(() => {
    cleanup();
  });

  it('should render all elements correctly', () => {
    const { getByRole, getByText, getByPlaceholderText } = setup();

    expect(getByRole('heading', { level: 3 })).toHaveTextContent(title);
    expect(getByText(description)).toBeInTheDocument();
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
    expect(getByRole('button', { name: buttonText })).toBeDisabled();
  });

  it('should validate email input and enable submit button', async () => {
    const user = userEvent.setup();
    const { getByRole, getByPlaceholderText } = setup();

    const emailInput = getByPlaceholderText(placeholderText);
    const submitButton = getByRole('button', { name: buttonText });

    expect(submitButton).toBeDisabled();

    await user.type(emailInput, testEmail);

    expect(emailInput).toHaveValue(testEmail);
    expect(submitButton).toBeEnabled();
  });

  it('should submit the form and reset input value', async () => {
    const user = userEvent.setup();
    const { getByRole, getByPlaceholderText } = setup({ variant: 'author' });

    const emailInput = getByPlaceholderText(placeholderText);
    const submitButton = getByRole('button', { name: buttonText });

    await user.type(emailInput, testEmail);
    await user.click(submitButton);

    expect(emailInput).toHaveValue('');
  });
});

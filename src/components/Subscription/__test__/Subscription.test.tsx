import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';

import Subscription from '../Subscription';
import { renderWithProviders } from '@/utils/test-utils';

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
    const { getByRole, getByText, getByPlaceholderText } = renderWithProviders(
      <Subscription variant="author" />
    );

    expect(getByRole('heading', { level: 3 })).toHaveTextContent(title);
    expect(getByText(description)).toBeInTheDocument();
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
    expect(getByRole('button', { name: buttonText })).toBeDisabled();
  });

  it('should validate email input and enable submit button', async () => {
    const user = userEvent.setup();
    const { getByRole, getByPlaceholderText } = renderWithProviders(
      <Subscription variant="author" />
    );

    const emailInput = getByPlaceholderText(placeholderText);
    const submitButton = getByRole('button', { name: buttonText });

    expect(submitButton).toBeDisabled();

    await user.type(emailInput, testEmail);

    expect(emailInput).toHaveValue(testEmail);
    expect(submitButton).toBeEnabled();
  });

  it('should submit the form and reset input value', async () => {
    const user = userEvent.setup();
    const { getByRole, getByPlaceholderText } = renderWithProviders(
      <Subscription variant="author" />
    );

    const emailInput = getByPlaceholderText(placeholderText);
    const submitButton = getByRole('button', { name: buttonText });

    await user.type(emailInput, testEmail);
    await user.click(submitButton);

    expect(emailInput).toHaveValue('');
  });
});

describe('Validation logic', () => {
  it('should display required error for empty email', async () => {
    const user = userEvent.setup();
    const { getByPlaceholderText, queryByText } = renderWithProviders(
      <Subscription variant="author" />
    );

    const emailInput = getByPlaceholderText('Email');

    expect(emailInput).toBeInTheDocument();

    await user.click(emailInput);

    expect(emailInput).toHaveFocus();
    expect(queryByText('This field is required')).not.toBeInTheDocument();

    await user.tab();
    expect(emailInput).not.toHaveFocus();
    expect(queryByText('This field is required')).toBeInTheDocument();
  });

  it('should validate email format and max length', async () => {
    const emailIncorrectError = 'Email format is incorrect';
    const emailMaxError = 'The maximum number of characters is 30';
    const emailCorrect = 'testEmail@gmail.com';
    const emailIncorrect = 'testEmailgmail.com';
    const user = userEvent.setup();
    const { getByPlaceholderText, queryByText } = renderWithProviders(
      <Subscription variant="author" />
    );

    const emailInput = getByPlaceholderText('Email');

    expect(emailInput).toBeInTheDocument();

    await user.click(emailInput);

    expect(emailInput).toHaveFocus();
    expect(queryByText(emailIncorrectError)).not.toBeInTheDocument();

    await user.type(emailInput, emailIncorrect);
    await user.tab();

    expect(queryByText(emailIncorrectError)).toBeInTheDocument();
    expect(emailInput.parentElement).toHaveClass('box__error');

    await user.type(emailInput, 'wwewewewewe@dsds.comdddddddddddddddddddd');
    expect(queryByText(emailMaxError)).toBeInTheDocument();

    await user.clear(emailInput);
    await user.type(emailInput, emailCorrect);
    await user.tab();

    expect(queryByText(emailIncorrectError)).not.toBeInTheDocument();
    expect(emailInput.parentElement).not.toHaveClass('box__error');
  });
});

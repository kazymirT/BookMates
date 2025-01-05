import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import UserInput from '../UserInput';

describe('UserInput Component', () => {
  it('renders the basic structure of UserInput with "Email" varian', () => {
    const inputPlaceholder = 'email input';
    const errorMessage = 'error test here';
    const { getByText, getByPlaceholderText } = render(
      <UserInput
        variant="email"
        placeholder={inputPlaceholder}
        errorMessage={errorMessage}
      />
    );
    const input = getByPlaceholderText(inputPlaceholder);

    expect(input).toBeInTheDocument();
    expect(input.parentElement).toHaveClass('input-group__email');
    expect(getByText(errorMessage)).toBeInTheDocument();
  });
  it('renders the basic structure of UserInput with "phone" varian', () => {
    const inputPlaceholder = 'phone input';
    const errorMessage = 'error test here';
    const { getByText, getByPlaceholderText } = render(
      <UserInput
        variant="phone"
        placeholder={inputPlaceholder}
        errorMessage={errorMessage}
      />
    );
    const input = getByPlaceholderText(inputPlaceholder);

    expect(input).toBeInTheDocument();
    expect(input.parentElement).toHaveClass('input-group__phone');
    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});

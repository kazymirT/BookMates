import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Checkbox from '../Checkbox';
import {
  CHECKBOX_ERROR_TEST_ID,
  CHECKBOX_LABEL_TEST_ID,
  CHECKBOX_TEST_ID,
} from '../constants';

describe('Checkbox', () => {
  it('renders Checkbox component with type="checkbox"', () => {
    const { getByTestId } = render(
      <Checkbox type="checkbox" variant="primary" />
    );
    const checkbox = getByTestId(CHECKBOX_TEST_ID);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });

  it('renders Checkbox component with type="radio"', () => {
    const { getByTestId } = render(<Checkbox type="radio" variant="primary" />);
    const checkbox = getByTestId(CHECKBOX_TEST_ID);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('type', 'radio');
  });

  it('renders Checkbox component with children content', () => {
    const childrenText = 'text children test';
    const { getByText } = render(
      <Checkbox type="checkbox" variant="primary">
        <p>{childrenText}</p>
      </Checkbox>
    );
    expect(getByText(childrenText)).toBeInTheDocument();
  });

  it('renders Checkbox component with a label text', () => {
    const checkboxText = 'text checkbox';
    const { getByTestId } = render(
      <Checkbox type="checkbox" variant="primary" label={checkboxText} />
    );
    const label = getByTestId(CHECKBOX_LABEL_TEST_ID);
    expect(getByTestId(CHECKBOX_TEST_ID)).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(checkboxText);
  });

  it('renders Checkbox component with an error message', () => {
    const checkboxError = 'error checkbox';
    const { getByTestId } = render(
      <Checkbox
        type="checkbox"
        variant="primary"
        errorMessage={checkboxError}
      />
    );
    const errorMessage = getByTestId(CHECKBOX_ERROR_TEST_ID);
    expect(getByTestId(CHECKBOX_TEST_ID)).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(checkboxError);
  });

  it('renders Checkbox component with default checked state', () => {
    const { getByTestId } = render(
      <Checkbox type="checkbox" variant="primary" checked />
    );
    const checkbox = getByTestId(CHECKBOX_TEST_ID) as HTMLInputElement;

    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(true);
  });

  it('renders Checkbox component with an onChange handler', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    const { getByTestId } = render(
      <Checkbox type="checkbox" variant="primary" onChange={onChange} />
    );

    const checkbox = getByTestId(CHECKBOX_TEST_ID) as HTMLInputElement;

    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(false); // Перевіряє стан `checked` для контрольованого чекбоксу

    await user.click(checkbox);

    expect(checkbox.checked).toBe(true); // Стан `checked` перевіряється як властивість DOM
  });
});

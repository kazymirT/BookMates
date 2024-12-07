import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import TextArea from '../Textarea';

describe('TextArea', () => {
  const testId = 'text-area-id';

  it('renders the TextArea component successfully', () => {
    const { getByTestId } = render(<TextArea data-testid={testId} />);

    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('updates the value when typing into the TextArea', async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<TextArea data-testid={testId} />);

    const textAreaElement = getByTestId(testId);
    expect(textAreaElement).toBeInTheDocument();

    expect(textAreaElement).toHaveValue('');

    await user.type(textAreaElement, '111');

    expect(textAreaElement).toHaveValue('111');
  });

  it('renders component with error message', async () => {
    const errorText = 'error here';
    const { getByTestId, getByText } = render(
      <TextArea data-testid={testId} errorMessage={errorText} />
    );

    expect(getByTestId(testId)).toBeInTheDocument();
    expect(getByText(errorText)).toBeInTheDocument();
  });

  it('is disabled when the disabled prop is true', () => {
    const { getByTestId } = render(<TextArea data-testid={testId} disabled />);

    expect(getByTestId(testId)).toBeDisabled();
  });
});

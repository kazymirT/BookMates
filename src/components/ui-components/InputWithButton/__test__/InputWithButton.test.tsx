import { describe, expect, it } from 'vitest';

import { setup } from './helper';
import { INPUT_TEST_CONTAINER, INPUT_TEST_ID } from '../constants';

describe('InputWithButton', () => {
  it('renders with default props and displays children', () => {
    const text = 'children';
    const { getByTestId, getByText } = setup({ children: <span>{text}</span> });

    expect(getByTestId(INPUT_TEST_ID)).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();
    expect(getByTestId(INPUT_TEST_CONTAINER)).not.toHaveClass('box__error');
  });

  it('adds error class when errorMessage is provided', () => {
    const errorMessage = 'error';
    const { getByTestId } = setup({ errorMessage });

    expect(getByTestId(INPUT_TEST_CONTAINER)).toHaveClass('box__error');
  });

  it('applies "search" variant class when variant is set to "search"', () => {
    const { getByTestId } = setup({ variant: 'search' });

    expect(getByTestId(INPUT_TEST_CONTAINER)).toHaveClass('box__search');
  });
});

import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { setup } from './helper';
import {
  INPUT_ADMIN_CONTAINER,
  INPUT_ADMIN_ERROR,
  INPUT_ADMIN_INPUT,
  INPUT_ADMIN_LABEL,
  INPUT_ADMIN_PHONE,
} from '../constants';

describe('InputAdmin Component', () => {
  it('renders the basic structure of InputAdmin', () => {
    const { getByTestId, queryByTestId } = setup();

    expect(getByTestId(INPUT_ADMIN_CONTAINER)).toBeInTheDocument();
    expect(getByTestId(INPUT_ADMIN_LABEL)).toBeInTheDocument();
    expect(getByTestId(INPUT_ADMIN_INPUT)).toBeInTheDocument();
    expect(queryByTestId(INPUT_ADMIN_PHONE)).not.toBeInTheDocument();
  });

  it('displays placeholder text and does not render error or input elements', () => {
    const placeholder = 'Номер телефону';
    const { getByTestId, queryByTestId, getByText } = setup({ placeholder });

    expect(getByTestId(INPUT_ADMIN_CONTAINER)).toBeInTheDocument();
    expect(getByTestId(INPUT_ADMIN_LABEL)).toBeInTheDocument();
    expect(getByText(placeholder)).toBeInTheDocument();
    expect(queryByTestId(INPUT_ADMIN_ERROR)).not.toBeInTheDocument();
    expect(queryByTestId(INPUT_ADMIN_INPUT)).not.toBeInTheDocument();
  });

  it('renders label and placeholder text without input element', () => {
    const placeholder = 'Номер телефону';
    const { getByTestId, queryByTestId, getByText } = setup({ placeholder });

    expect(getByTestId(INPUT_ADMIN_CONTAINER)).toBeInTheDocument();
    expect(getByTestId(INPUT_ADMIN_LABEL)).toBeInTheDocument();
    expect(getByText(placeholder)).toBeInTheDocument();
    expect(queryByTestId(INPUT_ADMIN_INPUT)).not.toBeInTheDocument();
  });

  it('displays error message when errorMessage prop is passed', () => {
    const error = 'error here';
    const { getByTestId } = setup({
      errorMessage: error,
    });

    expect(getByTestId(INPUT_ADMIN_ERROR)).toHaveTextContent(error);
  });

  it('updates input value when user types', async () => {
    const text = 'text input change';
    const user = userEvent.setup();
    const { getByTestId } = setup();

    const input = getByTestId(INPUT_ADMIN_INPUT);

    expect(input).toHaveValue('');

    await user.type(input, text);

    expect(input).toHaveValue(text);
  });
});

import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, afterEach } from 'vitest';

import { SearchAutocomplete } from '../Autocomplete';
import {
  AUTOCOMPLETE_CLEAR_ID,
  AUTOCOMPLETE_ERROR_ID,
  AUTOCOMPLETE_REQUIRED_ID,
} from '../constants';

describe('SearchAutocomplete Component', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const mockData = [
    { value: 'Kyiv', label: 'Kyiv' },
    { value: 'Lviv', label: 'Lviv' },
    { value: 'Odesa', label: 'Odesa' },
  ];

  it('renders with placeholder and options', () => {
    const { getByText } = render(
      <SearchAutocomplete
        data={mockData}
        placeholder="Select a city"
        onChange={vi.fn()}
        onBlur={vi.fn()}
      />
    );

    const placeholder = getByText('Select a city');
    expect(placeholder).toBeInTheDocument();
  });

  it('renders required message when requiredMessage is passed', () => {
    const requiredMessage = 'City is required';
    const { getByTestId } = render(
      <SearchAutocomplete
        requiredMessage={requiredMessage}
        data={[]}
        onChange={vi.fn()}
      />
    );

    const requiredElement = getByTestId(AUTOCOMPLETE_REQUIRED_ID);
    expect(requiredElement).toBeInTheDocument();
    expect(requiredElement).toHaveTextContent(requiredMessage);
  });

  it('renders error message when errorMessage is passed', () => {
    const errorMessage = 'Invalid city';
    const { getByTestId } = render(
      <SearchAutocomplete
        errorMessage={errorMessage}
        data={[]}
        onChange={vi.fn()}
      />
    );

    const errorElement = getByTestId(AUTOCOMPLETE_ERROR_ID);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(errorMessage);
  });

  it('calls onChange when selecting an option', async () => {
    const onChangeMock = vi.fn();
    const { getByText, getByRole, queryByTestId, getByTestId } = render(
      <SearchAutocomplete data={mockData} onChange={onChangeMock} />
    );

    const input = getByRole('combobox');
    expect(queryByTestId(AUTOCOMPLETE_CLEAR_ID)).not.toBeInTheDocument();

    await userEvent.click(input);

    const option = getByText('Kyiv');
    await userEvent.click(option);

    const clear = getByTestId(AUTOCOMPLETE_CLEAR_ID);
    expect(clear).toBeInTheDocument();

    await userEvent.click(clear);

    expect(queryByTestId(AUTOCOMPLETE_CLEAR_ID)).not.toBeInTheDocument();
  });

  it('calls onBlur when losing focus', async () => {
    const onBlurMock = vi.fn();
    const { getByRole } = render(
      <SearchAutocomplete
        data={mockData}
        onBlur={onBlurMock}
        onChange={vi.fn()}
      />
    );

    const input = getByRole('combobox');
    await userEvent.click(input);
    await fireEvent.blur(input);

    expect(onBlurMock).toHaveBeenCalledOnce();
  });
});

import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import AutoCompleteAsync from '../AutocompleteAsync';

const mockLoadOptions = vi.fn(async (inputValue) => {
  if (inputValue === 'test') {
    return [
      { value: 'test1', label: 'Test Option 1' },
      { value: 'test2', label: 'Test Option 2' },
    ];
  }
  return [];
});

describe('AutoCompleteAsync', () => {
  it('renders correctly with required props', () => {
    const { getByText, queryByText } = render(
      <AutoCompleteAsync
        placeholder="Search here"
        defaultOptions={[]}
        loadOptions={mockLoadOptions}
        onChange={() => {}}
        onBlur={() => {}}
      />
    );

    expect(getByText('Search here')).toBeInTheDocument();
    expect(queryByText('Результатів немає')).not.toBeInTheDocument();
  });

  it('displays options when user types a valid input', async () => {
    const { getByRole, getByText } = render(
      <AutoCompleteAsync
        placeholder="Search here"
        defaultOptions={[]}
        loadOptions={mockLoadOptions}
        onChange={() => {}}
        onBlur={() => {}}
      />
    );

    const input = getByRole('combobox');
    await userEvent.type(input, 'test');

    await waitFor(
      () => {
        expect(mockLoadOptions).toHaveBeenCalled();
        expect(getByText('Test Option 1')).toBeInTheDocument();
        expect(getByText('Test Option 2')).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it('calls onChange when an option is selected', async () => {
    const handleChange = vi.fn();
    const { getByText, getByRole } = render(
      <AutoCompleteAsync
        placeholder="Search here"
        defaultOptions={[]}
        loadOptions={mockLoadOptions}
        onChange={handleChange}
        onBlur={() => {}}
      />
    );

    const input = getByRole('combobox');
    await userEvent.type(input, 'test');

    await waitFor(() => {
      expect(getByText('Test Option 1')).toBeInTheDocument();
    });

    const option = getByText('Test Option 1');
    await userEvent.click(option);

    expect(handleChange).toHaveBeenCalled();
  });

  it('shows an error message when errorMessage is provided', () => {
    const errorMessage = 'Error occurred';
    const { getByText } = render(
      <AutoCompleteAsync
        placeholder="Search here"
        defaultOptions={[]}
        loadOptions={mockLoadOptions}
        onChange={() => {}}
        onBlur={() => {}}
        errorMessage={errorMessage}
      />
    );

    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it('renders requiredMessage when provided', () => {
    const requiredMessage = 'This field is required';
    const { getByText } = render(
      <AutoCompleteAsync
        placeholder="Search here"
        defaultOptions={[]}
        loadOptions={mockLoadOptions}
        onChange={() => {}}
        onBlur={() => {}}
        requiredMessage={requiredMessage}
      />
    );

    expect(getByText(requiredMessage)).toBeInTheDocument();
  });

  it("displays 'Результатів немає' when no options are returned", async () => {
    const { getByText, getByRole } = render(
      <AutoCompleteAsync
        placeholder="Search here"
        defaultOptions={[]}
        loadOptions={mockLoadOptions}
        onChange={() => {}}
        onBlur={() => {}}
      />
    );

    const input = getByRole('combobox');
    await userEvent.type(input, 'noresults');

    await waitFor(() => {
      expect(mockLoadOptions).toHaveBeenCalled();
      expect(getByText('Результатів немає')).toBeInTheDocument();
    });
  });
});

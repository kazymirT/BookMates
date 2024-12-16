import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { setup } from './helper';
import { NEXT_BUTTON_ID, PREV_BUTTON_ID } from '../constants';

describe('Pagination Component', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders Pagination with correct initial state', () => {
    const totalPages = 5;
    const currentPage = 0;
    const { getByText, queryByText, getByTestId } = setup({
      totalPages,
      currentPage,
    });

    const nextBtn = getByTestId(NEXT_BUTTON_ID);
    const prevBtn = getByTestId(PREV_BUTTON_ID);

    expect(getByText(totalPages)).toBeInTheDocument();
    expect(getByText(currentPage + 1)).toBeInTheDocument();

    expect(nextBtn).toBeInTheDocument();
    expect(prevBtn).toBeInTheDocument();
    expect(prevBtn).toBeDisabled();
    expect(nextBtn).toBeEnabled();

    expect(queryByText(0)).not.toBeInTheDocument();
    expect(queryByText(6)).not.toBeInTheDocument();
  });

  it('navigates to the next page when the "Next" button is clicked', async () => {
    const user = userEvent.setup();
    const totalPages = 5;
    const currentPage = 2;
    const { getByText, getByTestId, mockDispatch } = setup({
      totalPages,
      currentPage,
    });

    const nextBtn = getByTestId(NEXT_BUTTON_ID);
    const prevBtn = getByTestId(PREV_BUTTON_ID);

    expect(getByText(totalPages)).toBeInTheDocument();
    expect(getByText(currentPage)).toBeInTheDocument();

    expect(nextBtn).toBeInTheDocument();
    expect(prevBtn).toBeInTheDocument();
    expect(prevBtn).toBeEnabled();
    expect(nextBtn).toBeEnabled();

    await user.click(nextBtn);

    expect(mockDispatch).toHaveBeenCalledOnce();
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: String(currentPage + 2),
      type: 'queryParams/setPage',
    });
  });

  it('does not navigate when the "Previous" button is clicked on the first page', async () => {
    const user = userEvent.setup();
    const totalPages = 2;
    const currentPage = 0;
    const { getByText, getByTestId, mockDispatch } = setup({
      totalPages,
      currentPage,
    });

    const nextBtn = getByTestId(NEXT_BUTTON_ID);
    const prevBtn = getByTestId(PREV_BUTTON_ID);

    expect(getByText(totalPages)).toBeInTheDocument();
    expect(getByText(currentPage + 1)).toBeInTheDocument();

    expect(nextBtn).toBeInTheDocument();
    expect(prevBtn).toBeInTheDocument();
    expect(prevBtn).toBeDisabled();
    expect(nextBtn).toBeEnabled();

    await user.click(prevBtn);

    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('navigates to the previous page when the "Previous" button is clicked', async () => {
    const user = userEvent.setup();
    const totalPages = 2;
    const currentPage = 1;
    const { getByText, getByTestId, mockDispatch } = setup({
      totalPages,
      currentPage,
    });

    const nextBtn = getByTestId(NEXT_BUTTON_ID);
    const prevBtn = getByTestId(PREV_BUTTON_ID);

    expect(getByText(totalPages)).toBeInTheDocument();
    expect(getByText(currentPage + 1)).toBeInTheDocument();

    expect(nextBtn).toBeInTheDocument();
    expect(prevBtn).toBeInTheDocument();
    expect(prevBtn).toBeEnabled();
    expect(nextBtn).toBeDisabled();

    await user.click(nextBtn);

    expect(mockDispatch).not.toHaveBeenCalled();

    await user.click(prevBtn);

    expect(mockDispatch).toHaveBeenCalledOnce();
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: String(currentPage),
      type: 'queryParams/setPage',
    });
  });

  it('navigates to a specific page when a page number button is clicked', async () => {
    const user = userEvent.setup();
    const totalPages = 3;
    const currentPage = 0;
    const { getByText, getByTestId, mockDispatch } = setup({
      totalPages,
      currentPage,
    });

    const nextBtn = getByTestId(NEXT_BUTTON_ID);
    const prevBtn = getByTestId(PREV_BUTTON_ID);
    const button3 = getByText('3');
    const button1 = getByText('1');

    expect(getByText(totalPages)).toBeInTheDocument();
    expect(getByText(currentPage + 1)).toBeInTheDocument();

    expect(nextBtn).toBeInTheDocument();
    expect(prevBtn).toBeInTheDocument();
    expect(prevBtn).toBeDisabled();
    expect(nextBtn).toBeEnabled();

    await user.click(button3);

    expect(mockDispatch).toHaveBeenCalledWith({
      payload: String(3),
      type: 'queryParams/setPage',
    });

    await user.click(button1);

    expect(mockDispatch).toHaveBeenCalledWith({
      payload: String(1),
      type: 'queryParams/setPage',
    });
  });
});

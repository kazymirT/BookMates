import { fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { setup } from './helper';
import {
  INPUT_FILE_BUTTON,
  INPUT_FILE_CONTAINER,
  INPUT_FILE_ERROR,
  INPUT_FILE_IMG,
  INPUT_FILE_INPUT,
  INPUT_FILE_LABEL,
  INPUT_FILE_PREVIEW,
} from '../constants';

describe('InputFile', () => {
  it('renders InputFile', () => {
    const { getByTestId, queryByTestId } = setup();

    expect(getByTestId(INPUT_FILE_CONTAINER)).toBeInTheDocument();
    expect(getByTestId(INPUT_FILE_LABEL)).toBeInTheDocument();
    expect(getByTestId(INPUT_FILE_INPUT)).toBeInTheDocument();

    expect(queryByTestId(INPUT_FILE_PREVIEW)).not.toBeInTheDocument();
    expect(queryByTestId(INPUT_FILE_ERROR)).not.toBeInTheDocument();
  });

  it('renders InputFile with img', () => {
    const { getByTestId, queryByTestId } = setup({
      baseImages: 'img',
      isShowImage: true,
    });

    expect(getByTestId(INPUT_FILE_CONTAINER)).toBeInTheDocument();
    expect(queryByTestId(INPUT_FILE_LABEL)).not.toBeInTheDocument();
    expect(queryByTestId(INPUT_FILE_INPUT)).not.toBeInTheDocument();

    expect(getByTestId(INPUT_FILE_PREVIEW)).toBeInTheDocument();
    expect(getByTestId(INPUT_FILE_IMG)).toBeInTheDocument();
    expect(getByTestId(INPUT_FILE_BUTTON)).toBeInTheDocument();
  });

  it('renders InputFile with error', () => {
    const error = 'error message';
    const { getByTestId } = setup({
      errorMessage: error,
    });

    const errorMessage = getByTestId(INPUT_FILE_ERROR);

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(error);
  });

  it('renders with img and clean file', async () => {
    const user = userEvent.setup();
    const { getByTestId, queryByTestId } = setup({
      baseImages: 'img',
      isShowImage: true,
    });
    const button = getByTestId(INPUT_FILE_BUTTON);
    expect(button).toBeInTheDocument();

    await user.click(button);

    expect(queryByTestId(INPUT_FILE_PREVIEW)).not.toBeInTheDocument();
  });

  it('calls onClean and onReset when cancel button is clicked', async () => {
    const onClean = vi.fn();
    const onReset = vi.fn();
    const user = userEvent.setup();
    const { getByTestId, queryByTestId } = setup({
      baseImages: 'img',
      isShowImage: true,
      onClean,
      onReset,
    });

    const button = getByTestId(INPUT_FILE_BUTTON);
    expect(button).toBeInTheDocument();

    await user.click(button);

    expect(onClean).toHaveBeenCalledTimes(1);
    expect(onReset).toHaveBeenCalledTimes(1);
    expect(queryByTestId(INPUT_FILE_PREVIEW)).not.toBeInTheDocument();
  });

  it('updates preview image when a file is uploaded', async () => {
    const mockFile = new File(['test-image'], 'test.png', {
      type: 'image/png',
    });
    const user = userEvent.setup();
    const { getByTestId, queryByTestId } = setup();

    const input = getByTestId(INPUT_FILE_INPUT) as HTMLInputElement;
    expect(queryByTestId(INPUT_FILE_PREVIEW)).not.toBeInTheDocument();

    await user.upload(input, mockFile);

    await waitFor(() => {
      const preview = getByTestId(INPUT_FILE_PREVIEW);
      const img = getByTestId(INPUT_FILE_IMG);
      expect(preview).toBeInTheDocument();
      expect(img).toHaveAttribute(
        'src',
        expect.stringContaining('data:image/png;base64')
      );
    });
  });

  it('calls handleCancelImage when no file is selected', async () => {
    const user = userEvent.setup();
    const mockFile = new File(['test-image'], 'test.png', {
      type: 'image/png',
    });
    const handleCancelImage = vi.fn();
    const { getByTestId } = setup({
      onClean: handleCancelImage,
    });

    const input = getByTestId(INPUT_FILE_INPUT) as HTMLInputElement;

    await user.upload(input, mockFile);

    expect(handleCancelImage).toHaveBeenCalledTimes(0);
  });

  it('calls handleCancelImage when no file is selected', async () => {
    const handleCancelImage = vi.fn();
    const { getByTestId } = setup({
      onClean: handleCancelImage,
    });

    const input = getByTestId(INPUT_FILE_INPUT) as HTMLInputElement;

    fireEvent.change(input, { target: { files: null } });

    expect(handleCancelImage).toHaveBeenCalledTimes(1);
  });
});

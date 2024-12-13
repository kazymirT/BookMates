import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { setup } from './helper';

describe('DeletePopup Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the popup with provided title and buttons', () => {
    const title = 'title popup';
    const yes = 'yes';
    const not = 'not';
    const { getByText } = setup({ not, yes, title });

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(yes)).toBeInTheDocument();
    expect(getByText(not)).toBeInTheDocument();
  });

  it('triggers onClose when the "No" button is clicked', async () => {
    const user = userEvent.setup();
    const yes = 'yes';
    const not = 'not';
    const onClose = vi.fn();
    const onDelete = vi.fn();
    const { getByText } = setup({ not, yes, onClose, onDelete });

    const buttonNot = getByText(not);

    expect(buttonNot.tagName).toBe('BUTTON');

    await user.click(buttonNot);

    expect(onClose).toHaveBeenCalledOnce();
  });

  it('triggers onDelete when the "Yes" button is clicked', async () => {
    const user = userEvent.setup();
    const yes = 'yes';
    const not = 'not';
    const onClose = vi.fn();
    const onDelete = vi.fn();
    const { getByText } = setup({ not, yes, onClose, onDelete });

    const buttonYes = getByText(yes);

    expect(buttonYes.tagName).toBe('BUTTON');

    await user.click(buttonYes);

    expect(onDelete).toHaveBeenCalledOnce();
  });
});

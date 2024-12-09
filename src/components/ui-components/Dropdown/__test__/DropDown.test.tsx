import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import { CONTROL_ID, setup } from './helper';
import {
  DROPDOWN_CONTAINER,
  DROPDOWN_CONTROL,
  DROPDOWN_OPTIONS,
} from '../constants';
import { OVERLAY_TEST_ID } from '@/components/Overlay/constants';

describe('DropDown', () => {
  it('renders dropdown structure correctly', () => {
    const { getByTestId } = setup();
    expect(getByTestId(DROPDOWN_CONTAINER)).toBeInTheDocument();
    expect(getByTestId(DROPDOWN_CONTROL)).toBeInTheDocument();
    expect(getByTestId(DROPDOWN_OPTIONS)).toBeInTheDocument();
  });
  it('toggles dropdown visibility on control click', () => {
    const { getByTestId } = setup();
    const control = getByTestId(CONTROL_ID);
    const options = getByTestId(DROPDOWN_OPTIONS);

    expect(options).toHaveClass('closed');

    fireEvent.click(control);

    expect(options).toHaveClass('open');

    fireEvent.click(control);
    expect(options).toHaveClass('closed');
  });
  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup();
    const { getByTestId } = setup();
    const control = getByTestId(CONTROL_ID);
    const options = getByTestId(DROPDOWN_OPTIONS);

    fireEvent.click(control);
    expect(options).toHaveClass('open');

    await user.click(document.body);

    expect(options).toHaveClass('closed');
  });
  it('renders overlay when dropdown with overflow is open', async () => {
    const user = userEvent.setup();
    const { getByTestId, queryByTestId } = setup(true);

    const control = getByTestId(CONTROL_ID);
    expect(queryByTestId(OVERLAY_TEST_ID)).not.toBeInTheDocument();

    await user.click(control);

    expect(queryByTestId(OVERLAY_TEST_ID)).toBeInTheDocument();
  });
});

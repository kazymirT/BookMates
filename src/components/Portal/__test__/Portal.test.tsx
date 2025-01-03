import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import { setupPortal } from './helper';
import { PORTAL_TEST_ID } from '../constants';

describe('Portal component', () => {
  it('should render portal content when open', () => {
    const { getByText } = setupPortal();

    expect(getByText('Portal Content')).toBeInTheDocument();
  });

  it('should not render portal content when closed', () => {
    const { queryByText } = setupPortal({ isOpen: false });

    expect(queryByText('Portal Content')).not.toBeInTheDocument();
  });

  it('should call onClickOutside when clicking outside the content', async () => {
    const user = userEvent.setup();
    const onClickOutside = vi.fn();
    const { getByTestId } = setupPortal({ isOpen: true, onClickOutside });

    const onClick = getByTestId(PORTAL_TEST_ID);

    await user.click(onClick);

    expect(onClickOutside).toHaveBeenCalledOnce();
  });

  it('should not call onClickOutside when clicking inside the content', async () => {
    const user = userEvent.setup();
    const onClickOutside = vi.fn();
    const { getByTestId } = setupPortal({
      isOpen: true,
      onClickOutside,
    });

    const insideContent = getByTestId('content test id');

    await user.click(insideContent);

    expect(onClickOutside).not.toHaveBeenCalled();
  });

  it('should apply correct class for "center" placement', () => {
    const { getByText } = setupPortal({ isOpen: true, placeContent: 'center' });

    const portalWrapper = getByText('Portal Content').parentElement;
    expect(portalWrapper).toHaveClass('content-center');
  });

  it('should apply correct class for "right" placement', () => {
    const { getByText } = setupPortal({ isOpen: true, placeContent: 'right' });

    const portalWrapper = getByText('Portal Content').parentElement;
    expect(portalWrapper).toHaveClass('content-right');
  });
});

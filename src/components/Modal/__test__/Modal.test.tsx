import { cleanup, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import Modal from '../Modal';
import { ModalState, toggleModal } from '@/redux/slices/modalSlice';
import { renderWithProviders } from '@/utils/test-utils';

describe('Modal', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  const modalTypes: Array<{
    type: ModalState['openedModalType'];
    expectedText: string;
  }> = [
    { type: 'login', expectedText: 'Sign In' },
    { type: 'create-account', expectedText: 'Sign Up' },
    { type: 'feedback', expectedText: 'Support' },
    // { type: 'feedback-success', expectedText: 'Support' },
    // { type: 'order-success', expectedText: 'Order successful' },
    { type: 'reset-password', expectedText: 'Reset Password' },
    { type: 'edit-book', expectedText: 'Редагувати' },
    { type: 'add-book', expectedText: 'Додати книгу' },
    // { type: 'add-attributes', expectedText: 'Rese' },
    // { type: 'edit-attributes', expectedText: 'Reset Password' },
    // { type: 'user-info', expectedText: 'Reset Password' },
    // { type: 'userNotAuthorized-info', expectedText: 'Reset Password' },
    // { type: 'edit-order', expectedText: 'Дані' },
    { type: 'add-collection', expectedText: 'Додати колекцію' },
    { type: 'edit-collection', expectedText: 'Редагувати колекцію' },
  ];

  describe.each(modalTypes)('Modal type: %s', ({ type, expectedText }) => {
    it(`renders correct content for ${type}`, async () => {
      const { getByRole, store, queryByRole } = renderWithProviders(<Modal />, {
        preloadedState: {
          modal: { openedModalType: type, redirect: '' },
        },
      });

      await waitFor(
        () => {
          expect(getByRole('heading', { level: 2 })).toHaveTextContent(
            expectedText
          );
        },
        { interval: 300, timeout: 3000 }
      );

      await store.dispatch(toggleModal({ openedModalType: null }));

      await waitFor(
        () => {
          expect(queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
        },
        { interval: 300, timeout: 3000 }
      );
    });
  });
});

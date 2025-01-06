import { cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import Modal from '../Modal';
import { AttributesName } from '@/redux/slices/adminSlice';
import { ModalState } from '@/redux/slices/modalSlice';
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
    { type: 'subscription-success', expectedText: 'Thank you!' },
    { type: 'edit-book', expectedText: 'Редагувати' },
    { type: 'add-book', expectedText: 'Додати книгу' },
    // { type: 'user-info', expectedText: 'Reset Password' },
    // { type: 'userNotAuthorized-info', expectedText: 'Reset Password' },
    // { type: 'edit-order', expectedText: 'Дані' },
    { type: 'add-collection', expectedText: 'Додати колекцію' },
    { type: 'edit-collection', expectedText: 'Редагувати колекцію' },
  ];
  const modalTypesAddAttributes: Array<{
    type: ModalState['openedModalType'];
    expectedText: string;
    attributesName: AttributesName;
  }> = [
    {
      type: 'add-attributes',
      expectedText: 'Додати автора',
      attributesName: 'authors',
    },
    {
      type: 'add-attributes',
      expectedText: 'Додати категорію',
      attributesName: 'category',
    },
    {
      type: 'add-attributes',
      expectedText: 'Додати мову',
      attributesName: 'language',
    },
    // {
    //   type: 'edit-attributes',
    //   expectedText: 'Редагувати автора',
    //   attributesName: 'authors',
    // },
    // {
    //   type: 'edit-attributes',
    //   expectedText: 'Редагувати категорію',
    //   attributesName: 'category',
    // },
    // {
    //   type: 'edit-attributes',
    //   expectedText: 'Редагувати мову',
    //   attributesName: 'language',
    // },
  ];
  const modalTypesEditAttributes: Array<{
    type: ModalState['openedModalType'];
    expectedText: string;
    attributesName: AttributesName;
  }> = [
    {
      type: 'edit-attributes',
      expectedText: 'Редагувати автора',
      attributesName: 'authors',
    },
    {
      type: 'edit-attributes',
      expectedText: 'Редагувати категорію',
      attributesName: 'category',
    },
    {
      type: 'edit-attributes',
      expectedText: 'Редагувати мову',
      attributesName: 'language',
    },
  ];

  describe.each(modalTypes)('Modal type: %s', ({ type, expectedText }) => {
    const user = userEvent.setup();
    it(`renders correct content for ${type}`, async () => {
      const { getByRole, queryByRole } = renderWithProviders(<Modal />, {
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
      await user.click(getByRole('button', { name: 'close modal' }));

      await waitFor(
        () => {
          expect(queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
        },
        { interval: 300, timeout: 3000 }
      );
    });
  });

  describe.each(modalTypesAddAttributes)(
    'Modal attributes type: %s',
    ({ type, expectedText, attributesName }) => {
      const user = userEvent.setup();
      it(`renders correct content for ${type}`, async () => {
        const { getByRole, queryByRole } = renderWithProviders(<Modal />, {
          preloadedState: {
            modal: { openedModalType: type, redirect: '' },
            admin: {
              attributesName: attributesName,
              attributes: null,
              bookId: null,
              clientId: null,
              collectionId: null,
              orderId: null,
            },
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
        await user.click(getByRole('button', { name: 'close modal' }));

        await waitFor(
          () => {
            expect(
              queryByRole('heading', { level: 2 })
            ).not.toBeInTheDocument();
          },
          { interval: 300, timeout: 3000 }
        );
      });
    }
  );
  describe.each(modalTypesEditAttributes)(
    'Modal attributes type: %s',
    ({ type, expectedText, attributesName }) => {
      const user = userEvent.setup();
      it(`renders correct content for ${type}`, async () => {
        const { getByRole, queryByRole } = renderWithProviders(<Modal />, {
          preloadedState: {
            modal: { openedModalType: type, redirect: '' },
            admin: {
              attributesName: attributesName,
              attributes: {
                item: { id: 1, name: 'test' },
                name: attributesName,
              },
              bookId: null,
              clientId: null,
              collectionId: null,
              orderId: null,
            },
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
        await user.click(getByRole('button', { name: 'close modal' }));

        await waitFor(
          () => {
            expect(
              queryByRole('heading', { level: 2 })
            ).not.toBeInTheDocument();
          },
          { interval: 300, timeout: 3000 }
        );
      });
    }
  );
  it('renders modal type with "subscription-error"', async () => {
    const user = userEvent.setup();
    const { getByText, queryByText, getByRole } = renderWithProviders(
      <Modal />,
      {
        preloadedState: {
          modal: { openedModalType: 'subscription-error', redirect: '' },
        },
      }
    );

    await waitFor(
      () => {
        expect(
          getByText(
            'Thank you, but you are already subscribed and we are very happy!'
          )
        ).toBeInTheDocument();
      },
      { interval: 300, timeout: 3000 }
    );
    await user.click(getByRole('button', { name: 'close modal' }));

    await waitFor(
      () => {
        expect(
          queryByText(
            'Thank you, but you are already subscribed and we are very happy!'
          )
        ).not.toBeInTheDocument();
      },
      { interval: 300, timeout: 3000 }
    );
  });
});

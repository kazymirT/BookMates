import { cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import CartNotification from '../CartNotification';
import { CartItem } from '@/redux/slices/shoppingCartSlice';
import { renderWithProviders } from '@/utils/test-utils';

const mockGoods: CartItem[] = [
  {
    authors: [''],
    discount: 0,
    discountPrice: 0,
    id: 1,
    img: '',
    price: 100,
    quantity: 3,
    title: '',
  },
];

describe('CartNotification Component', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders the CartNotification with regular prices', async () => {
    const { getByText, getByRole, queryByRole } = renderWithProviders(
      <CartNotification />,
      {
        preloadedState: {
          shoppingCart: { goods: mockGoods, isFly: false, isOpenCart: true },
          cartNotification: { isOpen: true },
        },
      }
    );

    expect(getByRole('button', { name: 'Make an order' })).toBeInTheDocument();
    expect(
      getByRole('button', { name: 'close notification' })
    ).toBeInTheDocument();
    expect(getByText('Item added to cart')).toBeInTheDocument();
    expect(getByText('There is 3 items in cart')).toBeInTheDocument();
    expect(
      getByText('The amount of goods in the cart 300$')
    ).toBeInTheDocument();

    await waitFor(
      () => {
        expect(
          queryByRole('button', { name: 'Make an order' })
        ).not.toBeInTheDocument();
      },
      { timeout: 2000, interval: 300 }
    );
  });
  it('renders the CartNotification with one item', async () => {
    const mockGoodsWithOneItem: CartItem[] = [{ ...mockGoods[0], quantity: 1 }];
    const { getByText, queryByRole } = renderWithProviders(
      <CartNotification />,
      {
        preloadedState: {
          shoppingCart: {
            goods: mockGoodsWithOneItem,
            isFly: false,
            isOpenCart: true,
          },
          cartNotification: { isOpen: true },
        },
      }
    );

    expect(getByText('There is 1 item in the cart')).toBeInTheDocument();

    await waitFor(
      () => {
        expect(
          queryByRole('button', { name: 'Make an order' })
        ).not.toBeInTheDocument();
      },
      { timeout: 2000, interval: 300 }
    );
  });
  it('renders the CartNotification with regular prices', async () => {
    const user = userEvent.setup();
    const { getByRole, queryByRole } = renderWithProviders(
      <CartNotification />,
      {
        preloadedState: {
          shoppingCart: { goods: mockGoods, isFly: false, isOpenCart: true },
          cartNotification: { isOpen: true },
        },
      }
    );
    const btnMake = getByRole('button', { name: 'Make an order' });
    expect(btnMake).toBeInTheDocument();

    await user.hover(btnMake);

    await waitFor(
      () => {
        expect(
          queryByRole('button', { name: 'Make an order' })
        ).toBeInTheDocument();
      },
      { timeout: 2000, interval: 300 }
    );

    await user.unhover(btnMake);

    await waitFor(
      () => {
        expect(
          queryByRole('button', { name: 'Make an order' })
        ).not.toBeInTheDocument();
      },
      { timeout: 2000, interval: 300 }
    );
  });
  it('calls closeNotification when close button is clicked', async () => {
    const user = userEvent.setup();
    const { getByRole, queryByRole } = renderWithProviders(
      <CartNotification />,
      {
        preloadedState: {
          shoppingCart: { goods: mockGoods, isFly: false, isOpenCart: true },
          cartNotification: { isOpen: true },
        },
      }
    );

    const closeButton = getByRole('button', { name: 'close notification' });
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);

    await waitFor(
      () => {
        expect(
          queryByRole('button', { name: 'close notification' })
        ).not.toBeInTheDocument();
      },
      { timeout: 400 }
    );
  });
});

import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import CartInformer from '../CartInformer';
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

describe('CartInformer Component', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders the CartInformer with regular prices', () => {
    const { getByText, getByRole } = renderWithProviders(<CartInformer />, {
      preloadedState: {
        shoppingCart: { goods: mockGoods, isFly: false, isOpenCart: false },
      },
    });

    expect(getByRole('button', { name: 'open cart' })).toBeInTheDocument();
    expect(getByText('Кошик')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('300 грн')).toBeInTheDocument();
  });
  it('renders the CartInformer with discounted prices', () => {
    const mockGoodsWithDiscount: CartItem[] = [
      { ...mockGoods[0], discountPrice: 90, discount: 10 },
    ];

    const { getByText, getByRole } = renderWithProviders(<CartInformer />, {
      preloadedState: {
        shoppingCart: {
          goods: mockGoodsWithDiscount,
          isFly: false,
          isOpenCart: false,
        },
      },
    });

    expect(getByRole('button', { name: 'open cart' })).toBeInTheDocument();
    expect(getByText('Кошик')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('270 грн')).toBeInTheDocument();
  });
  it('dispatches toggleOpenCart with true on button click', async () => {
    const user = userEvent.setup();
    const { store, getByRole } = renderWithProviders(<CartInformer />, {
      preloadedState: {
        shoppingCart: {
          goods: mockGoods,
          isFly: false,
          isOpenCart: false,
        },
      },
    });

    const button = getByRole('button', { name: 'open cart' });
    await user.click(button);

    expect(store.getState().shoppingCart.isOpenCart).toBe(true);
  });
});

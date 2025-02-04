import { cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ShoppingCart from '../ShoppingCart';
import { CartItem } from '@/redux/slices/shoppingCartSlice';
import { renderWithProviders } from '@/test/test-utils';

const mockGoods: CartItem[] = [
  {
    authors: [''],
    discount: 0,
    discountPrice: 0,
    id: 1,
    img: '',
    price: 100,
    quantity: 3,
    title: 'book title',
  },
];

describe('ShoppingCart Component', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders with items and calculates total price correctly', async () => {
    const { getByText, getByRole } = renderWithProviders(<ShoppingCart />, {
      preloadedState: {
        shoppingCart: { goods: mockGoods },
        shoppingCartUi: { isFly: false, isOpenCart: true },
      },
    });

    expect(getByRole('button', { name: 'close cart' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Check out' })).toBeEnabled();
    expect(getByText('Cart')).toBeInTheDocument();
    expect(getByText('Total')).toBeInTheDocument();
    expect(
      getByText(`${mockGoods[0].price * mockGoods[0].quantity} $`)
    ).toBeInTheDocument();
  });

  it('renders with discounted items and calculates total price correctly', async () => {
    const mockGoodsWithDiscount: CartItem[] = [
      { ...mockGoods[0], discountPrice: 90, discount: 10 },
    ];
    const { getByText, getByRole } = renderWithProviders(<ShoppingCart />, {
      preloadedState: {
        shoppingCart: {
          goods: mockGoodsWithDiscount,
        },
        shoppingCartUi: {
          isFly: false,
          isOpenCart: true,
        },
      },
    });

    expect(getByRole('button', { name: 'Check out' })).toBeEnabled();
    expect(
      getByText(
        `${mockGoodsWithDiscount[0].discountPrice * mockGoods[0].quantity} $`
      )
    ).toBeInTheDocument();
  });

  it('renders empty cart and disables checkout button', async () => {
    const { getByText, getByRole } = renderWithProviders(<ShoppingCart />, {
      preloadedState: {
        shoppingCart: {
          goods: [],
        },
        shoppingCartUi: {
          isFly: false,
          isOpenCart: true,
        },
      },
    });

    expect(getByRole('button', { name: 'Check out' })).toBeDisabled();
    expect(getByText('Your cart is empty')).toBeInTheDocument();
    expect(getByText('0 $')).toBeInTheDocument();
  });

  it('handles user interactions: add, subtract, delete items and close cart', async () => {
    const user = userEvent.setup();
    const { getByText, getByRole, queryByText, store } = renderWithProviders(
      <ShoppingCart />,
      {
        preloadedState: {
          shoppingCart: { goods: mockGoods },
          shoppingCartUi: { isFly: false, isOpenCart: true },
        },
      }
    );

    const btnAdd = getByRole('button', { name: '+' });
    const btnSubtract = getByRole('button', { name: '-' });
    const btnDelete = getByRole('button', { name: 'delete book' });
    const btnClose = getByRole('button', { name: 'close cart' });

    expect(getByText(mockGoods[0].title)).toBeInTheDocument();
    expect(getByText('300 $')).toBeInTheDocument();

    await user.click(btnAdd);
    expect(store.getState().shoppingCart.goods[0].quantity).toBe(4);

    await user.click(btnSubtract);
    expect(store.getState().shoppingCart.goods[0].quantity).toBe(3);

    await user.click(btnDelete);
    expect(store.getState().shoppingCart.goods).toHaveLength(0);

    await user.click(btnClose);
    await waitFor(() => expect(queryByText('Cart')).not.toBeInTheDocument());
  });
});

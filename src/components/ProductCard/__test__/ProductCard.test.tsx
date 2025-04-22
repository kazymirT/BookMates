import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ProductCard from '../ProductCard';
import { Book } from '@/redux/services/services.types';
import { renderWithProviders } from '@/test/test-utils';

export const mockBook: Book = {
  authors: [{ id: 1, name: 'Author Name' }],
  id: 1,
  title: 'Тестова назва книги',
  image: 'тестова картинка',
  price: 100,
  discount: 10,
  orderCount: 10,
  isNew: true,
  discountPrice: 90,
};

describe('ProductCard Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the ProductCard with title, price, and discount price', () => {
    const { getByText } = renderWithProviders(
      <ProductCard data={mockBook} variant="catalog" />
    );

    expect(getByText(mockBook.title)).toBeInTheDocument();
    expect(getByText(mockBook.price)).toBeInTheDocument();
  });

  it('renders the ProductCard without discount price when discount is zero', () => {
    const book = { ...mockBook, discount: 0, discountPrice: 0 };
    const { getByText } = renderWithProviders(
      <ProductCard data={book} variant="catalog" />
    );

    expect(getByText(mockBook.title)).toBeInTheDocument();
    expect(getByText(mockBook.price)).toBeInTheDocument();
  });
  it('adds an item to the cart and updates the state correctly when the "Buy" button is clicked', async () => {
    const user = userEvent.setup();
    const { getByText, getByRole, store } = renderWithProviders(
      <ProductCard data={mockBook} variant="catalog" />,
      {
        preloadedState: {
          shoppingCart: { goods: [] },
          shoppingCartUi: { isFly: false, isOpenCart: false },
        },
      }
    );
    const addItemToCart = getByRole('button', { name: 'Buy' });

    expect(getByText(mockBook.title)).toBeInTheDocument();
    expect(getByText(mockBook.price)).toBeInTheDocument();
    expect(addItemToCart).toBeInTheDocument();
    expect(addItemToCart).toBeEnabled();
    expect(store.getState().shoppingCart.goods).toHaveLength(0);
    expect(store.getState().shoppingCartUi.isFly).toBe(false);

    await user.click(addItemToCart);

    expect(store.getState().shoppingCartUi.isFly).toBe(true);
    expect(addItemToCart).toBeDisabled();
    expect(store.getState().shoppingCart.goods).toHaveLength(1);
  });
});

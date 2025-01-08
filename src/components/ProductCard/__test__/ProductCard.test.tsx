import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ProductCard from '../ProductCard';
import { renderWithProviders } from '@/test/test-utils';

export const mockBook = {
  authors: ['Автор тест1', 'Автор тест2'],
  id: 1,
  title: 'Тестова назва книги',
  imageUrl: 'тестова картинка',
  price: 100,
  discount: 10,
  discountPrice: 90,
  year: 2020,
  totalQuantity: 100,
  expected: true,
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
    expect(getByText(mockBook.discountPrice)).toBeInTheDocument();
  });

  it('renders the ProductCard without discount price when discount is zero', () => {
    const book = { ...mockBook, discount: 0, discountPrice: 0 };
    const { getByText, queryByText } = renderWithProviders(
      <ProductCard data={book} variant="catalog" />
    );

    expect(getByText(mockBook.title)).toBeInTheDocument();
    expect(getByText(mockBook.price)).toBeInTheDocument();
    expect(queryByText(mockBook.discountPrice)).not.toBeInTheDocument();
  });
  it('adds an item to the cart and updates the state correctly when the "Buy" button is clicked', async () => {
    const user = userEvent.setup();
    const { getByText, getByRole, store } = renderWithProviders(
      <ProductCard data={mockBook} variant="catalog" />,
      {
        preloadedState: {
          shoppingCart: { goods: [], isFly: false, isOpenCart: false },
        },
      }
    );
    const addItemToCart = getByRole('button', { name: 'Buy' });

    expect(getByText(mockBook.title)).toBeInTheDocument();
    expect(getByText(mockBook.price)).toBeInTheDocument();
    expect(getByText(mockBook.discountPrice)).toBeInTheDocument();
    expect(addItemToCart).toBeInTheDocument();
    expect(addItemToCart).toBeEnabled();
    expect(store.getState().shoppingCart.goods).toHaveLength(0);
    expect(store.getState().shoppingCart.isFly).toBe(false);

    await user.click(addItemToCart);

    expect(store.getState().shoppingCart.isFly).toBe(true);
    expect(addItemToCart).toBeDisabled();
    expect(store.getState().shoppingCart.goods).toHaveLength(1);
  });
});

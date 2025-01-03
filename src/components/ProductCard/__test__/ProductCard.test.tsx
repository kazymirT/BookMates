import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import ProductCard from '../ProductCard';
import { renderWithProviders } from '@/utils/test-utils';

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
});

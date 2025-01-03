import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { mockBook, setup } from './helper';

describe('ProductCard Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the ProductCard with title, price, and discount price', () => {
    const { getByText } = setup();

    expect(getByText(mockBook.title)).toBeInTheDocument();
    expect(getByText(mockBook.price)).toBeInTheDocument();
    expect(getByText(mockBook.discountPrice)).toBeInTheDocument();
  });

  it('renders the ProductCard without discount price when discount is zero', () => {
    const book = { ...mockBook, discount: 0, discountPrice: 0 };
    const { getByText, queryByText } = setup({ data: book });

    expect(getByText(mockBook.title)).toBeInTheDocument();
    expect(getByText(mockBook.price)).toBeInTheDocument();
    expect(queryByText(mockBook.discountPrice)).not.toBeInTheDocument();
  });
});

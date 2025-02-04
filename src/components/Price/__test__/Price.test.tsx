import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { setup } from './helper';
import { DISCOUNT_CONTAINER } from '../constants';

describe('Price Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders Price with default styling for search variant', () => {
    const { getByText } = setup({ variant: 'search' });
    const price = getByText('100 $');

    expect(price).toBeInTheDocument();
    expect(price).toHaveClass('price-search');
  });

  it('renders Price with normal price for cart variant', () => {
    const normalPrice = 150;
    const { getByText } = setup({ normalPrice, variant: 'cart' });
    const price = getByText(`${normalPrice} $`);

    expect(price).toBeInTheDocument();
    expect(price).toHaveClass('price-cart');
  });

  it('renders Price with discount and normal prices for order variant', () => {
    const normalPrice = 150;
    const discountPrice = 100;
    const { getByText, getByTestId } = setup({
      normalPrice,
      discountPrice,
      variant: 'order',
    });

    const discountContainer = getByTestId(DISCOUNT_CONTAINER);
    const priceN = getByText(`${normalPrice} $`);
    const priceD = getByText(`${discountPrice} $`);

    expect(priceN).toBeInTheDocument();
    expect(priceN).toHaveClass('normal-price');

    expect(priceD).toBeInTheDocument();
    expect(priceD).toHaveClass('discount-price');

    expect(discountContainer).toBeInTheDocument();
    expect(discountContainer).toHaveClass('discount-order');
  });
});

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ProductCard from '../ProductCard';
import { ProductCardProps } from '../types';

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

export const setup = (props?: Partial<ProductCardProps>) => {
  const defaultProps: ProductCardProps = {
    variant: props?.variant ?? 'catalog',
    data: props?.data ?? mockBook,
    ...props,
  };

  return render(
    <MemoryRouter>
      <ProductCard {...defaultProps} />
    </MemoryRouter>
  );
};

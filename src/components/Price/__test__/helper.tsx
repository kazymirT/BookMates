import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import Price from '../Price';
import { PriceProps } from '../types';
import i18n from '@/i18n';

export const setup = (props?: Partial<PriceProps>) => {
  const defaultProps: PriceProps = {
    normalPrice: props?.normalPrice ?? 100,
    variant: 'bookCard',
    ...props,
  };

  return render(
    <I18nextProvider i18n={i18n}>
      <Price {...defaultProps} />
    </I18nextProvider>
  );
};

import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import Subscription from '../Subscription';
import { SubscriptionProps } from '../types';
import i18n from '@/i18n';

export const setup = (props?: Partial<SubscriptionProps>) => {
  const defaultProps: SubscriptionProps = {
    variant: props?.variant ?? 'author',
    ...props,
  };
  return render(
    <I18nextProvider i18n={i18n}>
      <Subscription {...defaultProps} />
    </I18nextProvider>
  );
};

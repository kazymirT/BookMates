import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { describe, expect, it } from 'vitest';

import { LOADER_TEST_ID } from '../constants';
import Loader from '../Loader';
import i18n from '@/i18n';

describe('Loader', () => {
  it('should render the Loader component with translation', () => {
    const { getByTestId, getByText } = render(
      <I18nextProvider i18n={i18n}>
        <Loader />
      </I18nextProvider>
    );

    expect(getByTestId(LOADER_TEST_ID)).toBeInTheDocument();
    expect(getByText('Loading')).toBeInTheDocument();
  });
});

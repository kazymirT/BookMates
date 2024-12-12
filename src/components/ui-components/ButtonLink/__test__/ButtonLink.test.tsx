import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';

import { Sizes, Variant } from '../../Button/constants';
import { ButtonLink } from '../ButtonLink';

describe('ButtonLink', () => {
  afterEach(() => {
    cleanup();
  });
  it('Render ButtonLink', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ButtonLink
          size={Sizes.Small}
          url="test-url"
          variant={Variant.Accent}
          text="Button link"
          data-testid="button-id"
          testId="button-link"
        />
      </MemoryRouter>
    );
    expect(getByTestId('button-id')).toBeInTheDocument();
    expect(getByTestId('button-link')).toBeInTheDocument();
    expect(getByTestId('button-link')).toHaveAttribute('href', '/test-url');
  });
});

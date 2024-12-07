import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { LINK_TEST_ID } from '../constants';
import { LinkComponent } from '../Link';

describe('Link', () => {
  it('renders LinkComponent and opens in the same tab by default', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LinkComponent text="Icons" url="https://www.koloicons.com/" />
      </MemoryRouter>
    );
    expect(getByTestId(LINK_TEST_ID)).toHaveAttribute('target', '_self');
  });

  it('renders LinkComponent and opens in a new tab when `isInNewTab` is true', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LinkComponent
          text="Icons"
          url="https://www.koloicons.com/"
          isInNewTab
        />
      </MemoryRouter>
    );
    expect(getByTestId(LINK_TEST_ID)).toHaveAttribute('target', '_blank');
    expect(getByTestId(LINK_TEST_ID)).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    );
  });

  it('renders LinkComponent without the variant prop and opens in a new tab', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LinkComponent text="Icons" url="/" isInNewTab />
      </MemoryRouter>
    );
    expect(getByTestId(LINK_TEST_ID)).toBeInTheDocument();
    expect(getByTestId(LINK_TEST_ID)).toHaveAttribute('target', '_blank');
  });

  it('renders LinkComponent without the variant prop and opens in the same tab', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LinkComponent text="Icons" url="/" />
      </MemoryRouter>
    );
    expect(getByTestId(LINK_TEST_ID)).toBeInTheDocument();
    expect(getByTestId(LINK_TEST_ID)).toHaveAttribute('target', '_self');
  });

  it('renders LinkComponent with email link and opens in a new tab', () => {
    const email = 'mailto:test@email.com';
    const { getByTestId } = render(
      <LinkComponent text="Icons" url={email} isInNewTab />
    );
    expect(getByTestId(LINK_TEST_ID)).toBeInTheDocument();
    expect(getByTestId(LINK_TEST_ID)).toHaveAttribute('href', email);
  });
});

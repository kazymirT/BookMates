import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { setup } from './helper';

describe('SectionTitle Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the default SectionTitle with title', () => {
    const title = 'test title';
    const { getByText } = setup({ title });

    const h3 = getByText(title);

    expect(h3).toBeInTheDocument();
    expect(h3.tagName).toBe('H3');
    expect(h3).toHaveClass('title__home');
    expect(h3).not.toHaveClass('title__home__fire');
  });

  it('renders SectionTitle with the "catalog" variant', () => {
    const title = 'test title';
    const { getByText } = setup({ title, variant: 'catalog' });

    const h3 = getByText(title);

    expect(h3).toBeInTheDocument();
    expect(h3.tagName).toBe('H3');
    expect(h3).toHaveClass('title__catalog');
  });

  it('renders SectionTitle with an icon (isIcon=true)', () => {
    const title = 'test title';
    const { getByText } = setup({ title, isIcon: true });

    const h3 = getByText(title);

    expect(h3).toBeInTheDocument();
    expect(h3.tagName).toBe('H3');
    expect(h3).toHaveClass('title__home');
    expect(h3).toHaveClass('title__home__fire');
  });

  it('renders SectionTitle with a button', () => {
    const btnText = 'button text';
    const btnLink = 'button-link';
    const { getByText } = setup({ btnLink, btnText });

    const button = getByText(btnText);

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(btnText);
    expect(button.tagName).toBe('BUTTON');
  });
});

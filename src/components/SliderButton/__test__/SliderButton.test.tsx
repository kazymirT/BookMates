import { afterEach } from 'node:test';

import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { SliderButton } from '../SliderButton';

describe('SliderButton', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the button with correct text and class based on props', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    const propsArrow = 'next';

    const { getByRole } = render(
      <SliderButton arrow={propsArrow} variant="banner" onClick={onClick} />
    );
    const arrowBtn = getByRole('button', { name: `slide ${propsArrow}` });

    expect(arrowBtn).toBeInTheDocument();

    expect(arrowBtn).toHaveClass(`btn__${propsArrow}__banner`);

    await user.click(arrowBtn);

    expect(onClick).toHaveBeenCalledOnce();
  });
});

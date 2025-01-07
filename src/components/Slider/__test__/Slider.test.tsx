import { afterEach } from 'node:test';

import { cleanup, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Slider from '../Slider';
import { renderWithProviders } from '@/utils/test-utils';

vi.mock('react-slick', () => {
  return {
    default: ({
      autoplaySpeed,
      children,
    }: {
      autoplaySpeed: number;
      children: React.ReactNode;
    }) => (
      <div data-testid="slider" data-autoplay-speed={autoplaySpeed}>
        {children}
      </div>
    ),
  };
});

describe('Slider', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the Slider component with children', () => {
    renderWithProviders(
      <Slider sliderCL="product" variant="product" arrows>
        <>
          <p>Slide One</p>
          <p>Slide Two</p>
          <p>Slide Three</p>
        </>
      </Slider>
    );

    expect(screen.getAllByText('Slide One')).toHaveLength(1);
    expect(screen.getAllByText('Slide Two')).toHaveLength(1);
    expect(screen.getAllByText('Slide Three')).toHaveLength(1);
  });

  it('sets autoplaySpeed to 6000 when variant is "banner"', () => {
    renderWithProviders(
      <Slider sliderCL="banner-slider" variant="banner">
        <p>Slide</p>
      </Slider>
    );

    const slider = screen.getByTestId('slider');
    expect(slider).toHaveAttribute('data-autoplay-speed', '6000');
  });

  it('sets autoplaySpeed to 4000 for other variants', () => {
    renderWithProviders(
      <Slider sliderCL="product-slider" variant="product">
        <p>Slide</p>
      </Slider>
    );

    const slider = screen.getByTestId('slider');
    expect(slider).toHaveAttribute('data-autoplay-speed', '4000');
  });
});

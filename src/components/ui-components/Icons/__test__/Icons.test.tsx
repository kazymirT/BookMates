import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Icon } from '..';

describe('Icon Component', () => {
  Object.entries(Icon).forEach(([iconName, IconComponent]) => {
    it(`renders ${iconName} icon with correct attributes`, () => {
      const { getByTestId } = render(
        <IconComponent
          dataTestid={`icon-${iconName.toLowerCase()}`}
          width="32"
          height="32"
          viewBox="0 0 32 32"
        />
      );

      const iconElement = getByTestId(`icon-${iconName.toLowerCase()}`);
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveAttribute('width', '32');
      expect(iconElement).toHaveAttribute('height', '32');
      expect(iconElement).toHaveAttribute('viewBox', '0 0 32 32');
    });
  });
});

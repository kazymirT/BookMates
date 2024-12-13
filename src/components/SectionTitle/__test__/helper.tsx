import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import SectionTitle from '../SectionTitle';
import { SectionTitleProps } from '../types';

export const setup = (props?: Partial<SectionTitleProps>) => {
  const defaultProps: SectionTitleProps = {
    title: props?.title ?? 'test title',
    ...props,
  };

  return render(
    <MemoryRouter>
      <SectionTitle {...defaultProps} />
    </MemoryRouter>
  );
};

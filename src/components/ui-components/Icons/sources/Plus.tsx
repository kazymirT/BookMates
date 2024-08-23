import { FC } from 'react';

import { IconProps } from '../types';

export const Plus: FC<IconProps> = ({
  className,
  viewBox = '0 0 25 24',
  width = '25',
  height = '24',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      <path d="M12.5 19.5L12.5 13L20 13C20.276 13 20.5 12.776 20.5 12.5C20.5 12.224 20.276 12 20 12L12.5 12L12.5 4.5C12.5 4.224 12.276 4 12 4C11.724 4 11.5 4.224 11.5 4.5L11.5 12L5 12C4.724 12 4.5 12.224 4.5 12.5C4.5 12.776 4.724 13 5 13L11.5 13L11.5 19.5C11.5 19.776 11.724 20 12 20C12.276 20 12.5 19.776 12.5 19.5Z" />
    </svg>
  );
};

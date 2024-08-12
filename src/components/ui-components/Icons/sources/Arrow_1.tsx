import { FC } from 'react';

import { IconProps } from '../types';

export const Arrow_1: FC<IconProps> = ({
  className,
  viewBox = '0 0 24 24',
  width = '24',
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
      <path d="M12 15.2925L4.35348 7.646L3.64648 8.353L12 16.7065L20.3535 8.353L19.6465 7.646L12 15.2925Z" />
    </svg>
  );
};

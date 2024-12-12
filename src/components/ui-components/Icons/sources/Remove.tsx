import { FC } from 'react';

import { IconProps } from '../types';

export const Remove: FC<IconProps> = ({
  className,
  viewBox = '0 0 19 18',
  width = '19',
  height = '18',
  dataTestid,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      data-testid={dataTestid}
    >
      <path d="M11.75 1.5H7.25C6.425 1.5 5.75 2.175 5.75 3V4.875H3.125V5.625H4.25V15C4.25 15.825 4.925 16.5 5.75 16.5H13.25C14.075 16.5 14.75 15.825 14.75 15V5.625H15.875V4.875H13.25V3C13.25 2.175 12.575 1.5 11.75 1.5ZM6.5 3C6.5 2.58637 6.83638 2.25 7.25 2.25H11.75C12.1636 2.25 12.5 2.58637 12.5 3V4.875H6.5V3ZM14 15C14 15.4136 13.6636 15.75 13.25 15.75H5.75C5.33638 15.75 5 15.4136 5 15V5.625H14V15Z" />
      <path d="M8.375 7.875H7.625V13.125H8.375V7.875Z" />
      <path d="M11.375 7.875H10.625V13.125H11.375V7.875Z" />
    </svg>
  );
};

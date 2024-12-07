import { FC } from 'react';

import { IconProps } from '../types';

export const Account: FC<IconProps> = ({
  className,
  viewBox = '0 0 24 24',
  width = '24',
  height = '24',
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
      <path d="M15.0445 12.3735C16.8 11.4545 18 9.619 18 7.5C18 4.4625 15.5375 2 12.5 2C9.4625 2 7 4.4625 7 7.5C7 9.619 8.2 11.4545 9.9555 12.3735C5.945 13.545 3 17.4045 3 22H22C22 17.4045 19.055 13.545 15.0445 12.3735ZM8 7.5C8 5.0185 10.0185 3 12.5 3C14.9815 3 17 5.0185 17 7.5C17 9.9815 14.9815 12 12.5 12C10.0185 12 8 9.9815 8 7.5ZM12.5 13C16.8675 13 20.4765 16.5065 20.948 21H4.052C4.5235 16.5065 8.1325 13 12.5 13Z" />
    </svg>
  );
};

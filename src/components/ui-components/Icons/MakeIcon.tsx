import { FC } from 'react';

import { DEFAULT_ICON_HEIGHT, DEFAULT_ICON_WIDTH } from './constants';
import { IconProps } from './types';

const makeIcon = (
  Icon: FC<IconProps>,
  {
    className,
    viewBox,
    width = DEFAULT_ICON_WIDTH,
    height = DEFAULT_ICON_HEIGHT,
  }: IconProps = {}
): FC<IconProps> => {
  const IconComponent: FC<IconProps> = (props) => (
    <Icon
      className={className}
      viewBox={viewBox}
      width={width}
      height={height}
      {...props}
    />
  );

  return IconComponent;
};

export default makeIcon;

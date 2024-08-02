import React from 'react';
import { components, GroupBase, MenuListProps } from 'react-select';

import { Option } from '../AutoComplete.types';

export const MenuList = (
  props: MenuListProps<Option, false, GroupBase<Option>>
) => {
  let newChildren: React.ReactNode[] = [];

  if (props.children && Array.isArray(props.children)) {
    newChildren = props.children.slice(0, 150);
  }

  return <components.MenuList {...props}>{newChildren}</components.MenuList>;
};

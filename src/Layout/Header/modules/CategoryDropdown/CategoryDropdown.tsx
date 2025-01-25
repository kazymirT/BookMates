import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import CategoryItem from './components/CategoryItem/CategoryItem';
import { Button } from '@/components/ui-components/Button/Button';
import {
  Position,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import DropDown from '@/components/ui-components/Dropdown/DropDown';
import { Icon } from '@/components/ui-components/Icons';

const CategoryListLazy = lazy(
  () => import('./components/CategoryList/CategoryList')
);

const CategoryDropdown = () => {
  const { t } = useTranslation();

  return (
    <DropDown
      isOverflow
      control={(toggleOpen) => (
        <Button
          type="button"
          size={Sizes.Drop}
          variant={Variant.Drop}
          text={t('header.drop')}
          icon={<Icon.Drop />}
          onClick={toggleOpen}
          iconPosition={Position.Left}
        />
      )}
      options={(toggleOpen) => (
        <Suspense>
          <CategoryListLazy>
            {(id, name) => (
              <CategoryItem id={id} name={name} onClose={toggleOpen} />
            )}
          </CategoryListLazy>
        </Suspense>
      )}
      variant="category"
    />
  );
};

export default CategoryDropdown;

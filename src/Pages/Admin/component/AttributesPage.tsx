import { FC } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Components.module.scss';
import { type AttributesPageProps } from '../types';
import { Button } from '@/components/ui-components/Button/Button';
import {
  Position,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import { useGetAllAttributesQuery } from '@/redux/services/attributes';
import { CategoryAll } from '@/redux/services/services.types';
import { setAttributes, setAttributesName } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';

const AttributesPage: FC<AttributesPageProps> = ({
  buttonName,
  listName,
  name,
}) => {
  const dispatch = useDispatch();
  const { data: categories } = useGetAllAttributesQuery();
  const handleOnAddAttributes = () => {
    dispatch(setAttributesName(name));
    dispatch(toggleModal({ openedModalType: 'add-attributes' }));
  };
  const handleOnEdit = (category: CategoryAll) => {
    dispatch(setAttributes({ name, item: category }));
    dispatch(toggleModal({ openedModalType: 'edit-attributes' }));
  };
  return (
    <div className={styles.categories}>
      <Button
        type="button"
        size={Sizes.FullS}
        text={buttonName}
        variant={Variant.Primary}
        icon={<Icon.Plus />}
        onClick={handleOnAddAttributes}
        iconPosition={Position.Left}
      />
      <ul className={styles.lists}>
        {categories &&
          categories[listName].map((category) => (
            <li key={category.id}>
              <p>{category.name}</p>
              <button onClick={() => handleOnEdit(category)}>
                <Icon.Edit />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AttributesPage;

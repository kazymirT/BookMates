import { useDispatch } from 'react-redux';

import styles from './Components.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Position,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import { useGetCategoryAllQuery } from '@/redux/services/category';
import { setCategoryId } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { data: categories } = useGetCategoryAllQuery();
  const handleOnAddCategory = () => {
    dispatch(toggleModal({ openedModalType: 'add-category' }));
  };
  const handleOnEdit = (id: number) => {
    dispatch(setCategoryId(id));
    dispatch(toggleModal({ openedModalType: 'edit-category' }));
  };
  return (
    <div className={styles.categories}>
      <Button
        buttonType={ButtonType.Button}
        size={Sizes.FullS}
        text="Додати категорію"
        variant={Variant.Primary}
        icon={<Icon.Plus />}
        onClick={handleOnAddCategory}
        iconPosition={Position.Left}
      />
      <ul className={styles.lists}>
        {categories &&
          categories.map((category) => (
            <li key={category.id}>
              <p>{category.name}</p>
              <button onClick={() => handleOnEdit(category.id)}>
                <Icon.Edit />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;

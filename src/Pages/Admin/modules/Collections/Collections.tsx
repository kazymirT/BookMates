import styles from './Collections.module.scss';
import { COLLECTIONS_DATA } from '../../constants';
import { Button } from '@/components/ui-components/Button/Button';
import {
  Position,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch } from '@/redux/hooks';
import { setCollectionId } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';

const Collections = () => {
  const dispatch = useAppDispatch();
  const handleOnClick = (id: number) => {
    dispatch(setCollectionId(id));
    dispatch(toggleModal({ openedModalType: 'edit-collection' }));
  };
  const handleOnAddCollection = () => {
    dispatch(toggleModal({ openedModalType: 'add-collection' }));
  };
  return (
    <div className={styles.collection}>
      <Button
        type="button"
        size={Sizes.FullS}
        text="Додати колекцію"
        variant={Variant.Primary}
        icon={<Icon.Plus />}
        onClick={handleOnAddCollection}
        iconPosition={Position.Left}
      />
      <table>
        <thead>
          <tr>
            <th className={styles.img}>Фото</th>
            <th className={styles.title}>Назва</th>
            <th className={styles['count-books']}>К-сть книг</th>
            <th className={styles.description}>Опис</th>
          </tr>
        </thead>
        <tbody>
          {COLLECTIONS_DATA &&
            COLLECTIONS_DATA.map((collection) => (
              <tr
                key={collection.id}
                onClick={() => handleOnClick(collection.id)}
              >
                <td className={styles.img}>
                  <img src={collection.img} alt="" width={72} height={85} />
                </td>
                <td className={styles.title}>
                  <p>{collection.name}</p>
                </td>
                <td className={styles['count-books']}>
                  <p>{collection.books}</p>
                </td>
                <td className={styles.description}>
                  <div>
                    <p>{collection.description1}</p>
                    <p>{collection.description2}</p>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Collections;

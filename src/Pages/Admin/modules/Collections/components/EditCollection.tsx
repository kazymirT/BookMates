import classNames from 'classnames';
import { useState } from 'react';
import { toast, TypeOptions } from 'react-toastify';

import styles from './Collection.module.scss';
import EditCollectionForm from './EditCollectionForm';
import DeletePopup from '@/components/DeletePopup/DeletePopup';
import PicturesEdit from '@/components/Forms/Admin/PictureEdit';
import { Icon } from '@/components/ui-components/Icons';
import { COLLECTIONS_DATA } from '@/Pages/Admin/constants';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { collectionId } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';

const EditCollection = () => {
  const dispatch = useAppDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const id = useAppSelector(collectionId);

  const collection = COLLECTIONS_DATA.find(
    (collection) => collection.id === id
  );
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const notify = (type: TypeOptions, text: string) => toast(text, { type });

  const handleDeleteBook = async () => {
    setIsPopupOpen(false);
    if (!id) return;
    try {
      // const response = await deleteBookById(id).unwrap();
      notify('success', `Видалено колекцію з id ${id}`);
    } catch (error) {
      const { data } = error as { data: string };
      notify('error', data);
    } finally {
      handleClose();
    }
  };
  const sectionCN = classNames(
    styles['form-container'],
    styles['form-container__edit-collection']
  );
  return (
    <section className={sectionCN}>
      {isPopupOpen && (
        <DeletePopup onClose={handleClosePopup} onDelete={handleDeleteBook} />
      )}
      <div className={styles['title-container']}>
        <button
          className={styles.close}
          onClick={handleClose}
          aria-label="close modal"
        >
          <Icon.Close />
        </button>
        <h2>Редагувати колекцію</h2>
      </div>
      {id && collection && (
        <>
          <EditCollectionForm
            handleClose={handleClose}
            collection={collection}
            handleOpenPopup={handleOpenPopup}
          />
          <PicturesEdit id={id} img={collection.img} name="collection" />
        </>
      )}
    </section>
  );
};

export default EditCollection;

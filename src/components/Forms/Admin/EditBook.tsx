import classNames from 'classnames';
import { useState } from 'react';

import styles from './Form.module.scss';
import DeletePopup from '@/components/DeletePopup/DeletePopup';
import EditBookForm from '@/components/Forms/Admin/EditBookForm';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useDeleteBookByIdMutation } from '@/redux/services/adminBook';
import { useGetBookByIdQuery } from '@/redux/services/books';
import { bookId } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';

const EditBook = () => {
  const dispatch = useAppDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const id = useAppSelector(bookId);

  const [deleteBookById] = useDeleteBookByIdMutation();
  const { data: book } = useGetBookByIdQuery(`${id}`);

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const handleDeleteBook = async () => {
    setIsPopupOpen(false);
    if (!id) return;
    try {
      await deleteBookById(id).unwrap();
    } catch (error) {
      console.error(error);
    } finally {
      handleClose();
    }
  };
  return (
    <section
      className={classNames(
        styles['form-container'],
        styles['form-container__edit-book']
      )}
    >
      {isPopupOpen && (
        <DeletePopup onClose={handleClosePopup} onDelete={handleDeleteBook} />
      )}
      <div className={styles['title-container']}>
        <button className={styles.close} onClick={handleClose}>
          <Icon.Close />
        </button>
        <h2>Редагувати</h2>
      </div>
      {id && book && (
        <EditBookForm
          id={id}
          handleClose={handleClose}
          book={book}
          handleOpenPopup={handleOpenPopup}
        />
      )}
    </section>
  );
};

export default EditBook;

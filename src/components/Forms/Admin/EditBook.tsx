import classNames from 'classnames';
import { useState } from 'react';
import { toast, TypeOptions } from 'react-toastify';

import styles from './Form.module.scss';
import PicturesEdit from './PictureEdit';
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

  const notify = (type: TypeOptions, text: string) => toast(text, { type });

  const handleDeleteBook = async () => {
    setIsPopupOpen(false);
    if (!id) return;
    try {
      const response = await deleteBookById(id).unwrap();
      notify('success', `Видалено книгу з id ${response}`);
    } catch (error) {
      const { data } = error as { data: string };
      notify('error', data);
    } finally {
      handleClose();
    }
  };
  const sectionCN = classNames(
    styles['form-container'],
    styles['form-container__edit-book']
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
        <h2>Редагувати</h2>
      </div>
      {id && book && (
        <>
          <EditBookForm
            handleClose={handleClose}
            book={book}
            handleOpenPopup={handleOpenPopup}
          />
          <PicturesEdit id={id} img={book.imageUrl} name="book" />
        </>
      )}
    </section>
  );
};

export default EditBook;

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import styles from './Form.module.scss';
import DeletePopup from '@/components/DeletePopup/DeletePopup';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import InputAdmin from '@/components/ui-components/InputAdmin/InputAdmin';
import InputFile from '@/components/ui-components/InputFile/InputFile';
import TextArea from '@/components/ui-components/TextArea/Textarea';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useGetBookByIdQuery } from '@/redux/services/books';
import { bookId } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';
import { convertImage } from '@/utils/convertImage';
import { AddBookValues, addBookSchema } from '@/utils/validateSchema';

const EditBook = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector(bookId);
  const { data: book } = useGetBookByIdQuery(`${id}`);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isValid, errors, isSubmitting },
  } = useForm<AddBookValues>({
    resolver: zodResolver(addBookSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: AddBookValues) => {
    if (data.picture instanceof File) {
      const base64Image = await convertImage(data.picture);
      const newData = { ...data, picture: base64Image };
      console.log(newData);
    } else {
      console.error('Invalid picture type');
    }
  };
  useEffect(() => {
    const setValue = async () => {
      if (book) {
        reset({
          authors: book.authors.join(', '),
          description: book.description,
          price: String(book.price),
          quantity: String(book.totalQuantity),
          title: book.title,
          year: String(book.year),
          picture: undefined,
        });
      }
    };
    setValue();
  }, [book, reset]);
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const handleDeleteBook = () => {
    setIsPopupOpen(false);
    handleClose();
  };
  return (
    <section className={styles['form-container']}>
      {isPopupOpen && (
        <DeletePopup onClose={handleClosePopup} onDelete={handleDeleteBook} />
      )}
      <div className={styles['title-container']}>
        <h2>Редагувати</h2>
        <button className={styles.close} onClick={handleClose}>
          <Icon.Close />
        </button>
      </div>
      {book && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputAdmin
            {...register('title')}
            placeholder="Назва книги"
            type="text"
            errorMessage={errors.title?.message}
          />
          <InputAdmin
            {...register('authors')}
            placeholder="Автори книги"
            type="text"
            errorMessage={errors.authors?.message}
          />
          <TextArea
            {...register('description')}
            placeholder="Опис"
            rows={3}
            errorMessage={errors.description?.message}
          />
          <div className={styles['input-container']}>
            <InputAdmin
              {...register('price')}
              placeholder="Вартість"
              type="text"
              errorMessage={errors.price?.message}
            />
            <InputAdmin
              {...register('quantity')}
              placeholder="Кількість"
              type="text"
              errorMessage={errors.quantity?.message}
            />
          </div>
          <div className={styles['input-container']}>
            <InputAdmin
              {...register('year')}
              placeholder="Рік видання"
              type="text"
              errorMessage={errors.year?.message}
            />
            <Controller
              name="picture"
              control={control}
              render={({ field, fieldState }) => (
                <InputFile
                  errorMessage={fieldState.error?.message}
                  placeholder="Додати фото"
                  onChange={(newValue: FileList | undefined) => {
                    field.onChange(newValue);
                  }}
                />
              )}
            />
          </div>
          <div className={styles.btns}>
            <Button
              buttonType={ButtonType.Submit}
              size={Sizes.Full}
              variant={Variant.Basic}
              text="Зберегти"
              disabled={!isValid || isSubmitting}
            />
            <Button
              buttonType={ButtonType.Button}
              size={Sizes.Full}
              onClick={handleOpenPopup}
              variant={Variant.Delete}
              text="Видалити книгу"
            />
          </div>
        </form>
      )}
    </section>
  );
};

export default EditBook;

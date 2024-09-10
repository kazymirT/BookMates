import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
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
import Checkbox from '@/components/ui-components/Checkbox/Checkbox';
import { Icon } from '@/components/ui-components/Icons';
import InputAdmin from '@/components/ui-components/InputAdmin/InputAdmin';
import InputFile from '@/components/ui-components/InputFile/InputFile';
import SelectMulti from '@/components/ui-components/SelectMulti/SelectMulti';
import TextArea from '@/components/ui-components/TextArea/Textarea';
import { useCategoryOptions } from '@/hooks/useCategoryOptions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  useChangeImageMutation,
  useDeleteBookByIdMutation,
} from '@/redux/services/adminBook';
import { useGetBookByIdQuery } from '@/redux/services/books';
import { bookId } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';
import { AddBookValues, addBookSchema } from '@/utils/validateSchema';

const EditBook = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector(bookId);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const categoriesOptions = useCategoryOptions();
  const { data: book, isLoading } = useGetBookByIdQuery(`${id}`);
  const [deleteBookById] = useDeleteBookByIdMutation();
  const [changeImage] = useChangeImageMutation();

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    setValue,
    control,
    formState: { isValid, errors, isSubmitting },
  } = useForm<AddBookValues>({
    defaultValues: {
      categoryNames: ['start'],
    },
    resolver: zodResolver(addBookSchema),
    mode: 'onTouched',
  });

  useEffect(() => {
    const setValue = async () => {
      if (book) {
        reset({
          authorsNames: book.authors.join(', '),
          description: book.description,
          price: String(book.price),
          totalQuantity: String(book.totalQuantity),
          title: book.title,
          year: String(book.year),
          picture: undefined,
          discountPrice: String(100),
          languageNames: book.languages.join(', '),
          expected: book.expected,
          categoryNames: book.categories.map((category) => category.name),
        });
      }
    };
    setValue();
  }, [book, reset]);

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const handleDeleteBook = async () => {
    setIsPopupOpen(false);
    if (!id) return;
    handleClose();
    try {
      await deleteBookById(id).unwrap();
    } catch (error) {
      console.error(error);
    }
  };
  const onSubmit = async (data: AddBookValues) => {
    console.log(data);
    try {
      const { picture } = data;
      const formData = new FormData();
      picture && formData.append('photo', picture[0]);
      id && changeImage({ body: formData, id }).unwrap();
    } catch (error) {
      console.error(error);
    } finally {
      handleClose();
    }
  };

  if (isLoading) {
    return <p>Loading</p>; // Відобразити лоадер, поки дані завантажуються
  }
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
      {book && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputAdmin
            {...register('title')}
            placeholder="Назва книги"
            type="text"
            errorMessage={errors.title?.message}
          />
          <InputAdmin
            {...register('authorsNames')}
            placeholder="Автори книги"
            type="text"
            errorMessage={errors.authorsNames?.message}
          />
          <TextArea
            {...register('description')}
            placeholder="Опис"
            rows={3}
            errorMessage={errors.description?.message}
          />
          {book.categories && (
            <Controller
              control={control}
              name="categoryNames"
              render={({ field, fieldState }) => (
                <SelectMulti
                  placeholder="Категорія"
                  value={field.value}
                  isMulti
                  options={categoriesOptions}
                  onChange={(newValue) => field.onChange(newValue)}
                  onBlur={field.onBlur}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          )}
          <div className={styles['input-container']}>
            <InputAdmin
              {...register('price')}
              placeholder="Вартість"
              type="text"
              errorMessage={errors.price?.message}
            />
            <InputAdmin
              {...register('discountPrice')}
              placeholder="Вартість із знижкою"
              type="text"
              errorMessage={errors.discountPrice?.message}
            />
          </div>
          <div className={styles['input-container']}>
            <InputAdmin
              {...register('totalQuantity')}
              placeholder="Кількість"
              type="text"
              errorMessage={errors.totalQuantity?.message}
            />
            <InputAdmin
              {...register('year')}
              placeholder="Рік видання"
              type="text"
              errorMessage={errors.year?.message}
            />
          </div>
          <div className={styles['input-container']}>
            <InputAdmin
              {...register('languageNames')}
              placeholder="Мова"
              type="text"
              errorMessage={errors.languageNames?.message}
            />
            <InputFile
              {...register('picture')}
              placeholder="Додати фото"
              baseImages={book.imageUrl}
              errorMessage={errors.picture?.message}
              onReset={() => resetField('picture')}
              onClean={() => setValue('picture', undefined)}
            />
          </div>
          <Checkbox {...register('expected')} type="checkbox" variant="primary">
            <p>Hемає в наявності</p>
          </Checkbox>
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

import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
// import { toast, TypeOptions } from 'react-toastify';

import styles from './Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import InputAdmin from '@/components/ui-components/InputAdmin/InputAdmin';
import InputFile from '@/components/ui-components/InputFile/InputFile';
import TextArea from '@/components/ui-components/TextArea/Textarea';
import {
  AddCollectionsValues,
  addCollectionsSchema,
} from '@/utils/validateSchema';
export interface EditCollectionFormProps {
  handleClose: () => void;
  collection: {
    id: number;
    name: string;
    description1: string;
    description2: string;
    books: number;
    img: string;
  };
  handleOpenPopup: () => void;
}
const EditCollection: FC<EditCollectionFormProps> = ({
  collection,
  handleClose,
  handleOpenPopup,
}) => {
  // const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    formState: { isValid, errors, isSubmitting },
  } = useForm<AddCollectionsValues>({
    defaultValues: {
      booksOfNumber: String(collection.books),
      description: collection.description1,
      title: collection.name,
    },
    resolver: zodResolver(addCollectionsSchema),
    mode: 'onTouched',
  });
  // const notify = (type: TypeOptions, text: string) => toast(text, { type });

  const onSubmit = async (data: AddCollectionsValues) => {
    console.log(data);
    handleClose();
    // try {
    //   const { picture, description1, description2, title, numberOfBooks } = data;
    //   const formData = new FormData();
    //   picture.picture && formData.append('photo', picture.picture[0]);
    //   formData.append('title', title);
    //   formData.append('description1', description1);
    //   formData.append('description2', description2);
    //   formData.append('numberOfBooks', numberOfBooks);

    //   const response = await AddBook(formData).unwrap();
    //   notify('success', `Додано книгу з id ${response}`);
    // } catch (error) {
    //   const { data } = error as { data: string };
    //   notify('error', data);
    // } finally {
    //   handleClose();
    // }
  };

  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <button className={styles.close} onClick={handleClose}>
          <Icon.Close />
        </button>
        <h2>Редагуват колекцію</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputAdmin
          {...register('title')}
          placeholder="Назва книги"
          type="text"
          autoFocus
          errorMessage={errors.title?.message}
        />
        <InputAdmin
          {...register('booksOfNumber')}
          placeholder="Кількість книг"
          type="text"
          errorMessage={errors.booksOfNumber?.message}
        />
        <TextArea
          {...register('description')}
          placeholder="Опис"
          rows={5}
          errorMessage={errors.description?.message}
        />
        <div className={styles['input-container']}>
          <InputFile
            {...register('picture.picture')}
            placeholder="Додати фото"
            errorMessage={errors.picture?.picture?.message}
            onReset={() => resetField('picture')}
            onClean={() => setValue('picture', { picture: undefined })}
          />
        </div>
        <div className={styles.btns}>
          <Button
            type="submit"
            size={Sizes.Full}
            variant={Variant.Basic}
            text="Зберегти"
            disabled={!isValid && isSubmitting}
          />
          <Button
            type="button"
            size={Sizes.Full}
            onClick={handleOpenPopup}
            variant={Variant.Delete}
            text="Видалити колекцію"
          />
        </div>
      </form>
    </section>
  );
};

export default EditCollection;

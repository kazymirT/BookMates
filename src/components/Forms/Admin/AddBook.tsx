import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

import styles from './Form.module.scss';
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
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';
import { convertImage } from '@/utils/convertImage';
import { AddBookValues, addBookSchema } from '@/utils/validateSchema';

const AddBook = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    formState: { isValid, errors, isSubmitting },
  } = useForm<AddBookValues>({
    defaultValues: {
      picture: undefined,
    },
    resolver: zodResolver(addBookSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: AddBookValues) => {
    if (data.picture instanceof FileList) {
      const base64Image = await convertImage(data.picture[0]);
      const newData = { ...data, picture: base64Image };
      console.log(newData);
    } else {
      console.error('Invalid picture type');
    }
  };

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  return (
    <section
      className={classNames(
        styles['form-container'],
        styles['form-container__add-book']
      )}
    >
      <div className={styles['title-container']}>
        <button className={styles.close} onClick={handleClose}>
          <Icon.Close />
        </button>
        <h2>Додати книгу</h2>
      </div>
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
          rows={1}
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
          <InputFile
            {...register('picture')}
            placeholder="Додати фото"
            errorMessage={errors.picture?.message}
            onReset={() => resetField('picture')}
            onClean={() => setValue('picture', undefined)}
          />
        </div>
        <Button
          buttonType={ButtonType.Submit}
          size={Sizes.Full}
          variant={Variant.Basic}
          text="Додати"
          disabled={!isValid || isSubmitting}
        />
      </form>
    </section>
  );
};

export default AddBook;

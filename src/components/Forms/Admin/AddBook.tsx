import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { useForm, Controller } from 'react-hook-form';

import styles from './Form.module.scss';
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
import { useAppDispatch } from '@/redux/hooks';
import { useAddBookMutation } from '@/redux/services/adminBook';
import { toggleModal } from '@/redux/slices/modalSlice';
import { AddBookValues, addBookSchema } from '@/utils/validateSchema';

const AddBook = () => {
  const dispatch = useAppDispatch();
  const [AddBook] = useAddBookMutation();
  const categoriesOptions = useCategoryOptions();

  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    control,
    formState: { isValid, errors, isSubmitting },
  } = useForm<AddBookValues>({
    defaultValues: {
      picture: undefined,
      expected: true,
      categoryNames: [],
    },
    resolver: zodResolver(addBookSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: AddBookValues) => {
    try {
      const {
        picture,
        authorsNames,
        categoryNames,
        description,
        discountPrice,
        expected,
        languageNames,
        price,
        totalQuantity,
        title,
        year,
      } = data;
      const formData = new FormData();
      picture && formData.append('photo', picture[0]);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('expected', String(expected));
      formData.append('price', price);
      formData.append('discountPrice', discountPrice);

      formData.append('year', year);
      formData.append('totalQuantity', totalQuantity);

      formData.append('categoryNames', categoryNames.join(', '));
      formData.append('languageNames', languageNames);
      formData.append('authorNames', authorsNames);
      await AddBook(formData).unwrap();
    } catch (error) {
      console.error(error);
    } finally {
      handleClose();
    }
  };

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const sectionClassName = classNames(
    styles['form-container'],
    styles['form-container__add-book']
  );
  return (
    <section className={sectionClassName}>
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
          {...register('authorsNames')}
          placeholder="Автори книги"
          type="text"
          errorMessage={errors.authorsNames?.message}
        />
        <TextArea
          {...register('description')}
          placeholder="Опис"
          rows={1}
          errorMessage={errors.description?.message}
        />
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
            errorMessage={errors.picture?.message}
            onReset={() => resetField('picture')}
            onClean={() => setValue('picture', undefined)}
          />
        </div>
        <Checkbox {...register('expected')} type="checkbox" variant="primary">
          <p>Hемає в наявності</p>
        </Checkbox>
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

import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';

import styles from './Form.module.scss';
import { type EditBookProps } from './types';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import Checkbox from '@/components/ui-components/Checkbox/Checkbox';
import InputAdmin from '@/components/ui-components/InputAdmin/InputAdmin';
import InputFile from '@/components/ui-components/InputFile/InputFile';
import SelectMulti from '@/components/ui-components/SelectMulti/SelectMulti';
import TextArea from '@/components/ui-components/TextArea/Textarea';
import { useAttributesOptions } from '@/hooks/useAttributesOptions';
import { useChangeImageMutation } from '@/redux/services/adminBook';
import { AddBookValues, addBookSchema } from '@/utils/validateSchema';

const EditBookForm: FC<EditBookProps> = ({
  id,
  handleClose,
  book,
  handleOpenPopup,
}) => {
  const [changeImage] = useChangeImageMutation();

  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    control,
    formState: { errors },
  } = useForm<AddBookValues>({
    defaultValues: {
      authorsNames: book.authors,
      description: book.description,
      price: String(book.price),
      totalQuantity: String(book.totalQuantity),
      title: book.title,
      year: String(book.year),
      picture: undefined,
      discountPrice: String(book.discount ?? 0),
      languageNames: book.languages,
      expected: book.expected,
      categoryNames: book.categories.map((category) => category.name),
    },
    resolver: zodResolver(addBookSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: AddBookValues) => {
    try {
      const { picture } = data;
      const formData = new FormData();
      picture && formData.append('photo', picture[0]);
      changeImage({ body: formData, id }).unwrap();
    } catch (error) {
      console.error(error);
    } finally {
      handleClose();
    }
  };
  const { categoriesOptions, authorsOptions, languagesOptions } =
    useAttributesOptions();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputAdmin
        {...register('title')}
        placeholder="Назва книги"
        type="text"
        errorMessage={errors.title?.message}
      />
      <Controller
        control={control}
        name="authorsNames"
        render={({ field, fieldState }) => (
          <SelectMulti
            placeholder="Автори книги"
            value={field.value}
            isMulti
            options={authorsOptions}
            onChange={(newValue) => field.onChange(newValue)}
            onBlur={field.onBlur}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <TextArea
        {...register('description')}
        placeholder="Опис"
        rows={3}
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
      <Controller
        control={control}
        name="languageNames"
        render={({ field, fieldState }) => (
          <SelectMulti
            placeholder="Мова"
            value={field.value}
            isMulti
            options={languagesOptions}
            onChange={(newValue) => field.onChange(newValue)}
            onBlur={field.onBlur}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <div className={styles['input-container']}>
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
  );
};

export default EditBookForm;

import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast, TypeOptions } from 'react-toastify';

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
import SelectMulti from '@/components/ui-components/SelectMulti/SelectMulti';
import TextArea from '@/components/ui-components/TextArea/Textarea';
import { useAttributesOptions } from '@/hooks/useAttributesOptions';
import { useEditBookByIdMutation } from '@/redux/services/adminBook';
import { EditBookValues, editBookSchema } from '@/utils/validateSchema';

const EditBookForm: FC<EditBookProps> = ({
  handleClose,
  book,
  handleOpenPopup,
}) => {
  const [editBookById] = useEditBookByIdMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<EditBookValues>({
    defaultValues: {
      title: book.title,
      description: book.description,
      year: String(book.year[0].name),
      price: String(book.price),
      totalQuantity: String(book.totalQuantity),
      isExpected: book.expected,
      authorNames: book.authors.map((author) => author.name),
      languageNames: book.languages.map((language) => language.name),
      categoryNames: book.categories.map((category) => category.name),
      discount: String(book.discount ?? 0),
    },
    resolver: zodResolver(editBookSchema),
    mode: 'onTouched',
  });
  const notify = (type: TypeOptions, text: string) => toast(text, { type });

  const onSubmit = async (data: EditBookValues) => {
    try {
      const response = await editBookById({ id: book.id, book: data }).unwrap();
      notify('success', response);
    } catch (error) {
      const { data } = error as { data: string };
      notify('error', data);
    }
    handleClose();
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
        name="authorNames"
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
          {...register('discount')}
          placeholder="Відсоток знижки %"
          type="text"
          errorMessage={errors.discount?.message}
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
      <Checkbox {...register('isExpected')} type="checkbox" variant="primary">
        <p>Hемає в наявності</p>
      </Checkbox>
      <div className={styles.btns}>
        <Button
          buttonType={ButtonType.Submit}
          size={Sizes.Full}
          variant={Variant.Basic}
          text="Зберегти"
          disabled={!isValid}
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

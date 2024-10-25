import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast, TypeOptions } from 'react-toastify';

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
import { useAttributesOptions } from '@/hooks/useAttributesOptions';
import { useAppDispatch } from '@/redux/hooks';
import { useAddBookMutation } from '@/redux/services/adminBook';
import { toggleModal } from '@/redux/slices/modalSlice';
import { AddBookValues, addBookSchema } from '@/utils/validateSchema';

const AddBook = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const dispatch = useAppDispatch();
  const [AddBook] = useAddBookMutation();
  const { authorsOptions, categoriesOptions, languagesOptions } =
    useAttributesOptions();

  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    control,
    formState: { isValid, errors, isSubmitting },
  } = useForm<AddBookValues>({
    defaultValues: {
      picture: { picture: undefined },
      isExpected: true,
      authorNames: [],
      languageNames: [],
      categoryNames: [],
    },
    resolver: zodResolver(addBookSchema),
    mode: 'onTouched',
  });
  const notify = (type: TypeOptions, text: string) => toast(text, { type });

  const onSubmit = async (data: AddBookValues) => {
    try {
      const {
        picture,
        authorNames,
        categoryNames,
        description,
        discount,
        isExpected,
        languageNames,
        price,
        totalQuantity,
        title,
        year,
      } = data;
      const formData = new FormData();
      picture.picture && formData.append('photo', picture.picture[0]);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('expected', String(isExpected));
      formData.append('price', price);
      formData.append('discount', discount);

      formData.append('year', year);
      formData.append('totalQuantity', totalQuantity);

      formData.append('categoryNames', categoryNames.join(', '));
      formData.append('languageNames', languageNames.join(', '));
      formData.append('authorNames', authorNames.join(', '));
      const response = await AddBook(formData).unwrap();
      notify('success', `Додано книгу з id ${response}`);
    } catch (error) {
      const { data } = error as { data: string };
      notify('error', data);
    } finally {
      handleClose();
    }
  };

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter' && formRef && formRef.current) {
      e.preventDefault();

      const inputs = Array.from(
        formRef.current.querySelectorAll('input, select, textarea')
      ) as HTMLElement[];

      const currentIndex = inputs.indexOf(e.target as HTMLElement);

      if (currentIndex > -1 && currentIndex < inputs.length - 1) {
        inputs[currentIndex + 1].focus();
      }
    }
  };

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
        onKeyDown={handleKeyDown}
      >
        <InputAdmin
          {...register('title')}
          placeholder="Назва книги"
          type="text"
          autoFocus
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
        <div className={styles['input-container']}>
          <InputFile
            {...register('picture.picture')}
            placeholder="Додати фото"
            errorMessage={errors.picture?.picture?.message}
            onReset={() => resetField('picture')}
            onClean={() => setValue('picture', { picture: undefined })}
          />
        </div>
        <Checkbox {...register('isExpected')} type="checkbox" variant="primary">
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

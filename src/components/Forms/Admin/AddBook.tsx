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
import { useAppDispatch } from '@/redux/hooks';
import { useAddBookMutation } from '@/redux/services/admin';
import { toggleModal } from '@/redux/slices/modalSlice';
import { CATEGORY_DEFAULT } from '@/utils/constants';
import { convertImage } from '@/utils/convertImage';
import { AddBookValues, addBookSchema } from '@/utils/validateSchema';

const AddBook = () => {
  const dispatch = useAppDispatch();
  const [AddBook] = useAddBookMutation();
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
      category: [],
    },
    resolver: zodResolver(addBookSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: AddBookValues) => {
    if (data.picture instanceof FileList) {
      const base64Image = await convertImage(data.picture[0]);
      const newData = { ...data, picture: base64Image };
      try {
        await AddBook({
          // photo: base64Image,
          title: data.title,
          discount: Number(data.discountPrice),
          description: data.description,
          price: Number(data.price),
          totalQuantity: Number(data.quantity),
          authorNames: data.authors.split(', '),
          categoryNames: data.category,
          expected: false,
          languageNames: data.language.split(', '),
          year: Number(data.year),
          // photo: ''
        }).unwrap();
      } catch (error) {
        // const { message } = error as Error;
        console.log(error);
      }
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
        <Controller
          control={control}
          name="category"
          render={({ field, fieldState }) => (
            <SelectMulti
              placeholder="Категорія"
              value={field.value}
              isMulti
              options={CATEGORY_DEFAULT.map((category) => ({
                label: category,
                value: category,
              }))}
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
            {...register('quantity')}
            placeholder="Кількість"
            type="text"
            errorMessage={errors.quantity?.message}
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
            {...register('language')}
            placeholder="Мова"
            type="text"
            errorMessage={errors.language?.message}
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

import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import styles from './Form.module.scss';
import DeletePopup from '@/components/DeletePopup/DeletePopup';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import InputA from '@/components/ui-components/InputA/InputA';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { category } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';
import { AddCategoryValues, addCategorySchema } from '@/utils/validateSchema';

const EditCategory = () => {
  const editCategory = useAppSelector(category);
  const dispatch = useAppDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors, isSubmitting },
  } = useForm<AddCategoryValues>({
    defaultValues: {
      category: editCategory?.name,
    },
    resolver: zodResolver(addCategorySchema),
    mode: 'onTouched',
  });

  const watchedValues = useWatch({ control });
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    if (watchedValues.category !== editCategory?.name) {
      setHasChanged(true);
    } else {
      setHasChanged(false);
    }
  }, [watchedValues, editCategory?.name]);

  const onSubmit = async (data: AddCategoryValues) => {
    console.log(data);
    dispatch(toggleModal({ openedModalType: null }));
  };

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const handleDeleteBook = () => {
    setIsPopupOpen(false);
    handleClose();
    console.log('видалення книги');
  };
  return (
    <section className={styles['form-container']}>
      {isPopupOpen && (
        <DeletePopup onClose={handleClosePopup} onDelete={handleDeleteBook} />
      )}
      <div className={styles['title-container']}>
        <h2>Редагувати категорію</h2>
        <button className={styles.close} onClick={handleClose}>
          <Icon.Close />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputA
          {...register('category')}
          placeholder="Назва категорії"
          type="text"
          errorMessage={errors.category?.message}
        />
        <div className={styles.btns}>
          <Button
            buttonType={ButtonType.Submit}
            size={Sizes.Full}
            variant={Variant.Basic}
            text="Зберегти"
            disabled={!isValid || isSubmitting || !hasChanged}
          />
          <Button
            buttonType={ButtonType.Button}
            size={Sizes.Full}
            onClick={handleOpenPopup}
            variant={Variant.Delete}
            text="Видалити"
          />
        </div>
      </form>
    </section>
  );
};

export default EditCategory;

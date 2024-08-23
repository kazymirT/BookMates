import { zodResolver } from '@hookform/resolvers/zod';
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
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';
import { AddCategoryValues, addCategorySchema } from '@/utils/validateSchema';

const AddCategory = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<AddCategoryValues>({
    defaultValues: {
      category: '',
    },
    resolver: zodResolver(addCategorySchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: AddCategoryValues) => {
    console.log(data);
    dispatch(toggleModal({ openedModalType: null }));
  };

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>Додати категорію</h2>
        <button className={styles.close} onClick={handleClose}>
          <Icon.Close />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputAdmin
          {...register('category')}
          placeholder="Назва категорії"
          type="text"
          errorMessage={errors.category?.message}
        />
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

export default AddCategory;

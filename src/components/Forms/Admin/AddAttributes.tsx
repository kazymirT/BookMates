import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast, TypeOptions } from 'react-toastify';

import styles from './Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import InputAdmin from '@/components/ui-components/InputAdmin/InputAdmin';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  useAddAuthorMutation,
  useAddCategoryMutation,
  useAddLanguageMutation,
} from '@/redux/services/attributes';
import { attributesName } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';
import { Attributes } from '@/utils/constants';
import {
  AddAttributesValues,
  addAttributesSchema,
} from '@/utils/validateSchema';

const AddAttributes = () => {
  const dispatch = useAppDispatch();
  const attributes = useAppSelector(attributesName);
  const [addCategory] = useAddCategoryMutation();
  const [addAuthors] = useAddAuthorMutation();
  const [addLanguage] = useAddLanguageMutation();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<AddAttributesValues>({
    defaultValues: {
      attributes: '',
    },
    resolver: zodResolver(addAttributesSchema),
    mode: 'onTouched',
  });
  const notify = (type: TypeOptions, text: string) => toast(text, { type });

  const onSubmit = async (data: AddAttributesValues) => {
    if (attributes) {
      const actions = {
        category: addCategory,
        authors: addAuthors,
        language: addLanguage,
      };

      const action = actions[attributes];

      if (action) {
        try {
          const response = await action(data.attributes).unwrap();
          notify('success', response);
        } catch (error) {
          const { data } = error as { data: string };
          notify('error', data);
        }
      }
    }

    dispatch(toggleModal({ openedModalType: null }));
  };

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <button className={styles.close} onClick={handleClose}>
          <Icon.Close />
        </button>
        {attributes && <h2>Додати {Attributes[attributes].title}</h2>}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputAdmin
          {...register('attributes')}
          placeholder={Attributes[attributes ?? ''].inputName}
          type="text"
          autoFocus
          errorMessage={errors.attributes?.message}
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

export default AddAttributes;

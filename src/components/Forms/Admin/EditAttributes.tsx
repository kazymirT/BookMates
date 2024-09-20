import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { toast, TypeOptions } from 'react-toastify';

import styles from './Form.module.scss';
import DeletePopup from '@/components/DeletePopup/DeletePopup';
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
  useDeleteAuthorByIdMutation,
  useDeleteCategoryByIdMutation,
  useDeleteLanguageByIdMutation,
} from '@/redux/services/attributes';
import { attributes } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';
import { Attributes } from '@/utils/constants';
import {
  AddAttributesValues,
  addAttributesSchema,
} from '@/utils/validateSchema';

const EditCategory = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useAppDispatch();
  const editAttributes = useAppSelector(attributes);

  const [deleteCategoryById] = useDeleteCategoryByIdMutation();
  const [deleteAuthorById] = useDeleteAuthorByIdMutation();
  const [deleteLanguageById] = useDeleteLanguageByIdMutation();

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors, isSubmitting },
  } = useForm<AddAttributesValues>({
    defaultValues: {
      attributes: editAttributes?.item?.name,
    },
    resolver: zodResolver(addAttributesSchema),
    mode: 'onTouched',
  });

  const watchedValues = useWatch({ control });
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    if (watchedValues.attributes !== editAttributes?.item?.name) {
      setHasChanged(true);
    } else {
      setHasChanged(false);
    }
  }, [watchedValues, editAttributes?.item?.name]);

  const onSubmit = async (data: AddAttributesValues) => {
    console.log(data);
    dispatch(toggleModal({ openedModalType: null }));
  };
  const notify = (type: TypeOptions, text: string) => toast(text, { type });

  const handleDeleteAttributes = async () => {
    setIsPopupOpen(false);
    handleClose();

    if (editAttributes?.item) {
      const deleteActions = {
        category: deleteCategoryById,
        authors: deleteAuthorById,
        language: deleteLanguageById,
      };

      const deleteAction = deleteActions[editAttributes.name];

      if (deleteAction) {
        try {
          const response = await deleteAction(editAttributes.item.id).unwrap();
          notify('success', response);
        } catch (error) {
          const { data } = error as { data: string };
          notify('error', data);
        }
      }
    }
  };

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <>
      {editAttributes && (
        <section className={styles['form-container']}>
          {isPopupOpen && (
            <DeletePopup
              onClose={handleClosePopup}
              onDelete={handleDeleteAttributes}
            />
          )}
          <div className={styles['title-container']}>
            <button className={styles.close} onClick={handleClose}>
              <Icon.Close />
            </button>
            <h2>Редагувати {Attributes[editAttributes.name].title}</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputAdmin
              {...register('attributes')}
              placeholder={Attributes[editAttributes.name].inputName}
              type="text"
              errorMessage={errors.attributes?.message}
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
      )}
    </>
  );
};

export default EditCategory;

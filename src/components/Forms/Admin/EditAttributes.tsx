import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { toast, TypeOptions } from 'react-toastify';

import styles from './Form.module.scss';
import DeletePopup from '@/components/DeletePopup/DeletePopup';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import InputAdmin from '@/components/ui-components/InputAdmin/InputAdmin';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  useDeleteAuthorByIdMutation,
  useDeleteCategoryByIdMutation,
  useDeleteLanguageByIdMutation,
  useEditAuthorMutation,
  useEditCategoryMutation,
  useEditLanguageMutation,
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
  const [editCategory] = useEditCategoryMutation();
  const [editAuthor] = useEditAuthorMutation();
  const [editLanguage] = useEditLanguageMutation();

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
    if (editAttributes?.item) {
      const editActions = {
        category: editCategory,
        authors: editAuthor,
        language: editLanguage,
      };
      const editAction = editActions[editAttributes.name];
      if (editAction) {
        try {
          const response = await editAction({
            id: editAttributes.item.id,
            name: data.attributes.trim(),
          }).unwrap();
          notify('success', response);
        } catch (error) {
          const { data } = error as { data: string };
          notify('error', data);
        }
      }
    }
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
            <button
              className={styles.close}
              onClick={handleClose}
              aria-label="close modal"
            >
              <Icon.Close />
            </button>
            <h2>Редагувати {Attributes[editAttributes.name].title}</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputAdmin
              {...register('attributes')}
              placeholder={Attributes[editAttributes.name].inputName}
              type="text"
              autoFocus
              errorMessage={errors.attributes?.message}
            />
            <div className={styles.btns}>
              <Button
                type="submit"
                size={Sizes.Full}
                variant={Variant.Basic}
                text="Зберегти"
                disabled={!isValid || isSubmitting || !hasChanged}
              />
              <Button
                type="button"
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

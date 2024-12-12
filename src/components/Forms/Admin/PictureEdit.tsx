import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { toast, TypeOptions } from 'react-toastify';

import styles from './Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import InputFile from '@/components/ui-components/InputFile/InputFile';
import { useChangeImageMutation } from '@/redux/services/adminBook';
import { pictureSchema, PictureValues } from '@/utils/validateSchema';

export interface PicturesEditProps {
  id: number;
  img: string;
  name: 'book' | 'collection';
}

const PicturesEdit: FC<PicturesEditProps> = ({ id, img, name }) => {
  const notify = (type: TypeOptions, text: string) => toast(text, { type });
  const [changeImage] = useChangeImageMutation();
  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm<PictureValues>({
    defaultValues: {
      picture: undefined,
    },
    resolver: zodResolver(pictureSchema),
    mode: 'onTouched',
  });
  const onSubmit = async ({ picture }: PictureValues) => {
    if (name) {
      const editActions = {
        book: changeImage,
        collection: undefined,
      };
      const editAction = editActions[name];
      if (editAction) {
        try {
          const formData = new FormData();
          picture && formData.append('photo', picture[0]);
          const response = await editAction({
            body: formData,
            id,
          }).unwrap();
          notify('success', response);
          resetField('picture');
        } catch (error) {
          const { data } = error as { data: string };
          notify('error', data);
        }
      }
    }
  };
  const handleDeletePictures = async () => {
    if (name) {
      const editActions = {
        book: changeImage,
        collection: undefined,
      };
      const editAction = editActions[name];
      if (editAction) {
        try {
          const formData = new FormData();
          const response = await editAction({
            body: formData,
            id: id,
          }).unwrap();
          notify('success', response);
        } catch (error) {
          const { data } = error as { data: string };
          notify('error', data);
        } finally {
        }
      }
    }
  };
  const isImage = !img.endsWith('.com/');
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['picture-container']}>
        <InputFile
          {...register('picture')}
          placeholder="Додати фото"
          baseImages={img}
          isShowImage={isImage}
          errorMessage={errors.picture?.message}
          onReset={() => resetField('picture')}
          onClean={() => setValue('picture', undefined)}
        />
        <div className={styles['picture-btn']}>
          <Button
            type="button"
            size={Sizes.Large}
            text="Видалити фото"
            variant={Variant.Accent}
            onClick={handleDeletePictures}
            disabled={!isImage}
          />
          <Button
            type="submit"
            size={Sizes.FullS}
            text="Додати фото"
            variant={Variant.Basic}
            disabled={!isValid || isSubmitting}
          />
        </div>
      </div>
    </form>
  );
};

export default PicturesEdit;

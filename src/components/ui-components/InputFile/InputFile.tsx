import classNames from 'classnames';
import { ChangeEvent, useId, useState } from 'react';

import styles from './InputFile.module.scss';
import { InputProps } from './InputFile.types';
import { Icon } from '../Icons';

const InputFile = ({ errorMessage, placeholder, onChange }: InputProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const inputClassName = classNames(styles.input, {
    [styles['input-error']]: errorMessage,
  });
  const id = useId();

  const handleCancelImage = () => {
    onChange(undefined);
    setImagePreview(null);
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.files || undefined);
    handleImageChange(event);
  };
  return (
    <div className={styles['input-box']}>
      {!imagePreview ? (
        <>
          <label htmlFor={id}>
            {placeholder}
            <input
              id={id}
              type="file"
              onChange={handleOnChange}
              className={inputClassName}
            />
          </label>
        </>
      ) : (
        <div className={styles['image-preview']}>
          <button
            type="button"
            onClick={handleCancelImage}
            className={styles.btn}
          >
            <Icon.Remove width="18" height="18" />
          </button>
          <img
            src={imagePreview || undefined}
            alt="Preview"
            height={76}
            width={62}
          />
        </div>
      )}
      {!!errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

export default InputFile;

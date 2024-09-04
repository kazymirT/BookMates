import classNames from 'classnames';
import { ChangeEvent, forwardRef, useId, useState } from 'react';

import styles from './InputFile.module.scss';
import { InputFileProps } from './InputFile.types';
import { Icon } from '../Icons';

const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
  ({ errorMessage, placeholder, onReset, onClean, ...rest }, ref) => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const id = useId();

    const handleCancelImage = () => {
      onClean && onClean();
      onReset && onReset();
      setImagePreview(null);
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
        rest.onChange && rest.onChange(event);
      } else {
        handleCancelImage();
      }
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
                accept="image/png"
                {...rest}
                ref={ref}
                onChange={handleImageChange}
                className={classNames(styles.input, {
                  [styles['input-error']]: errorMessage,
                })}
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
            <img src={imagePreview} alt="Preview" height={76} width={62} />
          </div>
        )}
        {!!errorMessage && <span className={styles.error}>{errorMessage}</span>}
      </div>
    );
  }
);

export default InputFile;

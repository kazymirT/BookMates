import classNames from 'classnames';
import { ChangeEvent, forwardRef, useEffect, useId, useState } from 'react';

import {
  INPUT_FILE_BUTTON,
  INPUT_FILE_CONTAINER,
  INPUT_FILE_ERROR,
  INPUT_FILE_IMG,
  INPUT_FILE_INPUT,
  INPUT_FILE_LABEL,
  INPUT_FILE_PREVIEW,
} from './constants';
import styles from './InputFile.module.scss';
import { InputFileProps } from './InputFile.types';
import { Icon } from '../Icons';

const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
  (
    {
      errorMessage,
      placeholder,
      baseImages,
      onReset,
      onClean,
      isShowImage,
      ...rest
    },
    ref
  ) => {
    const [imagePreview, setImagePreview] = useState<string | undefined>(
      baseImages
    );
    const id = useId();

    const handleCancelImage = () => {
      onClean?.();
      onReset?.();
      setImagePreview(undefined);
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
    useEffect(() => {
      !isShowImage && setImagePreview(undefined);
    }, [isShowImage]);
    return (
      <div className={styles['input-box']} data-testid={INPUT_FILE_CONTAINER}>
        {!imagePreview ? (
          <>
            <label htmlFor={id} data-testid={INPUT_FILE_LABEL}>
              {placeholder}
              <input
                id={id}
                data-testid={INPUT_FILE_INPUT}
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
          <div
            className={styles['image-preview']}
            data-testid={INPUT_FILE_PREVIEW}
          >
            <button
              type="button"
              onClick={handleCancelImage}
              data-testid={INPUT_FILE_BUTTON}
              className={styles.btn}
            >
              <Icon.Remove width="18" height="18" />
            </button>
            <img
              src={imagePreview}
              data-testid={INPUT_FILE_IMG}
              alt="Preview"
              height={76}
              width={62}
            />
          </div>
        )}
        {!!errorMessage && (
          <p className={styles.error} data-testid={INPUT_FILE_ERROR}>
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

export default InputFile;

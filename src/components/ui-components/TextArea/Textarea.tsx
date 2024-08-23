import { forwardRef, useId } from 'react';

import styles from './TextArea.module.scss';
import { TextAreaProps } from './TextArea.types';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ errorMessage, placeholder, ...rest }, ref) => {
    const id = useId();
    return (
      <div className={styles['textArea-box']}>
        <label htmlFor={id}>
          {placeholder}
          <textarea {...rest} id={id} ref={ref} className={styles.textArea} />
        </label>
        {!!errorMessage && <span className={styles.error}>{errorMessage}</span>}
      </div>
    );
  }
);

export default TextArea;

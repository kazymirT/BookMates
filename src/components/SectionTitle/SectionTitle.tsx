import classNames from 'classnames';
import type { FC } from 'react';

import styles from './SectionTitle.module.scss';
import type { SectionTitleProps } from './types';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { ButtonLink } from '@/components/ui-components/ButtonLink/ButtonLink';

const SectionTitle: FC<SectionTitleProps> = ({
  btnLink,
  btnText,
  title,
  isIcon = false,
  variant = 'home',
}) => {
  const titleClassName = classNames(styles.title, {
    [styles[`title__${variant}`]]: variant,
    [styles[`title__${variant}__fire`]]: isIcon,
  });
  return (
    <div className={styles.wrapper}>
      <h3 className={titleClassName}>{title}</h3>
      {btnText && btnLink && (
        <ButtonLink
          type="button"
          size={Sizes.Section}
          text={btnText}
          url={btnLink}
          variant={Variant.Primary}
        />
      )}
    </div>
  );
};

export default SectionTitle;

import classNames from 'classnames';
import { FC } from 'react';

import styles from './SectionTitle.module.scss';
import { SectionTitleProps } from './types';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
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
          buttonType={ButtonType.Button}
          size={Sizes.Large}
          text={btnText}
          url={btnLink}
          variant={Variant.Primary}
        />
      )}
    </div>
  );
};

export default SectionTitle;

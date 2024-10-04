import { FC } from 'react';

import styles from './SectionTitle.module.scss';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { ButtonLink } from '@/components/ui-components/ButtonLink/ButtonLink';

export interface SectionTitleProps {
  title: string;
  btnText: string;
  btnLink: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ btnLink, btnText, title }) => {
  return (
    <div className={styles.title}>
      <h3>{title}</h3>
      <ButtonLink
        buttonType={ButtonType.Button}
        size={Sizes.Large}
        text={btnText}
        url={btnLink}
        variant={Variant.Primary}
      />
    </div>
  );
};

export default SectionTitle;

import { useTranslation } from 'react-i18next';

import styles from './Banner.module.scss';
import bookshelf from '@/assets/images/bookshelf.webp';
import {
  ButtonType,
  Position,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { ButtonLink } from '@/components/ui-components/ButtonLink/ButtonLink';
import { Icon } from '@/components/ui-components/Icons';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>{t('home.banner.h1')}</h1>
            <p>{t('home.banner.description')}</p>
          </div>
          <ButtonLink
            url="/catalog"
            buttonType={ButtonType.Button}
            icon={<Icon.Arrow />}
            iconPosition={Position.Right}
            size={Sizes.Small}
            text={t('home.banner.button')}
            variant={Variant.Basic}
          />
          <img
            className={styles.images}
            src={bookshelf}
            width={568}
            height={487}
            alt="Bookshelf"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

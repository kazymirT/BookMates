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
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Досліджуй безмежні сторінки</h1>
            <p>
              Знайди свою наступну пригоду <br />в нашій книжковій
              інтернет-крамниці!
            </p>
          </div>
          <ButtonLink
            url="/catalog"
            buttonType={ButtonType.Button}
            icon={<Icon.Arrow />}
            iconPosition={Position.Right}
            size={Sizes.Small}
            text="В Каталог"
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

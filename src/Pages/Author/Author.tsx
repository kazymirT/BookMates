import { useTranslation } from 'react-i18next';
// import { useParams } from 'react-router-dom';

import styles from './Author.module.scss';
import { author } from './data';
import AuthorBook from './modules/AuthorBook/AuthorBook';
import AuthorDescriptions from './modules/AuthorDescriptions/AuthorDescriptions';
import Subscription from '../../components/Subscription/Subscription';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Author = () => {
  // const { authorId } = useParams() as unknown as { authorId: number };
  const { t } = useTranslation();

  const breadcrumbs = createBreadcrumbs(t('breadcrumbs.authors'), {
    name: author.name,
    to: `/authors/${author.id}`,
  });
  return (
    <section className={styles.author}>
      <div className="container">
        <div className={styles['author-inner']}>
          <Breadcrumbs options={breadcrumbs} />
          <h2 className={styles.name}>{author.name}</h2>
          <AuthorDescriptions
            img={author.img}
            descriptions={author.descriptions}
          />
          <AuthorBook authorName={author.name} />
          <Subscription variant="author" />
        </div>
      </div>
    </section>
  );
};

export default Author;

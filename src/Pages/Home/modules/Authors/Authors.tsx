import { useTranslation } from 'react-i18next';

import { authors } from './data';
import AuthorsCard from '../../components/AuthorsCard/AuthorsCard';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SkeletonAuthorCard from '@/components/Skeleton/SkeletonAuthorCard';
import { useAppSelector } from '@/redux/hooks';
import { isLoading } from '@/redux/slices/skeletonSlice';

const Authors = () => {
  const { t } = useTranslation();
  const isSkeleton = useAppSelector(isLoading);
  return (
    <Section>
      <>
        <SectionTitle
          btnLink="/authors"
          btnText={t('home.authors.button')}
          title={t('home.authors.title')}
        />
        <SectionContent variant="authors">
          {authors &&
            !isSkeleton &&
            authors.map(({ id, img, title }) => (
              <AuthorsCard id={id} img={img} title={title} key={id} />
            ))}
          {isSkeleton && <SkeletonAuthorCard cards={4} />}
        </SectionContent>
      </>
    </Section>
  );
};

export default Authors;

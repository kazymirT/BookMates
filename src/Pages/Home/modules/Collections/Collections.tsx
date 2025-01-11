import { useTranslation } from 'react-i18next';

import { collections } from './data';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SkeletonCollectionCard from '@/components/Skeleton/SkeletonCollectionCard';
import { useAppSelector } from '@/redux/hooks';
import { isLoading } from '@/redux/slices/skeletonSlice';

const Collections = () => {
  const { t } = useTranslation();
  const isSkeleton = useAppSelector(isLoading);
  return (
    <Section>
      <>
        <SectionTitle
          btnLink="/collections"
          btnText={t('home.book-collections.button')}
          title={t('home.book-collections.title')}
        />
        <SectionContent variant="category">
          {collections &&
            !isSkeleton &&
            collections.map(({ id, img, title }) => (
              <CategoryCard id={id} img={img} title={title} key={id} />
            ))}
          {isSkeleton && <SkeletonCollectionCard cards={4} />}
        </SectionContent>
      </>
    </Section>
  );
};

export default Collections;

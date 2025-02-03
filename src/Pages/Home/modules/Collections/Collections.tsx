import { useTranslation } from 'react-i18next';

import CollectionCard from './components/CollectionCard/CollectionCard';
import { CARD_OF_COLLECTIONS } from './constants';
import { collections } from './data';
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
          {!isSkeleton &&
            collections &&
            collections.map(({ id, img, title }) => (
              <CollectionCard id={id} img={img} title={title} key={id} />
            ))}
          {isSkeleton && <SkeletonCollectionCard cards={CARD_OF_COLLECTIONS} />}
        </SectionContent>
      </>
    </Section>
  );
};

export default Collections;

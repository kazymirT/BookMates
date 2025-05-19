import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import CollectionCard from './components/CollectionCard/CollectionCard';
import { CARD_OF_COLLECTIONS } from './constants';
import { CollectionsProps } from './types';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SkeletonCollectionCard from '@/components/Skeleton/SkeletonCollectionCard';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { ButtonLink } from '@/components/ui-components/ButtonLink/ButtonLink';

const Collections: FC<CollectionsProps> = ({ collections }) => {
  const { t } = useTranslation();
  return (
    <Section>
      <>
        <SectionTitle
          btnLink="/collections"
          btnText={t('home.book-collections.button')}
          title={t('home.book-collections.title')}
        />
        <SectionContent variant="category">
          <div>
            {collections ? (
              collections.map((collection) => (
                <CollectionCard {...collection} key={collection.id} />
              ))
            ) : (
              <SkeletonCollectionCard cards={CARD_OF_COLLECTIONS} />
            )}
          </div>
          <ButtonLink
            type="button"
            size={Sizes.Section}
            text={t('home.book-collections.button')}
            url="/collections"
            variant={Variant.Primary}
          />
        </SectionContent>
      </>
    </Section>
  );
};

export default Collections;

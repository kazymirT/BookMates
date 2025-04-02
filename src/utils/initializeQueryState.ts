import { Attributes, MetaAttributes } from '@/redux/services/meta';

export const initializeQueryState = (attributes: Attributes) => {
  const params = new URLSearchParams(window.location.search);
  const categoryIds = params.get('categories')?.split('-').map(Number) || [];
  const languagesIds = params.get('language')?.split('-').map(Number) || [];
  const yearsIds = params.get('years')?.split('-').map(Number) || [];

  const setAttributes = (attributes: MetaAttributes[], attId: number[]) =>
    attributes.filter((att) => attId.includes(att.id));

  const newState = {
    sort: params.get('sort') || 'id-asc',
    filter: {
      categories: setAttributes(attributes.cats, categoryIds),
      language: setAttributes(attributes.langs, languagesIds),
      years: setAttributes(attributes.years, yearsIds),
    },
    price: params.get('price')?.split('-') || [],
    search: params.get('search') || undefined,
    page: params.get('page') || '1',
  };
  return newState;
};

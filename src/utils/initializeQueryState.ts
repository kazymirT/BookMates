import { AllAttributes, Attributes } from '@/redux/services/services.types';

export const initializeQueryState = (attributes: AllAttributes) => {
  const params = new URLSearchParams(window.location.search);
  const categoryIds = params.get('categories')?.split('-').map(Number) || [];
  const languagesIds = params.get('language')?.split('-').map(Number) || [];

  const setAttributes = (attributes: Attributes[], attId: number[]) =>
    attributes.filter((att) => attId.includes(att.id));

  const newState = {
    sort: params.get('sort') || 'id-asc',
    filter: {
      categories: setAttributes(attributes.categories, categoryIds),
      language: setAttributes(attributes.languages, languagesIds),
    },
    price: params.get('price')?.split('-') || [],
    search: params.get('search') || undefined,
    page: params.get('page') || '1',
  };
  return newState;
};

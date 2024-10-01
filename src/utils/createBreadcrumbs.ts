import { BASE_CRUMBS, SORT_OPTIONS_URL } from './constants';

interface Breadcrumb {
  name: string;
  to: string;
}

interface Category {
  name: string;
}

export const createBreadcrumbs = (page: string, categoryId?: Category) => {
  const breadcrumbs: Breadcrumb[] = [BASE_CRUMBS[page]];
  if (categoryId) {
    breadcrumbs.push({
      name: categoryId.name,
      to: `/catalog/?categories=${SORT_OPTIONS_URL[categoryId.name]}`,
    });
  }

  return breadcrumbs;
};

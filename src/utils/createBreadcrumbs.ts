import { BASE_CRUMBS } from './constants';

interface Breadcrumb {
  name: string;
  to: string;
}

interface Category {
  name: string;
  id: number;
}

export const createBreadcrumbs = (page: string, categoryId?: Category) => {
  const breadcrumbs: Breadcrumb[] = [BASE_CRUMBS[page]];

  if (categoryId) {
    breadcrumbs.push({
      name: categoryId.name,
      to: `/catalog?categories=${categoryId.id}&page=1`,
    });
  }

  return breadcrumbs;
};

import { BASE_CRUMBS } from './constants';

interface Breadcrumb {
  name: string;
  to: string;
}

interface Category {
  name: string;
}

export const createBreadcrumbs = (page: string, categoryId?: Category) => {
  const breadcrumbs: Breadcrumb[] = [BASE_CRUMBS[page]];
  // if (categoryId) {
  //   breadcrumbs.push({
  //     name: categoryId.name,
  //     to: `/catalog/?categories=${SORT_OPTIONS_URL[categoryId.name]}`,
  //   });
  // }
  console.log(categoryId);

  return breadcrumbs;
};

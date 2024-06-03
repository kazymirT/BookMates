import { BASE_CRUMBS, categories } from './constants';

interface Breadcrumb {
  label: string;
  to: string;
}

export const createBreadcrumbs = (
  page: string,
  categoryId?: string,
  productId?: string
): Breadcrumb[] => {
  const breadcrumbs: Breadcrumb[] = [BASE_CRUMBS[page]];

  if (categoryId) {
    const category = categories.find(
      (category) => category.path === categoryId
    );
    if (category) {
      breadcrumbs.push({
        label: category.name,
        to: `/catalog/${category.path}`,
      });
    }
  }

  if (productId) {
    breadcrumbs.push({
      label: productId.replace(/-/g, ' '),
      to: '',
    });
  }

  return breadcrumbs;
};

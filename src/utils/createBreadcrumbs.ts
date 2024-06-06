import { BASE_CRUMBS, categories } from './constants';

interface Breadcrumb {
  label: string;
  to: string;
}

interface Category {
  label: string;
  slag: string;
}

export const createBreadcrumbs = (
  page: string,
  categoryId?: string | Category[],
  productId?: string
): Breadcrumb[] => {
  const breadcrumbs: Breadcrumb[] = [BASE_CRUMBS[page]];

  const addCategoryBreadcrumb = (label: string, path: string) => {
    breadcrumbs.push({
      label,
      to: `/catalog/${path}`,
    });
  };

  if (typeof categoryId === 'string') {
    const category = categories.find(
      (category) => category.path === categoryId
    );
    if (category) {
      addCategoryBreadcrumb(category.name, category.path);
    }
  } else if (Array.isArray(categoryId)) {
    categoryId.forEach((category) =>
      addCategoryBreadcrumb(category.label, category.slag)
    );
  }

  if (productId) {
    breadcrumbs.push({
      label: productId.replace(/-/g, ' '),
      to: '',
    });
  }

  return breadcrumbs;
};

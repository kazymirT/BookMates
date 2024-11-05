import { BASE_CRUMBS } from './constants';

interface Breadcrumb {
  name: string;
  to: string;
}

export const createBreadcrumbs = (page: string, crumbs?: Breadcrumb) => {
  const breadcrumbs: Breadcrumb[] = [BASE_CRUMBS[page]];

  if (crumbs) {
    breadcrumbs.push({
      name: crumbs.name,
      to: crumbs.to,
    });
  }

  return breadcrumbs;
};

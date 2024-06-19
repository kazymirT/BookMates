import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import styles from './Catalog.module.scss';
import { CatalogNavigate } from './Catalog.types';
import CatalogHeader from './CatalogHeader/CatalogHeader';
import Filters from './Filters/Filters';
import Products from './Products/Products';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { useGetCategoryAllQuery } from '@/redux/services/category';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Catalog = () => {
  const navigate = useNavigate();
  const { sort, page, url, categoryId } = useLoaderData() as CatalogNavigate;
  const [sortProduct, setSortProduct] = useState(sort);

  useEffect(() => {
    sort.length && setSortProduct(sort);
  }, [sort]);

  const newUrl = new URL(url.toString());

  const handleChangeSort = (newSort: string) => {
    setParams('sort', newSort);
  };

  const setParams = (paramsName: string, paramsValue: string) => {
    newUrl.searchParams.set(paramsName, paramsValue);
    newUrl.searchParams.set('page', '1');
    navigate(`${newUrl.search}`);
  };

  const { data: categoryAll } = useGetCategoryAllQuery();
  const currentCategory = categoryAll
    ? categoryAll.find((category) => category.id === Number(categoryId))
    : undefined;
  const breadcrumbs = createBreadcrumbs('catalog', currentCategory);

  return (
    <section className={styles.catalog}>
      <div className="container">
        <div className={styles['catalog-container']}>
          <Breadcrumbs options={breadcrumbs} activeLastLink={false} />
          <CatalogHeader
            handleChangeSort={handleChangeSort}
            sortProduct={sortProduct}
          />
          <div className={styles.main}>
            <Filters />
            <Products
              categoryId={categoryId}
              page={page}
              sortProduct={sortProduct}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;

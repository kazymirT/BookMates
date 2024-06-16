import { useEffect, useState } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

import styles from './Catalog.module.scss';
import Filter from './Filter/Filter';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import Select from '@/components/ui-components/Select/Select';
import { useGetCategoryAllQuery } from '@/redux/services/category';
import { selectSortOptions } from '@/utils/constants';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Catalog = () => {
  const navigate = useNavigate();
  const { size, sort, url, categoryId } = useLoaderData() as {
    size: string;
    sort: string;
    url: URL;
    categoryId: string;
  };
  useEffect(() => {
    setProductPerPage(size);
    setSortProduct(sort);
  }, [sort, size]);

  const [sortProduct, setSortProduct] = useState(sort);
  const [productPerPage, setProductPerPage] = useState(size);

  const newUrl = new URL(url.toString());

  const handleChangeSort = (newSort: string) => {
    setSortProduct(newSort);
    setParams('sort', newSort);
  };
  const handleChangeSize = (newProductPerPage: string) => {
    setProductPerPage(newProductPerPage);
    setParams('size', newProductPerPage);
  };

  const setParams = (paramsName: string, paramsValue: string) => {
    newUrl.searchParams.set(paramsName, paramsValue);
    newUrl.searchParams.set('page', '1');
    navigate(`${newUrl.search}`);
  };

  const { data: categoryAll, isLoading } = useGetCategoryAllQuery();
  const currentCategory = categoryAll
    ? categoryAll.find((category) => category.id === Number(categoryId))
    : undefined;

  const breadcrumbs = createBreadcrumbs('catalog', currentCategory);
  return (
    <>
      <section className={styles.catalog}>
        <div className="container">
          <div className={styles['catalog-container']}>
            <Breadcrumbs options={breadcrumbs} activeLastLink={false} />
            <div className={styles.title}>
              <h2>Каталог</h2>
              <div className={styles.sort}>
                <Select
                  style="secondary"
                  onChange={handleChangeSort}
                  options={selectSortOptions}
                  value={sortProduct}
                />
              </div>
              <div className={styles.size}>
                <Select
                  style="secondary"
                  onChange={handleChangeSize}
                  options={['3', '6', '9', '12', '15', '18']}
                  value={productPerPage}
                />
              </div>
            </div>
            <div className={styles.main}>
              <aside className={styles.filters}>
                <Filter
                  title="Категорії"
                  filters={!isLoading ? categoryAll : undefined}
                />
              </aside>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;

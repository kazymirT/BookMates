import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import MenuList from './components/Menu/MenuList';
import Title from './components/Title/Title';
import { ACCOUNT_PAGE } from './data';
import Avatar from './modules/Avatar/Avatar';
import Greeting from './modules/Greeting/Greeting';
import Menu from './modules/Menu/Menu';
import Orders from './modules/Orders/Orders';
import Personal from './modules/Personal/Personal';
import Settings from './modules/Settings/Settings';
import style from './User.module.scss';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const User = () => {
  const { t } = useTranslation();
  const { userId } = useParams<{ userId: ACCOUNT_PAGE }>();
  const breadcrumbs = createBreadcrumbs(t('breadcrumbs.user'));
  return (
    <div className={style.user}>
      <div className="container">
        <div className={style['user__inner']}>
          <Breadcrumbs options={breadcrumbs} />
        </div>
      </div>
      <Avatar />
      <div className="container">
        <div className={style.inner}>
          <Greeting />
          <div className={style.wrapper}>
            <Menu
              title={<Title text="Меню" size="s" textPosition="left" />}
              body={<MenuList />}
            />
            {userId === ACCOUNT_PAGE.Settings ? (
              <Settings />
            ) : userId === ACCOUNT_PAGE.Orders ? (
              <Orders />
            ) : (
              <Personal />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

import { Link, NavLink } from 'react-router-dom';

import { NAVIGATION_LINKS } from '../data';
import styles from '../Header.module.scss';
import logo from '@/assets/icons/BookMates.svg';
import { RadioGroup } from '@/components/RadioGroup/RadioGroup';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';

const HeaderTop = () => {
  const onSupport = () => console.log('support');

  return (
    <div className={styles.top}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="icon logo" width={217} height={48} />
      </Link>
      <nav>
        <ul>
          {NAVIGATION_LINKS &&
            NAVIGATION_LINKS.map(({ href, id, name }) => (
              <li key={id}>
                <NavLink to={href}>{name}</NavLink>
              </li>
            ))}
        </ul>
        <Button
          buttonType={ButtonType.Button}
          size={Sizes.Link}
          variant={Variant.Link}
          text="Допомога"
          onClick={onSupport}
        />
      </nav>
      <RadioGroup />
    </div>
  );
};

export default HeaderTop;

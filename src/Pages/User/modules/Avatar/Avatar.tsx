import styles from './Avatar.module.scss';
import { Icon } from '@/components/ui-components/Icons';

const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <div className={styles.icon}>
        <Icon.Account width="55" height="55" />
      </div>
    </div>
  );
};

export default Avatar;

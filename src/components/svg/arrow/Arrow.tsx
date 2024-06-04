import styles from './ArrowIcon.module.scss';

const ArrowIcon = () => (
  <div className={styles.arrow}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 15.2925L4.35348 7.646L3.64648 8.353L12 16.7065L20.3535 8.353L19.6465 7.646L12 15.2925Z"
        stroke="#6a6a6a"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default ArrowIcon;

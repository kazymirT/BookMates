import styles from './EditIcon.module.scss';

const EditIcon = () => (
  <div className={styles.cart}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.5 20L3.5 20L3.5 5L12 5L12 4L2.5 4L2.5 21L21.5 21L21.5 11.5L20.5 11.5L20.5 20Z"
        fill="#6A6A6A"
        strokeWidth="1"
      />
      <path
        d="M10.5 10.293L10.5 14L14.207 14L21.707 6.49997L18 2.79297L10.5 10.293ZM13.793 13L11.5 13L11.5 10.707L18 4.20697L20.293 6.49997L13.793 13Z"
        fill="#6A6A6A"
        strokeWidth="1"
      />
    </svg>
  </div>
);

export default EditIcon;

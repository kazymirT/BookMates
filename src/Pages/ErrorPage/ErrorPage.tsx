import { useRouteError } from 'react-router-dom';

import styles from './ErrorPage.module.scss';
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page" className={styles.error}>
      <h1>OOps!</h1>
      <p>Sorry,this page does not exist.</p>
    </div>
  );
};

export default ErrorPage;

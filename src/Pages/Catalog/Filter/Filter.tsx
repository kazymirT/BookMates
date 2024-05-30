import styles from './Filter.module.scss';

type Props = {
  title: string;
  filters: {
    id: number;
    name: string;
  }[];
};

const Filter = ({ filters, title }: Props) => {
  return (
    <div className={styles.filter}>
      <h3>{title}</h3>
      <ul>
        {filters &&
          filters.map((filter) => <li key={filter.id}>{filter.name}</li>)}
      </ul>
    </div>
  );
};

export default Filter;

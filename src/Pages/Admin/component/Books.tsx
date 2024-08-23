import styles from './Components.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Position,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch } from '@/redux/hooks';
import { useGetBooksQuery } from '@/redux/services/books';
import { setBookId } from '@/redux/slices/adminSlice';
import { toggleModal } from '@/redux/slices/modalSlice';

const Books = () => {
  const dispatch = useAppDispatch();
  const { data: books } = useGetBooksQuery({ size: '99' });
  const handleOnClick = (id: number) => {
    dispatch(setBookId(id));
    dispatch(toggleModal({ openedModalType: 'edit-book' }));
  };
  const handleOnAddBook = () => {
    dispatch(toggleModal({ openedModalType: 'add-book' }));
  };
  return (
    <div className={styles.books}>
      <Button
        buttonType={ButtonType.Button}
        size={Sizes.FullS}
        text="Додати книгу"
        variant={Variant.Primary}
        icon={<Icon.Plus />}
        onClick={handleOnAddBook}
        iconPosition={Position.Left}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Фото</th>
            <th>Назва</th>
            <th>Автор</th>
            <th>Вартість</th>
            <th>Рік видання</th>
            <th>Кількість</th>
          </tr>
        </thead>
        <tbody>
          {books?.content.length &&
            books.content.map((book) => (
              <tr key={book.id} onClick={() => handleOnClick(book.id)}>
                <td>
                  <span>{book.id}</span>
                </td>
                <td className={styles.img}>
                  <img src={book.imageUrl} alt="" width={72} height={85} />
                </td>
                <td className={styles.td}>
                  <p className={styles.title}>{book.title}</p>
                </td>
                <td className={styles.td}>
                  <p className={styles.authors}>{book.authors.join(', ')}</p>
                </td>
                <td className={styles.td}>
                  <p className={styles.price}>{book.price}</p>
                </td>
                <td className={styles.td}>
                  <p className={styles.years}>{book.year}</p>
                </td>
                <td className={styles.td}>
                  <p className={styles.years}>{book.totalQuantity}</p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;

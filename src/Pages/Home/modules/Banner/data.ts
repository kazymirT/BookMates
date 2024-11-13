import img01 from './image/01.webp';
import img02 from './image/02.webp';
import img03 from './image/03.webp';
export interface BannerData {
  id: number;
  title: string;
  description: string;
  button: string;
  img: string;
}
export const BANNER_DATA: BannerData[] = [
  {
    id: 1,
    title: 'Хіти осінні! Навчайтесь із нами!',
    description: 'найкращі книги для розвитку і навчання дітей.',
    button: 'Детальніше',
    img: img01,
  },
  {
    id: 2,
    title: 'Занурюйся в пригоди разом із Містером Пігвіном',
    description: 'знижки до 35% до 15 листопада  ',
    button: 'Детальніше',
    img: img02,
  },
  {
    id: 3,
    title: 'Ну ж бо до пригод! Рятувати світ із нами!',
    description: 'знижки до 55% до 10 листопада',
    button: 'Детальніше',
    img: img03,
  },
];

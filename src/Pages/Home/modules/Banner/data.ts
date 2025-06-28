import slide1 from './image/slide_1.webp';
import slide2 from './image/slide_2.webp';
import slide3 from './image/slide_3.webp';
import slide4 from './image/slide_4.webp';
import slide5 from './image/slide_5.webp';
export interface Slide {
  id: number;
  link: string;
  image: string;
  alt: string;
}

export const SLIDER_DATA: Slide[] = [
  {
    id: 1,
    link: '',
    image: slide1,
    alt: 'Alt text for slide',
  },
  {
    id: 2,
    link: '',
    image: slide2,
    alt: 'Alt text for slide',
  },
  {
    id: 3,
    link: '',
    image: slide3,
    alt: 'Alt text for slide',
  },
  {
    id: 4,
    link: '/product/481',
    image: slide4,
    alt: 'Alt text for slide',
  },
  {
    id: 5,
    link: '',
    image: slide5,
    alt: 'Alt text for slide',
  },
];

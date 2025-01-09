import { http, HttpResponse } from 'msw';
export const bookMock = {
  id: 95,
  title: 'Книга Песик, який пильнує зірки. Том 1',
  description:
    'Ця історія про одних із найвідданіших тварин у світі, людську долю та сенс життя…\r\n\r\nУ покинутій обіч дороги машині знаходять тіло невідомого чоловіка, з моменту смерті якого минуло понад рік. Поряд із ним — песик, померлий заледве три місяці тому. Добросовісного соціального працівника Окуцу зворушила ця трагічна звістка, і він вирішує поїхати на місце події та зробити все, аби належно поховати обох. Окуцу навіть не підозрює, що ця подорож переверне долі багатьох…\r\n\r\nПісля цієї манґи вам захочеться обійняти свого улюбленця та подарувати всю свою любов до останку.',
  year: 2024,
  price: 250.0,
  totalQuantity: 100,
  languages: [
    {
      id: 3,
      name: 'українська',
    },
  ],
  authors: [
    {
      id: 32,
      name: 'Такаші Муракамі',
    },
  ],
  categories: [
    {
      id: 37,
      name: 'Манґа',
    },
  ],
  imageUrl:
    'https://teamchallenge-storage.s3.eu-central-1.amazonaws.com/images/1729671608649_dog%20%281%29.png',
  discount: 15,
  discountPrice: 212.5,
  expected: true,
};
export const booksMock = {
  content: [
    {
      id: 12,
      title:
        '7 звичок надзвичайно ефективних людей (7 nawyków skutecznego działania)',
      year: 2020,
      price: 500.0,
      totalQuantity: 150,
      languages: ['польська'],
      authors: ['Стівен Кові'],
      imageUrl:
        'https://teamchallenge-storage.s3.eu-central-1.amazonaws.com/images/book_12.webp',
      discount: 0,
      discountPrice: 500.0,
      expected: false,
    },
    {
      id: 3,
      title: 'MBA за 10 днів',
      year: 2019,
      price: 300.0,
      totalQuantity: 150,
      languages: ['українська'],
      authors: ['Стівен Сілбігер'],
      imageUrl:
        'https://teamchallenge-storage.s3.eu-central-1.amazonaws.com/images/book_3.webp',
      discount: 5,
      discountPrice: 285.0,
      expected: false,
    },
    {
      id: 14,
      title: 'Банзай (Banzai. Japonia dla dociekliwych)',
      year: 2022,
      price: 350.0,
      totalQuantity: 150,
      languages: ['польська'],
      authors: ['Софія Фабьяновська-Міцик'],
      imageUrl:
        'https://teamchallenge-storage.s3.eu-central-1.amazonaws.com/images/book_14.webp',
      discount: 5,
      discountPrice: 332.5,
      expected: false,
    },
    {
      id: 7,
      title:
        'Великий польсько-український, українсько-польський словник. Термінологія сучасного бізнесу. 200 000 слів',
      year: 2010,
      price: 300.0,
      totalQuantity: 150,
      languages: ['українська', 'польська'],
      authors: ['Станіслав Домагальскі'],
      imageUrl:
        'https://teamchallenge-storage.s3.eu-central-1.amazonaws.com/images/book_7.webp',
      discount: 5,
      discountPrice: 285.0,
      expected: false,
    },
    {
      id: 4,
      title: 'Ви це зможете! 7 складових здорового способу життя',
      year: 2020,
      price: 220.0,
      totalQuantity: 150,
      languages: ['українська'],
      authors: ['Дарка Озерна'],
      imageUrl:
        'https://teamchallenge-storage.s3.eu-central-1.amazonaws.com/images/book_4.webp',
      discount: 5,
      discountPrice: 209.0,
      expected: false,
    },
    {
      id: 18,
      title: 'Злий (Zły)',
      year: 2022,
      price: 650.0,
      totalQuantity: 150,
      languages: ['польська'],
      authors: ['Леопольд Тирманд'],
      imageUrl:
        'https://teamchallenge-storage.s3.eu-central-1.amazonaws.com/images/book_18.webp',
      discount: 0,
      discountPrice: 650.0,
      expected: false,
    },
    {
      id: 10,
      title: 'Книга Від хорошого до величного',
      year: 2022,
      price: 400.0,
      totalQuantity: 150,
      languages: ['українська'],
      authors: ['Джим Коллінз'],
      imageUrl:
        'https://teamchallenge-storage.s3.eu-central-1.amazonaws.com/images/book_10.webp',
      discount: 5,
      discountPrice: 380.0,
      expected: false,
    },
    {
      id: 95,
      title: 'Книга Песик, який пильнує зірки. Том 1',
      year: 2024,
      price: 250.0,
      totalQuantity: 100,
      languages: ['українська'],
      authors: ['Такаші Муракамі'],
      imageUrl:
        'https://teamchallenge-storage.s3.eu-central-1.amazonaws.com/images/1729671608649_dog%20%281%29.png',
      discount: 15,
      discountPrice: 212.5,
      expected: true,
    },
    {
      id: 20,
      title: 'Коротка історія економіки (Krótka historia ekonomii)',
      year: 2023,
      price: 450.0,
      totalQuantity: 150,
      languages: ['польська'],
      authors: ['Найл Кіштайні'],
      imageUrl:
        'https://teamchallenge-storage.s3.eu-central-1.amazonaws.com/images/book_20.webp',
      discount: 0,
      discountPrice: 450.0,
      expected: false,
    },
  ],
  pageable: {
    pageNumber: 0,
    pageSize: 9,
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    offset: 0,
    paged: true,
    unpaged: false,
  },
  totalPages: 3,
  totalElements: 23,
  last: false,
  size: 9,
  number: 0,
  sort: {
    empty: false,
    sorted: true,
    unsorted: false,
  },
  numberOfElements: 9,
  first: true,
  empty: false,
};
export const handlers = [
  // http.post(
  //   'https://3.73.128.44.nip.io/api/admin/author/add?name=gsgsggs',
  //   () => {
  //     return HttpResponse.json(
  //       { '': 'Author added: gsgsggs' },
  //       { status: 201 }
  //     );
  //   }
  // ),
  http.post(
    'https://3.73.128.44.nip.io/api/admin/author/add?name=gsgsggs',
    () => {
      return HttpResponse.text('Author added: gsgsggs', { status: 201 });
    }
  ),
  http.get('https://3.73.128.44.nip.io/api/open/book/95', () => {
    return HttpResponse.json(bookMock, { status: 200 });
  }),
  http.get(
    'https://3.73.128.44.nip.io/api/open/book/list?page=1&size=9&sort=&title=&price=&language=&year=&category=&author=',
    () => {
      return HttpResponse.json(booksMock, { status: 200 });
    }
  ),
];

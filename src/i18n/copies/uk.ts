export const ukraine = {
  lang: 'Українська',
  header: {
    links: {
      admin: 'Адмін',
      catalog: 'Каталог',
      children: 'Дитяча література',
    },
    menu: {
      login: 'Логін',
      register: 'Реєстрація',
      support: 'Підтримка',
    },
    search: {
      placeholder: 'Шукати',
      search: 'Шукати {{value}}',
      offers: 'Пропозиції',
      books: 'Книги',
      'no-result': 'За вашим запитом не знайдено жодних результатів',
      'show-all': 'Показати все',
    },
  },
  footer: {
    links: {
      main: 'Головна сторінка',
      delivery: 'Доставка та оплата',
      support: 'Зворотній зв’язок',
    },
    copyright: 'Bookmate 2024. Усі права захищено',
  },
  home: {
    banner: {
      h1: 'Досліджуй безмежні сторінки',
      description: `Знайди свою наступну пригоду
в нашій книжковій інтернет-крамниці!`,
      button: 'В Каталог',
    },
    'best-sellers': {
      title: 'Хіти продажів',
      button: 'Більше',
    },
    collage: {
      title: 'Найбільший книжковий магазин у вашому регіоні',
      description: `Приєднуйтесь до нашої спільноти книголюбів: Створіть свій обліковий запис і пориньте в нескінченну насолоду від читання!`,
      button: 'Створити акаунт',
    },
    sales: {
      title: 'Вигідні пропозиції',
      sale: 'Знижки {{value}}',
    },
  },
  catalog: {
    title: 'Каталог',
    filter: {
      categories: 'Категорії',
      language: 'Мова',
      price: 'Ціна',
    },
  },
  product: {
    categories: 'Категорія',
    years: 'Рік видання',
    language: 'Мова книги',
    description: 'Короткий опис',
    offers: 'Вам може сподобатись',
    'btn-buy': 'Купити зараз',
    'btn-basket': 'До кошика',
  },
  order: {
    title: 'Оформити замовлення',
    form: {
      one: {
        title: 'Дані для доставки',
        firstName: 'Ім`я',
        lastName: 'Прізвище',
        phone: 'Телефон',
        email: 'Email',
      },
      two: {
        title: 'Спосіб доставки',
        city: {
          placeholder:
            'Виберіть зі списку, або почніть водити назву вашого міста',
          required: 'Місто',
        },
        department: {
          placeholder: 'Нова пошта',
          required: 'Відділення Нової Пошти/поштомату',
        },
      },
    },
    aside: {
      title: 'Моє замовлення',
      amount: 'Сумма',
      delivery: 'Доставка',
      'promo-code': 'Промокод',
      'promo-code-placeholder': 'промокод',
      together: 'Разом',
      'payment-by-details': 'Оплата за реквізитами',
      'payment-upon-receipt': 'Оплата при отриманні',
      'btn-order': 'Підтвердити замовлення',
      'btn-shopping': 'Продовжити покупки',
    },
  },
  cart: {
    title: 'Кошик',
    together: 'Всього',
    'total-price': '{{totalPrice}} грн',
    empty: 'Кошик порожній',
    btn: 'Перейти до замовлення',
    notification: {
      title: 'Товар додано до кошика',
      'count-one': 'У кошику 1 товар',
      'count-more': 'У кошику {{cartItemsCount}} товарів',
      price: 'Сума товарів у кошику {{totalPrice}} грн',
      btn: 'Оформити замовлення',
    },
  },
};

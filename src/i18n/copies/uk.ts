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
    'clear-filter': 'Очистити',
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
      price: '{{price}} грн',
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
  login: {
    title: 'Логін',
    email: 'Електронна пошта',
    password: 'Пароль',
    wrong: `Ваша Електронна пошта або пароль невірні. Будь ласка, спробуйте ще раз або`,
    'btn-reset-password': 'змініть пароль.',
    'reset-password': 'Забув пароль',
    'btn-in': 'Увійти',
    'btn-register': 'В мене немає облікового запису',
  },
  register: {
    title: 'Реєстрація',
    'first-name': "Ім'я",
    'last-name': 'Прізвище',
    email: 'Електронна пошта',
    'email-error': 'Обліковий запис з такою електроною поштою вже існує.',
    'btn-reset-password': 'Забув пароль',
    'confirm-email': 'Підтвердіть електронну пошту',
    password: 'Пароль',
    'support-text': 'Мінімум 8 символів, без відступів і спеціальних знаків',
    checkbox:
      'Створюючи кабінет на Bookmate, я погоджуюся з правилами повернення та договором оферти.',
    'btn-in': 'Створити акаунт',
    'btn-register': 'В мене вже є обліковий запис',
  },
  'reset-password': {
    title: 'Відновлення паролю',
    description:
      'Забули пароль? Вкажіть вашу електронну пошту, щоб відновити пароль.',
    email: 'Електронна пошта',
    'btn-in': 'Скинути пароль',
    'btn-login': 'Я згадав свій пароль',
  },
  support: {
    title: 'Підтримка',
    description:
      'Залиште свою електронну адресу, поставте запитання і ми зв’яжемося з вами якнайшвидше.',
    email: 'Електронна пошта',
    select: 'Тема',
    question: 'Ваше запитання',
    'btn-send': 'Відправити',
  },
  'order-success': {
    title: 'Замовлення успішне',
    description:
      'Дякуємо за замовлення. Реквізити для оплати відправлені на пошту.',
    btn: 'Продовжити покупки',
  },
  'support-success': {
    title: 'Підтримка',
    description:
      'Дякуємо за звернення. Ми отримали ваше питання і зв’яжемося з вами якнайшвидше.',
  },
  'book-card': 'Купити',
  price: '{{price}} грн',
  profile: {
    title: 'Профіль користувача',
    links: {
      order: 'Мої замовлення',
      settings: 'Налаштування',
      support: 'Підтримка',
      logout: 'Вийти',
    },
  },
  breadcrumbs: {
    home: 'Головна',
    catalog: 'каталог',
    order: 'оформити замовлення',
  },
};

export const ukraine = {
  lang: 'Українська',
  header: {
    links: {
      special: 'Акції',
      'best-sellers': 'Хіт продажів',
      authors: 'Автори',
      support: 'Допомога',
    },
    drop: 'Каталог книг',
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
    'new-arrivals': {
      title: 'Новинки',
      button: 'Усі новинки',
    },
    sale: {
      title: 'Розпродаж',
      button: 'Більше книжок',
    },
    'book-collections': {
      title: 'Книжкові колекції',
      button: 'Більше колекцій',
    },
    authors: {
      title: 'Автори',
      button: 'Всі автори',
    },
    subscribe: {
      title: 'Підпишіться на розсилку',
      description:
        'Ви будете першими дізнаватися про нові книжки та отримувати наші рекомендації.',
      button: 'Підписатися',
    },
  },
  catalog: {
    title: 'Каталог',
    filter: {
      categories: 'Категорії',
      price: 'Ціна ({{price1}} - {{price2}})',
      language: 'Мова',
      languageWithCount: 'Мова ({{count}})',
      years: 'Рік видання',
      yearsWithCount: 'Рік видання ({{count}})',
    },
    'clear-filter': 'Скинути фільтр',
    sort: 'ua',
  },
  authors: {
    title: 'Автори',
    alphabet: 'ukr',
    search: 'Пошук у списку',
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
    'select-topic': 'ua',
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
    order: 'Оформити замовлення',
    authors: 'автори',
    collections: 'колекція',
  },
  'forms-error': {
    email: {
      required: 'Це поле є обов`язковим.',
      max: 'Максимальна кількість символів 30',
      email: 'Неправильний формат електронної пошти',
    },
    required: 'Це поле є обов`язковим.',
    phone: 'Введіть дійсний номер телефону',
    'email-confirm': 'Електрона адреса не збігається',
    topic: 'Це поле є обов`язковим.',
    question: 'мінімум 5 символів',
    password: {
      required: 'Це поле є обов`язковим.',
      min: 'мінімальна кількість символів 8',
      max: 'максимальна кількість символів 12',
      number: 'мінімум одна цифра',
      space: 'пробіли на початку, всередині і в кінці заборонені',
      'lower-letter': 'мінімум одна мала літера',
      'upper-letter': 'мінімум одна велика літера',
    },
    'first-name': {
      required: 'Це поле є обов`язковим.',
      min: 'мінімальна кількість символів 4',
      max: 'максимальна кількість символів 20',
      upper: 'Ім`я має починатись з великої літери',
    },
    'last-name': {
      required: 'Це поле є обов`язковим.',
      min: 'мінімальна кількість символів 4',
      max: 'максимальна кількість символів 20',
      upper: 'Прізвище має починатись з великої літери',
    },
    city: 'Це поле є обов`язковим.',
  },
  collections: {
    title: 'Книжкові колекції',
  },
};

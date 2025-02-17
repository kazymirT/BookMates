export const ukraine = {
  lang: 'Українська',
  header: {
    links: {
      special: 'Акції',
      'best-sellers': 'Хіт продажів',
      authors: 'Автори',
      support: 'Підтримка',
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
      support: 'Підтримка',
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
      placeholder: 'Електронна пошта',
      success: {
        title: 'Дякуємо!',
        description:
          'Тепер ви будете отримувати тільки свіжу інформацію про нові надходження ',
        button: 'Зрозуміло',
      },
      error: 'Дякуємо, проте ви вже підписані і ми дуже раді!',
    },
  },
  catalog: {
    title: 'Каталог',
    'title-two': 'Каталог книг',
    'hot-offers': 'Гарячі пропозиції',
    filter: {
      categories: 'Категорії',
      price: 'Ціна ({{price1}} - {{price2}})',
      language: 'Мова',
      languageWithCount: 'Мова ({{count}})',
      years: 'Рік видання',
      yearsWithCount: 'Рік видання ({{count}})',
    },
    'clear-filter': 'Скинути фільтр',
    'no-product':
      'Результатів пошуку по вибраних значеннях фільтра не знайдено',
    sort: 'ua',
  },
  authors: {
    title: 'Автори',
    alphabet: 'ukr',
    search: 'Пошук у списку',
  },
  product: {
    categories: 'Категорія:',
    years: 'Рік видання:',
    language: 'Мова книги',
    cover: 'Обкладинка:',
    'number-of-pages': 'Кількість сторінок:',
    characteristics: 'Характеристики:',
    description: 'Опис:',
    offers: 'З цим товаром купують',
    'btn-buy': 'Купити зараз',
    'btn-basket': 'До кошика',
    'btn-in-basket': 'В кошику',
    available: 'Товар у наявності',
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
    delivery: 'доставка',
    user: 'користувач',
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
  delivery: {
    welcome: {
      title: 'Вітаємо на нашому сайті!',
      description1:
        'Ми раді вітати вас у світі книг! Наша мета — зробити літературу доступною для кожного. У нашому інтернет-магазині ви знайдете широкий асортимент книг різних жанрів: від класики до сучасних бестселерів, від наукової літератури до фантастики.',
      description2:
        'Ми віримо, що книги здатні змінювати життя, надихати та відкривати нові горизонти. Тому ми прагнемо пропонувати тільки найкращі видання від відомих авторів і видавництв.',
      description3:
        'На нашому сайті ви можете легко знайти книги, які вас цікавлять, а також ознайомитися з новинками та акціями. Наша команда завжди готова забезпечити зручні умови доставки, оплати та повернення товару.',
      footer:
        'Ми щодня працюємо для вас – 24/7. Незважаючи на воєнний стан, ми докладаємо всіх зусиль, щоб виконати всі замовлення вчасно.',
    },
    delivery: {
      title: 'Доставка',
      'delivery-title':
        'Ми здійснюємо відправлення ваших книжечок за допомогою перевізника Нова пошта по буднях:',
      'delivery-item1':
        '- замовлення, оформлені в будні, вирушать до вас в день замовлення або наступного дня.',
      'delivery-item2':
        '- замовлення, оформлені у вихідні, поїдуть до вас у понеділок або вівторок.',
      description1: `У разі виникнення додаткових питань чи уточнень, ми неодмінно зв'яжемося з вами перед відправкою.
Доставка можлива в ті населені пункти, де працюють відділення чи поштомати Нової пошти`,
      subtitle: 'Доставка на відділення Нової пошти',
      description2:
        'Вартість доставки визначає перевізник. Замовлення буде доставлене в пункт самовивозу протягом 1-3 робочих днів. Нова пошта проінформує SMS-повідомленням про те, що замовлення чекає у відділенні Нової пошти.',
      description3:
        'Всі замовлення на суму від 599 грн доставляємо до відділень Нової пошти безкоштовно.',
      description4:
        'Зверніть увагу: замовлення, оформлені до 15:00, доставляються до відділення Нової пошти на наступний робочий день (у віддалені населені пункти на 2-3 день). Замовлення, оформлені після 15:00, будуть відправлені на наступний день. Замовлення може безкоштовно зберігатися на відділенні Нової пошти 6 робочі дні. На 7 день замовлення автоматично відправляється назад Відправникові. Для отримання відправлення необхідний паспорт, посвідчення особи або додаток Нової пошти. ',
    },
    pay: {
      title: 'Оплата',
      subtitle1: 'Важливо!',
      subtitle2: 'Оплата товару здійснюється лише у гривні.',
      header: 'При оформленні замовлення ви можете обрати варіант',
      subtitle3: 'Безготівкова оплата:',
      description:
        'За замовленням клієнта, співробітник інтернет-магазину оформляє рахунок-фактуру і відправляє її покупцеві за допомогою електронної пошти. На підставі рахунку-фактури покупець здійснює оплату за реквізитами, вказаними в рахунку-фактурі через банківську установу протягом 3-х робочих днів з дати виставлення рахунку.',
      description1:
        'Після сплати на пошту прийде повідомлення : «Замовлення сплачене» і номер ТТН;',
      subtitle4: 'Накладений платіж:',
      description2:
        'Ви можете оплатити замовлення при отриманні. Просто оберіть цей спосіб під час оформлення.',
      subtitle5: 'Повернення',
      description3:
        'Якщо з якоїсь причини книга вам не підійшла, ми пропонуємо просту процедуру повернення:',
      'item-title1': 'Термін повернення:',
      'item-title2': 'Умови повернення:',
      'item-title3': 'Процес повернення:',
      'item-description1':
        'Ви можете повернути товар протягом 14 днів з моменту отримання.',
      'item-description2':
        'Книга повинна бути в новому стані, без пошкоджень та в оригінальній упаковці. Будь ласка, збережіть чек або підтвердження покупки.',
      'item-description3': `Щоб повернути товар, зв'яжіться з нашою службою підтримки, і ми надамо вам інструкції щодо повернення та компенсації.`,
      footer1:
        'Якщо у вас є додаткові питання, не соромтеся звертатися до нас! Ми завжди готові допомогти.',
      footer2:
        'Приєднуйтесь до нашої книжкової спільноти — разом ми створимо світ, наповнений знаннями та натхненням!',
    },
  },
  loader: 'Завантажується',
  user: {
    greeting: 'Вітаємо,',
    menu: {
      title: 'Меню',
      settings: 'Налаштування',
      orders: 'Замовлення',
      info: 'Персональна інформація',
      logout: 'Вихід',
    },
    info: {
      title: 'Основна інформація',
      firstName: 'Ім’я:',
      lastName: 'Прізвище:',
      gender: 'Стать:',
      'date-of-birth': 'Дата народження:',
    },
    contact: {
      title: 'Контакти',
      phone: 'Номер',
      email: 'Пошта',
    },
    orders: 'Ваші замовлення',
    settings: {
      title: 'Мої налаштування',
      phone: 'Номер телефону',
      email: 'Електронна пошта',
      subscribe: 'Моя підписка',
      theme: 'Вигляд:',
      language: 'Мова:',
      btnEdit: 'Змінити',
      btnSave: 'Зберегти',
      btnCancel: 'Скасувати',
      subscribeDescription: 'Підписка на отримання рекламних листів',
    },
  },
  'product-card': {
    buy: 'Купити',
    sale: 'Акція',
  },
  'cart-informer': {
    cart: 'Кошик',
    price: '{{totalPrice}} грн',
  },
};

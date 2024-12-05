export const english = {
  lang: 'English',
  header: {
    links: {
      special: 'Special Offers',
      'best-sellers': 'Bestsellers',
      authors: 'Authors',
      support: 'Support',
    },
    drop: 'Book Catalog',
    menu: {
      login: 'Sign In',
      register: 'Sign Up',
      support: 'Support',
    },
    search: {
      placeholder: 'Search',
      search: 'Search {{value}}',
      offers: 'Offers',
      books: 'Books',
      'no-result': 'No results were found for your query',
      'show-all': 'Show all',
    },
  },
  footer: {
    links: {
      main: 'Main page',
      delivery: 'Delivery and payment',
      support: 'Support',
    },
    copyright: 'Bookmate 2024. All rights reserved',
  },
  home: {
    'new-arrivals': {
      title: 'New Arrivals',
      button: 'All New Arrivals',
    },
    sale: {
      title: 'Special offers',
      button: 'More Books',
    },
    'book-collections': {
      title: 'Book Collections',
      button: 'More Collections',
    },
    authors: {
      title: 'Authors',
      button: 'All Authors',
    },
    subscribe: {
      title: 'Subscribe to the Newsletter',
      description:
        'Be the first to hear about new books and receive our recommendations.',
      button: 'Subscribe',
    },
  },
  catalog: {
    title: 'Catalog',
    filter: {
      categories: 'Categories',
      price: 'Price ({{price1}} - {{price2}})',
      languageWithCount: 'Language ({{count}})',
      language: 'Language',
      years: 'Years',
      yearsWithCount: 'Years ({{count}})',
    },
    'clear-filter': 'Clean up',
    sort: 'en',
  },
  authors: {
    title: 'Authors',
    alphabet: 'en',
    search: 'Search',
  },
  product: {
    categories: 'Category:',
    years: 'Year of publication:',
    language: 'Language:',
    description: 'Description:',
    offers: 'You might like it',
    'btn-buy': 'Buy now',
    'btn-basket': 'To basket',
    'btn-in-basket': 'in the basket',
    cover: 'Cover:',
    'number-of-pages': 'Number of pages:',
    characteristics: 'Characteristics:',
    available: 'The product is available',
  },
  order: {
    title: 'Make an order',
    form: {
      one: {
        title: 'Shipping info',
        firstName: 'First name',
        lastName: 'Last name',
        phone: 'Phone',
        email: 'Email',
      },
      two: {
        title: 'Method of shipping',
        city: {
          placeholder:
            'Choose from the list or start typing the name of your city',
          required: 'City',
        },
        department: {
          placeholder: 'Nova Poshta',
          required: 'Nova Poshta branch/postal machine',
        },
      },
    },
    aside: {
      title: 'My order',
      amount: 'Subtotal',
      delivery: 'Shipping',
      'promo-code': 'Discount code',
      'promo-code-placeholder': 'code',
      together: 'Total',
      price: '{{price}} UAH',
      'payment-by-details': 'Payment via bank details',
      'payment-upon-receipt': 'Payment upon receipt',
      'btn-order': 'Confirm the order',
      'btn-shopping': 'Continue shopping',
    },
  },
  cart: {
    title: 'Cart',
    together: 'Total',
    'total-price': '{{totalPrice}} UAH',
    btn: 'Check out',
    empty: 'Your cart is empty',
    notification: {
      title: 'Item added to cart',
      'count-one': 'There is 1 item in the cart',
      'count-more': 'There is {{cartItemsCount}} items in cart ',
      price: 'The amount of goods in the cart {{totalPrice}}$',
      btn: 'Make an order',
    },
  },
  login: {
    title: 'Sign In',
    email: 'Email',
    password: 'Password',
    wrong: `Your email or password is incorrect. Please try again or`,
    'btn-reset-password': 'change password.',
    'reset-password': 'I forgot my password',
    'btn-in': 'Sign In',
    'btn-register': 'I don’t have an account',
  },
  register: {
    title: 'Sign Up',
    'first-name': 'First Name',
    'last-name': 'Last Name',
    email: 'Email',
    'confirm-email': 'Confirm email',
    'email-error': 'An account with this email already exists.',
    'btn-reset-password': 'I forgot my password',
    password: 'Password',
    'support-text':
      'Minimum of 8 characters, without indents or special characters',
    checkbox:
      'By creating an account on Bookmate, I agree to the return policy and offer agreement.',
    'btn-in': 'Create an Account',
    'btn-register': 'I already have an account',
  },
  'reset-password': {
    title: 'Reset Password',
    description:
      'Forgot your password? Enter your email address to reset your password.',
    email: 'Email',
    'btn-in': 'Reset Password',
    'btn-login': 'I remembered my password',
  },
  support: {
    title: 'Support',
    description:
      'Leave your email address, ask a question and we will get back to you as soon as possible.',
    email: 'Email',
    select: 'Topic',
    'select-topic': 'en',
    question: 'Your question',
    'btn-send': 'Send',
  },
  'order-success': {
    title: 'Order successful',
    description:
      'Thank you for your order. Confirmation details have been sent to your email.',
    btn: 'Continue shopping',
  },
  'support-success': {
    title: 'Support',
    description:
      'Thank you for your request. We are already working on it, and you will receive an answer soon. Bookmate team.',
  },
  'book-card': 'Buy Now',
  price: '{{price}} UAH',
  profile: {
    title: 'User profile',
    links: {
      order: 'My orders',
      settings: 'Settings',
      support: 'Support',
      logout: 'Log out',
    },
  },
  breadcrumbs: {
    home: 'Home',
    catalog: 'catalog',
    order: 'make an order',
    authors: 'authors',
    collections: 'collections',
    delivery: 'delivery',
  },
  'forms-error': {
    email: {
      required: 'This field is required',
      max: 'The maximum number of characters is 30',
      email: 'Email format is incorrect',
    },
    required: 'This field is required',
    phone: 'Please enter a valid phone number',
    'email-confirm': 'The email address does not match',
    topic: 'This field is required.',
    question: 'minimum 5 characters',
    password: {
      required: 'This field is required',
      min: 'minimum number of characters is 8',
      max: 'The maximum number of characters is 12',
      number: 'at least one digit',
      space: 'spaces at the beginning, inside and at the end are prohibited',
      'lower-letter': 'at least one lowercase letter',
      'upper-letter': 'at least one capital letter',
    },
    'first-name': {
      required: 'This field is required',
      min: 'minimum number of characters is 4',
      max: 'The maximum number of characters is 20',
      upper: 'The name must start with a capital letter',
    },
    'last-name': {
      required: 'This field is required',
      min: 'minimum number of characters is 4',
      max: 'The maximum number of characters is 20',
      upper: 'The last name must start with a capital letter',
    },
    city: 'This field is required',
  },
  collections: {
    title: 'Book Collections',
  },
  delivery: {
    welcome: {
      title: 'Welcome to our website!',
      description1:
        'We are glad to welcome you to the world of books! Our goal is to make literature accessible to everyone. In our online store you will find a wide range of books of various genres: from classics to modern bestsellers, from science fiction to fantasy.',
      description2: `We believe that books can change lives, inspire and open new horizons. That's why we strive to offer only the best publications from well-known authors and publishers.`,
      description3:
        'On our website, you can easily find the books you are interested in, as well as get acquainted with new products and promotions. Our team is always ready to provide convenient conditions for delivery, payment, and return of goods.',
      footer:
        'We work for you every day - 24/7. Despite the martial law, we make every effort to fulfill all orders on time.',
    },
    delivery: {
      title: 'Delivery',
      'delivery-title':
        'We ship your books by Nova Post on weekdays every day:',
      'delivery-item1':
        '- orders placed on weekdays will be sent to you on the day of the order or the next day.',
      'delivery-item2':
        '- orders placed on weekends will be delivered to you on Monday or Tuesday.',
      description1: `If you have any additional questions or clarifications, we will contact you before shipping.
Delivery is possible to those settlements where there are Nova Posе offices or post offices.
`,
      subtitle: 'Delivery to a Nova Poshta branch',
      description2:
        'The cost of delivery is determined by the carrier. The order will be delivered to the pickup point within 1-3 business days. Nova Posе will inform you by SMS that the order is waiting at the Nova Posе branch.',
      description3:
        'We deliver all orders for the amount of UAH 599 or more to Nova Posе offices for free.',
      description4:
        'Please note: orders placed before 15:00 are delivered to the Nova Posе branch on the next business day (in remote locations - on 2-3 days). Orders placed after 15:00 will be shipped the next day. Orders can be stored at a Nova Posе branch for 6 business days free of charge. On the 7th day, the order is automatically sent back to the Sender. To receive the shipment, you need a passport, ID card or Nova Posе app.  ',
    },
    pay: {
      title: 'Payment',
      subtitle1: 'Important!',
      subtitle2: 'Payment for goods is made only in UAH.',
      header: 'When placing an order, you can choose the option',
      subtitle3: 'Cashless payment:',
      description: `At the customer's request, an employee of the online store issues an invoice and sends it to the customer via e-mail. On the basis of the invoice, the buyer makes a payment using the details specified in the invoice through a banking institution within 3 business days from the date of the invoice.`,
      description1:
        'After payment, you will receive a notification by e-mail: “Order paid” and the TTN number.',
      subtitle4: 'Payment on receipt:',
      description2:
        'You can pay for the order upon receipt. Just choose this method during checkout.',
      subtitle5: 'Returns:',
      description3:
        'If for some reason the book does not suit you, we offer a simple return procedure:',
      'item-title1': 'Return period:',
      'item-title2': 'Return conditions:',
      'item-title3': 'Return process:',
      'item-description1': 'You can return the item within 14 days of receipt.',
      'item-description2':
        'The book must be in new condition, without damage and in its original packaging. Please keep your receipt or proof of purchase.',
      'item-description3': `To return an item, please contact our customer support team and we will provide you with return and refund instructions.`,
      footer1: `If you have any additional questions, don't hesitate to contact us! We are always ready to help.`,
      footer2:
        'Join our book community - together we will create a world filled with knowledge and inspiration!',
    },
  },
};

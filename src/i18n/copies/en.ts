export const english = {
  lang: 'English',
  header: {
    links: {
      admin: 'Admin',
      catalog: 'Catalog',
      children: "Children's literature",
    },
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
    banner: {
      h1: 'Explore Limitless Pages',
      description: `Find Your Next Adventure 
in Our Online Bookstore!`,
      button: 'In Catalog',
    },
    'best-sellers': {
      title: 'Best sellers',
      button: 'More',
    },
    collage: {
      title: 'The largest bookstore in your area',
      description: `Join our community of book lovers: Create your account and immerse yourself in endless reading pleasure!`,
      button: 'Create Account',
    },
    sales: {
      title: 'Deals',
      sale: '{{value}} Sale',
    },
  },
  catalog: {
    title: 'Catalog',
    filter: {
      categories: 'Categories',
      language: 'Language',
      price: 'Price',
      years: 'Years',
    },
    'clear-filter': 'Clean up',
    sort: 'en',
  },
  product: {
    categories: 'Category',
    years: 'Year of publication',
    language: 'Language',
    description: 'Description',
    offers: 'You might like it',
    'btn-buy': 'Buy now',
    'btn-basket': 'To basket',
  },
  order: {
    title: 'Make an order',
    form: {
      one: {
        title: 'Delivery data',
        firstName: 'First name',
        lastName: 'Last name',
        phone: 'Phone',
        email: 'Email',
      },
      two: {
        title: 'Method of delivery',
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
      amount: 'Amount',
      delivery: 'Delivery',
      'promo-code': 'Promo code',
      'promo-code-placeholder': 'promo code',
      together: 'Together',
      price: '{{price}} UAH',
      'payment-by-details': 'Payment by details',
      'payment-upon-receipt': 'Payment upon receipt',
      'btn-order': 'Confirm the order',
      'btn-shopping': 'Continue shopping',
    },
  },
  cart: {
    title: 'Cart',
    together: 'Together',
    'total-price': '{{totalPrice}} UAH',
    btn: 'Go to order',
    empty: 'Your cart is empty',
    notification: {
      title: 'The product has been added to the cart',
      'count-one': 'There is 1 product in the cart ',
      'count-more': '{{cartItemsCount}} items in cart ',
      price: 'The amount of goods in the basket {{totalPrice}} $',
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
};

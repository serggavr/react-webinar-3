import React from 'react';
import { createRoot } from 'react-dom/client';
import { generateCode } from './utils.js';
import App from './app.js';
import Store from './store.js';
import Cart from './cart.js';

const store = new Store({
  list: [
    { code: generateCode(), title: 'Название товара', price: 100.0 },
    { code: generateCode(), title: 'Книга про React', price: 770 },
    { code: generateCode(), title: 'Конфета', price: 33 },
    { code: generateCode(), title: 'Трактор', price: 7955320 },
    { code: generateCode(), title: 'Телефон iPhone XIXV', price: 120000 },
    { code: generateCode(), title: 'Карандаши цветные', price: 111 },
    { code: generateCode(), title: 'Товар сюрприз', price: 0 },
  ]
});

const cart = new Cart({
  list: [
    // { code: 1, title: 'Название товара', price: 100.0, value: 1 },
    // { code: 2, title: 'Книга про React', price: 770, value: 2 },
    // { code: 3, title: 'Конфета', price: 33, value: 1 },
  ]
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store} cart={cart} />);
});

cart.subscribe(() => {
  root.render(<App store={store} cart={cart} />);
});

// Первый рендер приложения
root.render(<App store={store} cart={cart} />);

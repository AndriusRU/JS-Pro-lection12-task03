import Product from "../Product";
import Cart from "../Cart";

test('add new position', () => {
  const myCart = new Cart();
  const newMovie = new Product(
    1,
    'Мстители',
    2012,
    'USA',
    'Avengers Assemble!',
    'фантастика',
    '137 мин',
    1000,
    true
  );

  myCart.add(newMovie);

  expect(myCart.list[0]).toEqual(newMovie);

})

test('add additional count position', () => {
  const myCart = new Cart();
  const newMovie = new Product(
    1,
    'Мстители',
    2012,
    'USA',
    'Avengers Assemble!',
    'фантастика',
    '137 мин',
    1000,
    true
  );

  const newPhone = new Product(
    2,
    'iPhone 13',
    2020,
    'USA',
    'The best phone!',
    'phone',
    '0',
    10000,
    false
  );

  myCart.add(newMovie);
  myCart.add(newMovie);
  myCart.add(newPhone);
  myCart.add(newPhone);

  expect(myCart.list.length).toEqual(3);

})

test('remove position', () => {
  const myCart = new Cart();
  const newMovie = new Product(
    10,
    'Мстители',
    2012,
    'USA',
    'Avengers Assemble!',
    'фантастика',
    '137 мин',
    1000,
    true
  );

  myCart.add(newMovie);
  myCart.removeItem(10);

  expect(myCart.list.length).toEqual(0);

})

test('Sum without discount', () => {
  const myCart = new Cart();
  const movie1 = new Product(
    10,
    'Мстители',
    2012,
    'USA',
    'Avengers Assemble!',
    'фантастика',
    '137 мин',
    1000,
    true
  );

  const movie2 = new Product(
    1,
    '1408',
    2007,
    'USA',
    '«Отель «Дельфин» приглашает Вас остановиться в любом из наших роскошных номеров. Кроме одного…»',
    'horror',
    '104 мин',
    500,
    true
  );


  myCart.add(movie1);
  myCart.add(movie2);
  const expectSumm = 1500;

  expect(myCart.totalSum()).toEqual(expectSumm);

})

test('Sum with discount', () => {
  const myCart = new Cart();
  const movie1 = new Product(
    10,
    'Мстители',
    2012,
    'USA',
    'Avengers Assemble!',
    'фантастика',
    '137 мин',
    1000,
    true
  );

  const movie2 = new Product(
    1,
    '1408',
    2007,
    'USA',
    '«Отель «Дельфин» приглашает Вас остановиться в любом из наших роскошных номеров. Кроме одного…»',
    'horror',
    '104 мин',
    500,
    true
  );


  myCart.add(movie1);
  myCart.add(movie2);
  const discount = 10;
  const expectSumm = 1350;

  expect(myCart.totalSumDiscount(discount)).toEqual(expectSumm);

})


test('remove position not in list', () => {
  const myCart = new Cart();
  const newMovie = new Product(
    10,
    'Мстители',
    2012,
    'USA',
    'Avengers Assemble!',
    'фантастика',
    '137 мин',
    1000,
    true
  );

  myCart.add(newMovie);
  myCart.removeItem(10);
  myCart.removeItem(10);

  expect(myCart.list.length).toEqual(0);

})

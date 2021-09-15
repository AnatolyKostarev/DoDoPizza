"use strict";
// console.log(document.body.childNodes); // родительский узел
// console.log("Children", document.body.children); // elements

// Task 1 - найти элемент корзины.

let button = document.querySelector(".js-header-busket");
console.log(button);

//Task 2 - найти второй элемент из блока новое и популярное.

let secondCard = document.querySelector(".js-new-product_card:nth-child(2)");
console.log(secondCard);

// Task 3 - найти все кнопки "выбрать/собрать" внутри блока "Пицца".

let pizzaButtons = document.querySelector(".js-product-wraper");
// let but = pizzaButtons.querySelectorAll();
console.log(pizzaButtons);

// Task 4 - найти все ссылки из верхнего меню.

let navItems = document.querySelectorAll(".header .header-menu__item");
console.log(navItems);

// Task 1 - заменить заголовок "ПИЦЦА" на "ИТАЛЬЯНСКАЯ ПИЦЦА"

let productTitle = document.querySelector(".js-product-title");

productTitle.textContent = "Итальянская пицца";

// Task 2 -  получить элемент с классом slider__img вместе с тегом и заменить на тег с любым текстом.

let changeSlider = document.querySelectorAll(".js-slider-img");

changeSlider.forEach(
  (elem) =>
    (elem.outerHTML =
      '<p style="text-align: left; font-size: 40px">Slider is under the construction</p>')
);

// Task 3 - получить элемент с классом product-description в виде текста. Используя любые строковые методы заменить тег h3 на h4 и добавить div с классом product__subtitle2 с какой-либо доп. информацией.Элемент с классом product-description заменить на обработанную строку.

let productTitles = [...document.querySelectorAll(".js-product-desc")];

console.log(productTitles);

for (let elem of productTitles) {
  console.log(elem.innerText);
}

"use strict";

const $slider = document.querySelector(".js-slider");
const $items = Array.from($slider.querySelectorAll(".js-slider-img"));
console.log($items);

$slider.style.transform = "translateX(-100%)";

$items.forEach((item) => {
  item.addEventListener("click", handleImageClick, false);
});

function handleImageClick(event) {
  console.log(event.target);
  $items.forEach((item) => item.classList.remove("active"));
  event.currentTarget.classList.add("active");
  const index = $items.indexOf(event.currentTarget);
  $slider.style.transform = `translateX(-${100 * index}%)`;
}

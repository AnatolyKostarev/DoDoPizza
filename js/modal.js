const buttons = document.querySelectorAll("popup__size popup__size_btn");
const buttons1 = document.querySelectorAll(
  "popup__composition popup__composition_btn"
);

const handleClick = (e) => {
  const currentItem = e.target.closest(".item");
  const isActive = currentItem.classList.contains("active");

  buttons.forEach((button) =>
    button.closest(".item").classList.remove("active")
  );

  if (!isActive) currentItem.classList.add("active");
};

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

buttons1.forEach((button) => {
  button.addEventListener("click", handleClick);
});

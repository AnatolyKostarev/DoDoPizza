const buttons = document.querySelectorAll("popup__size");

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

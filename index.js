let hamburger_menu = document.querySelector(".hamburger_menu");
let hamburger_menu_items = document.querySelector(".hamburger_menu_items");
let close_menu = document.querySelector(".close_menu");
// console.log(close_menu);

hamburger_menu.addEventListener("click", () => {
    hamburger_menu_items.style.right = 0;
})

close_menu.addEventListener("click", () => {
    hamburger_menu_items.style.right = '-100%';
})
// console.log(hamburger_menu);

// Carousel
document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carousel.querySelectorAll(".carousel__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
  
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
    });
  
    // Select the first item on page load
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
  });
  
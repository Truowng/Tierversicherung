import { $, $$ } from "./app.js";

export function changePriceSection() {
  const priceSections = $$(
    "#price .price-animal-selection .price-animal-selection-item"
  );
  priceSections.forEach((priceSection) => {
    priceSection.addEventListener("click", () => {
      if (priceSection.getAttribute("data-animal") == "dog") {
        $(".price-animal-selection-item.active").classList.remove("active");
        priceSection.classList.add("active");
        // console.log($(".price-animal-page-container.active").classList);
        $(".price-animal-page-container.active").classList.remove("active");
        $(
          '[class="price-animal-page-container"][data-animal="dog"]'
        ).classList.add("active");
      }
      if (priceSection.getAttribute("data-animal") == "cat") {
        $(".price-animal-selection-item.active").classList.remove("active");
        priceSection.classList.add("active");
        // console.log($(".price-animal-page-container.active").classList);
        $(".price-animal-page-container.active").classList.remove("active");
        $(
          '[class="price-animal-page-container"][data-animal="cat"]'
        ).classList.add("active");
      }
      if (priceSection.getAttribute("data-animal") == "horse") {
        $(".price-animal-selection-item.active").classList.remove("active");
        priceSection.classList.add("active");
        // console.log($(".price-animal-page-container.active").classList);
        $(".price-animal-page-container.active").classList.remove("active");
        $(
          '[class="price-animal-page-container"][data-animal="horse"]'
        ).classList.add("active");
      }
    });
  });
}

import { $, $$ } from "./app.js";

export function openModal() {
  $("#header .menu-button").addEventListener("click", () => {
    $("#header .modal-container").style.display = "block";
    $("#header .modal-container").style.animationName = "fadeIn";
    $("#header .modal-container .menu-container").style.animationName =
      "slideIn";
  });
}

export function closeModal() {
  $("#header .modal-container .menu-container .menu-button").addEventListener(
    "click",
    () => {
      $("#header .modal-container").style.animationName = "fadeOut";
      $("#header .modal-container .menu-container").style.animationName =
        "slideOut";
      setTimeout(() => {
        $("#header .modal-container").style.display = "none";
      }, 500);
    }
  );
}

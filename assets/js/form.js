import { $, $$ } from "./app.js";

export function dropDown() {
  const tableInputs = $$(".form-animal-table-content-input");
  tableInputs.forEach((tableInput) => {
    tableInput.querySelector("input").addEventListener("focusin", () => {
      $(".form-animal-table-content-input.active")
        ? $(".form-animal-table-content-input.active").classList.remove(
            "active"
          )
        : tableInput.classList.add("active");
    });

    tableInput.querySelector("input").addEventListener("focusout", () => {
      setTimeout(() => {
        if (
          $(".form-animal-table-content-dropdown input") ===
          document.activeElement
        ) {
        } else {
          $(".form-animal-table-content-dropdown input").addEventListener(
            "focusout",
            () => {
              $(".form-animal-table-content-input.active")
                ? $(".form-animal-table-content-input.active").classList.remove(
                    "active"
                  )
                : "";
            }
          );
          $(".form-animal-table-content-input.active")
            ? $(".form-animal-table-content-input.active").classList.remove(
                "active"
              )
            : "";
        }
      }, 10);
    });
  });
}

export function changePage() {
  let pageContainer;
  let pageTables;
  let animal = $(".form-animal-container.active").getAttribute("data-animal");
  pageContainer = $(
    `[class="form-animal-container active"][data-animal="${animal}"]`
  );
  pageTables = pageContainer.querySelectorAll(".form-animal-table-content");
  pageTables.forEach((pageTable) => {
    if (pageTable.querySelector(".next-button")) {
      pageTable.querySelector(".next-button").addEventListener("click", () => {
        if (pageTable.getAttribute("data-page") == "1") {
          pageContainer
            .querySelector('[data-page="1"]')
            .classList.remove("active");
          pageContainer
            .querySelector('[data-page="2"]')
            .classList.add("active");
          pageContainer.querySelector(
            ".form-animal-table-progress p"
          ).innerText = "33%";
          pageContainer.querySelector(
            ".form-animal-table-progress-bar-current"
          ).style.width = "33%";
        } else if (pageTable.getAttribute("data-page") == "2") {
          pageContainer
            .querySelector('[data-page="2"]')
            .classList.remove("active");
          pageContainer
            .querySelector('[data-page="3"]')
            .classList.add("active");
          pageContainer.querySelector(
            ".form-animal-table-progress p"
          ).innerText = "67%";
          pageContainer.querySelector(
            ".form-animal-table-progress-bar-current"
          ).style.width = "67%";
        }
      });
    }
    if (pageTable.querySelector(".back-button")) {
      pageTable.querySelector(".back-button").addEventListener("click", () => {
        if (pageTable.getAttribute("data-page") == "3") {
          pageContainer
            .querySelector('[data-page="3"]')
            .classList.remove("active");
          pageContainer
            .querySelector('[data-page="2"]')
            .classList.add("active");
          pageContainer.querySelector(
            ".form-animal-table-progress p"
          ).innerText = "33%";
          pageContainer.querySelector(
            ".form-animal-table-progress-bar-current"
          ).style.width = "33%";
        } else if (pageTable.getAttribute("data-page") == "2") {
          pageContainer
            .querySelector('[data-page="2"]')
            .classList.remove("active");
          pageContainer
            .querySelector('[data-page="1"]')
            .classList.add("active");
          pageContainer.querySelector(
            ".form-animal-table-progress p"
          ).innerText = "0%";
          pageContainer.querySelector(
            ".form-animal-table-progress-bar-current"
          ).style.width = "0%";
        }
      });
    }
  });
}

export function toggleRadio() {
  let formContainer;
  const radios = $$(
    "#form .form-animal-table-content .form-animal-table-content-input .form-animal-table-content-checkbox label"
  );
  radios.forEach((radio) => {
    radio.addEventListener("click", () => {
      if (
        $(".form-animal-container.active").getAttribute("data-animal") == "dog"
      ) {
        formContainer = $(
          '[class="form-animal-container active"][data-animal="dog"]'
        );
        if (radio.getAttribute("for") == "all") {
          formContainer.querySelector(".insurance-all-package").style.display =
            "block";
          formContainer.querySelector(".insurance-part-package").style.display =
            "none";
        } else if (radio.getAttribute("for") == "part") {
          formContainer.querySelector(".insurance-all-package").style.display =
            "none";
          formContainer.querySelector(".insurance-part-package").style.display =
            "block";
        }
      }
      if (
        $(".form-animal-container.active").getAttribute("data-animal") == "cat"
      ) {
        formContainer = $(
          '[class="form-animal-container active"][data-animal="cat"]'
        );
        if (radio.getAttribute("for") == "all-cat") {
          formContainer.querySelector(".insurance-all-package").style.display =
            "block";
          formContainer.querySelector(".insurance-part-package").style.display =
            "none";
        } else if (radio.getAttribute("for") == "part-cat") {
          formContainer.querySelector(".insurance-all-package").style.display =
            "none";
          formContainer.querySelector(".insurance-part-package").style.display =
            "block";
        }
      }
      if (
        $(".form-animal-container.active").getAttribute("data-animal") ==
        "horse"
      ) {
        formContainer = $(
          '[class="form-animal-container active"][data-animal="horse"]'
        );
        if (radio.getAttribute("for") == "basic-horse") {
          formContainer.querySelector(
            ".insurance-basic-package"
          ).style.display = "block";
          formContainer.querySelector(
            ".insurance-premium-package"
          ).style.display = "none";
          formContainer.querySelector(
            ".insurance-premium-plus-package"
          ).style.display = "none";
          formContainer.querySelector(".insurance-inkl-package").style.display =
            "none";
        } else if (radio.getAttribute("for") == "premium-horse") {
          formContainer.querySelector(
            ".insurance-basic-package"
          ).style.display = "none";
          formContainer.querySelector(
            ".insurance-premium-package"
          ).style.display = "block";
          formContainer.querySelector(
            ".insurance-premium-plus-package"
          ).style.display = "none";
          formContainer.querySelector(".insurance-inkl-package").style.display =
            "none";
        } else if (radio.getAttribute("for") == "premium-plus-horse") {
          formContainer.querySelector(
            ".insurance-basic-package"
          ).style.display = "none";
          formContainer.querySelector(
            ".insurance-premium-package"
          ).style.display = "none";
          formContainer.querySelector(
            ".insurance-premium-plus-package"
          ).style.display = "block";
          formContainer.querySelector(".insurance-inkl-package").style.display =
            "none";
        } else if (radio.getAttribute("for") == "inkl-horse") {
          formContainer.querySelector(
            ".insurance-basic-package"
          ).style.display = "none";
          formContainer.querySelector(
            ".insurance-premium-package"
          ).style.display = "none";
          formContainer.querySelector(
            ".insurance-premium-plus-package"
          ).style.display = "none";
          formContainer.querySelector(".insurance-inkl-package").style.display =
            "block";
        }
      }
    });
  });
}

export function changeForm() {
  const forms = $$("#form .form-animal-selection .form-animal-selection-item");
  forms.forEach((form) => {
    form.addEventListener("click", () => {
      if (form.getAttribute("data-animal") == "dog") {
        $(".form-animal-selection-item.active").classList.remove("active");
        form.classList.add("active");
        $(".form-animal-container.active").classList.remove("active");
        $('[data-animal="dog"][class="form-animal-container"]').classList.add(
          "active"
        );
        changePage();
      }
      if (form.getAttribute("data-animal") == "cat") {
        $(".form-animal-selection-item.active").classList.remove("active");
        form.classList.add("active");
        $(".form-animal-container.active").classList.remove("active");
        $('[data-animal="cat"][class="form-animal-container"]').classList.add(
          "active"
        );
        changePage();
      }
      if (form.getAttribute("data-animal") == "horse") {
        $(".form-animal-selection-item.active").classList.remove("active");
        form.classList.add("active");
        $(".form-animal-container.active").classList.remove("active");
        $('[data-animal="horse"][class="form-animal-container"]').classList.add(
          "active"
        );
        changePage();
      }
    });
  });
}

export function rangeSlider() {
  const rangeSlider = $(
    "#form .form-animal-table-content-dragbar-container .dragbar"
  );
  const rangeNumber = $(
    "#form .form-animal-table-content .form-animal-table-content-drag .form-animal-table-content-dragbar-container .dragbar-number"
  );
  rangeNumber.innerHTML = rangeSlider.value;

  rangeSlider.oninput = function () {
    rangeNumber.innerHTML = this.value;
  };
}

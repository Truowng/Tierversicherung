import { $, $$ } from "./app.js";

const removeActive = (element, isDataPage = false, dataPage = null) =>
  isDataPage
    ? element
        .querySelector(`[data-page="${dataPage}"]`)
        .classList.remove("active")
    : $(`.${element}.active`).classList.remove("active");

const addActive = (element, isDataPage = false, dataPage = null) =>
  isDataPage
    ? element.querySelector(`[data-page="${dataPage}"]`).classList.add("active")
    : $(`.${element}.active`).classList.add("active");

export function dropDown() {
  const tableInputs = $$(".form-animal-table-content-input");
  const dropDownInputs = $$(".form-animal-table-content-dropdown input");
  const dropDownList = $$(".form-animal-table-content-dropdown ul li");

  tableInputs.forEach((tableInput) => {
    tableInput.querySelector("input").addEventListener("focusin", () => {
      $(".form-animal-table-content-input.active")
        ? removeActive("form-animal-table-content-input")
        : "";
      tableInput.classList.add("active");
    });

    tableInput.querySelector("input").addEventListener("focusout", () => {
      setTimeout(() => {
        let count = 0;
        dropDownInputs.forEach((dropDownInput) => {
          if (dropDownInput === document.activeElement) {
            count--;
          } else {
            count++;

            if (count == dropDownInputs.length) {
              $(".form-animal-table-content-input.active") &&
                removeActive("form-animal-table-content-input");
            } else {
              dropDownInput.addEventListener("focusout", () => {
                $(".form-animal-table-content-input.active") &&
                  removeActive("form-animal-table-content-input");
              });
            }
          }
        });
      }, 10);
    });
  });
  dropDownList.forEach((dropDownItem) => {
    dropDownItem.addEventListener("mousedown", () => {
      $(".form-animal-table-content-input.active input").value =
        dropDownItem.innerHTML;
      calculator("dog", 1);
    });
  });
}

export function calculator(animal, initValue) {
  console.log(animal);
  const dataPage = $(
    `[class="form-animal-container active"][data-animal="${animal}"]`
  )
    ? $(`[class="form-animal-container active"][data-animal="${animal}"]`)
    : "";
  // console.log(dataPriceValue);
  if (animal == "dog") {
    if ($(".form-animal-table-content-input.active input").value == "1 Jahr") {
      let dataPriceValue =
        dataPage != ""
          ? dataPage.querySelector(
              ".form-animal-table-content.active .form-animal-table-content-tag-price p span"
            ).innerHTML * 1
          : "";
      let output = dataPriceValue + 0.4;
      dataPage.querySelector(
        ".form-animal-table-content.active .form-animal-table-content-tag-price p span"
      ).innerHTML = Math.round(output * 100) / 100;
      console.log(output);
    } else {
    }
  } else if (animal == "dog") {
    // value = initValue;
    // console.log("dog", value);
  } else {
    // value = initValue;
    // console.log("horse", value);
  }
}

export function changePage() {
  let pageContainer;
  let pageTables;
  let animal = $(".form-animal-container.active").getAttribute("data-animal");

  pageContainer = $(
    `[class="form-animal-container active"][data-animal="${animal}"]`
  );
  pageTables = pageContainer.querySelectorAll(".form-animal-table-content");

  const setPercents = (percentage) => {
    pageContainer.querySelector(".form-animal-table-progress p").innerText =
      percentage;
    pageContainer.querySelector(
      ".form-animal-table-progress-bar-current"
    ).style.width = percentage;
  };

  pageTables.forEach((pageTable) => {
    if (pageTable.querySelector(".next-button")) {
      pageTable.querySelector(".next-button").addEventListener("click", () => {
        if (pageTable.getAttribute("data-page") == "1") {
          removeActive(pageContainer, true, 1);
          addActive(pageContainer, true, 2);
          setPercents("33%");
        } else if (pageTable.getAttribute("data-page") == "2") {
          removeActive(pageContainer, true, 2);
          addActive(pageContainer, true, 3);
          setPercents("67%");
        }
      });
    }
    if (pageTable.querySelector(".back-button")) {
      pageTable.querySelector(".back-button").addEventListener("click", () => {
        if (pageTable.getAttribute("data-page") == "3") {
          removeActive(pageContainer, true, 3);
          addActive(pageContainer, true, 2);
          setPercents("33%");
        } else if (pageTable.getAttribute("data-page") == "2") {
          removeActive(pageContainer, true, 2);
          addActive(pageContainer, true, 1);
          setPercents("0%");
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
      const dogCatDisplay = (animal, all, part) => {
        formContainer = $(
          `[class="form-animal-container active"][data-animal=${animal}]`
        );
        if (radio.getAttribute("for") == all) {
          formContainer.querySelector(".insurance-all-package").style.display =
            "block";
          formContainer.querySelector(".insurance-part-package").style.display =
            "none";
        } else if (radio.getAttribute("for") == part) {
          formContainer.querySelector(".insurance-all-package").style.display =
            "none";
          formContainer.querySelector(".insurance-part-package").style.display =
            "block";
        }
      };

      const dogCatAttribute = $(".form-animal-container.active").getAttribute(
        "data-animal"
      );

      dogCatAttribute === "dog"
        ? dogCatDisplay("dog", "all", "part")
        : dogCatDisplay("cat", "all-cat", "part-cat");

      if (
        $(".form-animal-container.active").getAttribute("data-animal") ==
        "horse"
      ) {
        formContainer = $(
          '[class="form-animal-container active"][data-animal="horse"]'
        );

        const setDisplay = () => {
          const packageArr = [
            "insurance-basic-package",
            "insurance-premium-package",
            "insurance-premium-plus-package",
            "insurance-inkl-package",
          ];
          const labelArr = [
            "basic-horse",
            "premium-horse",
            "premium-plus-horse",
            "inkl-horse",
          ];

          if (labelArr.includes(`${radio.getAttribute("for")}`)) {
            packageArr.forEach((el) => {
              formContainer.querySelector(`.${el}`).style.display = "none";
            });
          }

          switch (radio.getAttribute("for")) {
            case "basic-horse":
              formContainer.querySelector(
                ".insurance-basic-package"
              ).style.display = "block";
              break;
            case "premium-horse":
              formContainer.querySelector(
                ".insurance-premium-package"
              ).style.display = "block";
              break;
            case "premium-plus-horse":
              formContainer.querySelector(
                ".insurance-premium-plus-package"
              ).style.display = "block";
              break;
            case "inkl-horse":
              formContainer.querySelector(
                ".insurance-inkl-package"
              ).style.display = "block";
              break;
          }
        };

        setDisplay();
      }
    });
  });
}

export function changeForm() {
  const forms = $$("#form .form-animal-selection .form-animal-selection-item");
  forms.forEach((form) => {
    form.addEventListener("click", () => {
      const animal = form.getAttribute("data-animal");
      removeActive("form-animal-selection-item");
      form.classList.add("active");
      removeActive("form-animal-container");
      $(`[data-animal=${animal}][class="form-animal-container"]`).classList.add(
        "active"
      );
      changePage();
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

export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

import { openModal, closeModal } from "./modal.js";
import {
  dropDown,
  changePage,
  toggleRadio,
  changeForm,
  rangeSlider,
} from "./form.js";
import { changePriceSection } from "./price.js";
import { chart } from "./chart.js";

openModal();
closeModal();
dropDown();
changePage();
toggleRadio();
changeForm();
rangeSlider();
changePriceSection();
chart();

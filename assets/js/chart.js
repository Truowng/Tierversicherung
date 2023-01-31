import { $, $$ } from "./app.js";

export function chart() {
  const percentValues = $$("#chart .chart-column-percent");
  percentValues.forEach((percentValue) => {
    percentValue.style.height = `${percentValue.getAttribute("data-value")}%`;
  });
}

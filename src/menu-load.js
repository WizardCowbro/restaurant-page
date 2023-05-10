import { createHeader, clearPage } from "./page-load";

function createMenu() {
  clearPage();
  const content = document.querySelector("#content");
  content.appendChild(createHeader());
}

export { createMenu };

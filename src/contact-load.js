import { createHeader, clearPage } from "./page-load";

function createContact() {
  clearPage();
  const content = document.getElementById("content");
  content.appendChild(createHeader());
}

export { createContact };

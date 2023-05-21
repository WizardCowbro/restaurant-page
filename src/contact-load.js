import { createHeader, clearPage } from "./page-load";

function createContact() {
  clearPage();
  const content = document.getElementById("content");
  const container = document.createElement("div");
  container.classList.toggle("containerino");
  content.className = "";
  content.classList.toggle("content-contact");
  container.appendChild(createSheet());
  content.appendChild(createHeader());
  content.appendChild(container);
}

function createSheet() {
  const sheet = document.createElement("div");
  sheet.classList.toggle("sheet");

  const owner = document.createElement("div");
  owner.classList.toggle("owner");
  owner.innerHTML = "Chrimston Shelminky";

  const email = document.createElement("div");
  email.classList.toggle("email");
  email.innerHTML = "abdeeabdaa@peepoo.com";

  const address = document.createElement("div");
  address.classList.toggle("address");
  address.innerHTML = "18 Floating Plant St, Ohio, Japan";

  sheet.appendChild(owner);
  sheet.appendChild(email);
  sheet.appendChild(address);

  return sheet;
}

export { createContact };

import { createMenuPage } from "./menu-load";
import { createContact } from "./contact-load";
import "./style.css";
import luna from "./assets/cat-chef.png";

function createHomePage() {
  clearPage();
  const content = document.getElementById("content");
  content.className = "";
  content.classList.toggle("content-home");
  content.appendChild(createHeader());
  content.appendChild(createCenterPiece());
  content.appendChild(createFooter());
}

function createHeader() {
  const header = document.createElement("div");
  header.classList.toggle("header");

  const home = document.createElement("div");
  home.innerHTML = "Home";
  home.addEventListener("click", createHomePage);

  const menu = document.createElement("div");
  menu.innerHTML = "Menu";
  menu.addEventListener("click", createMenuPage);

  const contact = document.createElement("div");
  contact.innerHTML = "Contact";
  contact.addEventListener("click", createContact);

  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);

  return header;
}

function createCenterPiece() {
  const center = document.createElement("div");
  center.classList.toggle("center-piece");

  const image = document.createElement("img");
  image.src = luna;

  const text = document.createElement("div");
  text.innerHTML = "Castle De La Cat";
  text.classList.toggle("title");

  const slogan = document.createElement("div");
  slogan.classList.toggle("slogan");
  const sloganText = sloganSelector();
  if (sloganText === "Wake Up") {
    slogan.classList.toggle("slogan");
    slogan.classList.toggle("wake-up");
  }
  slogan.innerHTML = sloganText;

  center.appendChild(image);
  center.appendChild(text);
  center.appendChild(slogan);

  return center;
}

function sloganSelector() {
  const slogans = [
    "Our burgers are waiting for you",
    "Hasty and tasty!",
    "The 3 P's — pizza, pasta, and pastries!",
    "You are in good tentacles",
    "Expensive but the best",
    "What can we get you?",
    "A tasty burger is what you deserve",
    "Head for the border!",
    "The secret ingredient is always cheese",
    "Delish and with relish",
    "Wake Up",
  ];

  return slogans[Math.floor(Math.random() * slogans.length)];
}

function clearPage() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.toggle("footer");

  const text = document.createElement("div");
  text.innerHTML = "Website whipped up by Chris :)";

  footer.appendChild(text);

  return footer;
}

export { createHomePage, createHeader, clearPage };

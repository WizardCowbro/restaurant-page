import { createHeader, clearPage } from "./page-load";
import burger from "./assets/burger.jpg";
import taco from "./assets/taco.jpg";
import banana from "./assets/banana.jpg";
import fish from "./assets/fish.jpg";
import crepes from "./assets/crepes.jpg";
import secret from "./assets/secret.png";
import apple from "./assets/learning-apple.jpg";

function createMenuPage() {
  clearPage();
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.classList.toggle("menu");
  content.className = "";
  content.classList.toggle("content-menu");
  content.appendChild(createHeader());

  menu.appendChild(createItem("The Burger", "28", burger));
  menu.appendChild(createItem("The Taco", "20", taco));
  menu.appendChild(createItem("banamba", "150", banana));
  menu.appendChild(createItem("The Fish", "25", fish));
  menu.appendChild(createItem("The creperinos", "15", crepes));
  menu.appendChild(createItem("Learning apple", "350", apple));
  menu.appendChild(createItem("Secret :)", "30", secret));

  content.appendChild(menu);
}

function createItem(foodName, price, picture) {
  const listing = document.createElement("div");
  listing.classList.toggle("listing");

  const name = document.createElement("div");
  name.classList.toggle("name");
  name.innerHTML = foodName;

  const pricing = document.createElement("div");
  pricing.classList.toggle("price");
  pricing.innerHTML = `$${price}`;

  const pic = document.createElement("img");
  pic.src = picture;

  const textContainer = document.createElement("div");

  listing.appendChild(pic);
  textContainer.appendChild(name);
  textContainer.appendChild(pricing);
  listing.appendChild(textContainer);

  return listing;
}

export { createMenuPage };

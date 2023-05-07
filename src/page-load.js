function createHomePage() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createCenterPiece());
}

function createHeader() {
  const header = document.createElement("div");
  header.classList.toggle("header");

  const home = document.createElement("div");
  home.innerHTML = "Home";

  const menu = document.createElement("div");
  menu.innerHTML = "Menu";

  const contact = document.createElement("div");
  contact.innerHTML = "Contact";

  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);

  return header;
}

function createCenterPiece() {
  const center = document.createElement("div");
  center.classList.toggle("center-piece");

  const image = document.createElement("img");
  image.src = "./assets/cat-chef.png";

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
    "The 3 P’s — pizza, pasta, and pastries!",
    "You are in good tentacles",
    "Expensive but the best",
    "What can we get you?",
    "A tasty burger is what you deserve",
    "Head for the border!",
    "The secret ingredient is always cheese",
    "Wake Up",
  ];

  return slogans[Math.floor(Math.random() * slogans.length)];
}

export { createHomePage };

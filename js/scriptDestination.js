const body = document.querySelector("body");
body.textContent = "";

import { fetchData } from "./script";

// fetchData();
function addLinkItem(text, url, parent) {
  const liElement = document.createElement("li");
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", url);
  linkElement.textContent = text;
  liElement.appendChild(linkElement);
  parent.appendChild(liElement);
}
function addElementToPage(parent, element, content) {
  element = document.createElement(element);
  element.textContent = content;
  parent.appendChild(element);
}

function addImgToPage(content) {
  const img = document.createElement("img");
  img.src = content;
  body.appendChild(img);
}

async function initializarePagina() {
  const date = await fetchData();
  console.log(date);
  if (date) {
    const navElement = document.createElement("nav");
    const ulElement = document.createElement("ul");

    body.appendChild(navElement);
    navElement.appendChild(ulElement);
    date.navData.forEach((element) => {
      addLinkItem(element.text, element.url, ulElement);
    });
    date.destinations.forEach((element) => {
      addLinkItem(element.name, element.url, ulElement);
    });
    addElementToPage(body, "h1", date.destinations[0].name);
    addElementToPage(body, "h3", date.destinations[0].distance);
    addElementToPage(body, "h5", date.destinations[0].travel);

    addElementToPage(body, "p", date.destinations[0].description);

    addImgToPage(date.destinations[0].images.png);
  }
}
initializarePagina();

import { nav } from "./app.js";
import { fetchData } from "./app.js";
import { addElementToPage } from "./app.js";
import { addLinkItem } from "./app.js";

const date2 = await fetchData();

function addImgToPage(parent, element, content) {
  element = document.createElement(element);
  element.src = content;
  parent.appendChild(element);
}

const body = document.querySelector("body");

export function contentTec(number) {
  body.textContent = "";
  nav();
  navDestination();

  if (date2) {
    addElementToPage(body, "h1", date2.technology[number].name);
    addElementToPage(body, "p", date2.technology[number].description);
    addImgToPage(body, "img", date2.technology[number].images.portrait);
  }
}

export function navDestination() {
  if (date2) {
    const navElement = document.createElement("nav");
    const ulElement = document.createElement("ul");

    body.appendChild(navElement);
    navElement.appendChild(ulElement);
    date2.technology.forEach((element) => {
      addLinkItem(element.name, element.url, ulElement);
    });
  }
}
contentTec(0);

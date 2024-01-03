import { nav, styleNav } from "./app.js";
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

export function contentCrew(number) {
  body.textContent = "";
  nav();
  navDestination();

  if (date2) {
    addElementToPage(body, "h1", date2.crew[number].name);
    addElementToPage(body, "h5", date2.crew[number].role);
    addElementToPage(body, "p", date2.crew[number].bio);
    addImgToPage(body, "img", date2.crew[number].images.png);
  }
}

export function navDestination() {
  if (date2) {
    const navElement = document.createElement("nav");
    const ulElement = document.createElement("ul");

    body.appendChild(navElement);
    navElement.appendChild(ulElement);
    date2.crew.forEach((element) => {
      addLinkItem(element.name, element.url, ulElement);
    });
    styleNav(ulElement);
  }
}
contentCrew(0);

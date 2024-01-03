import { nav } from "./app.js";
import { fetchData } from "./app.js";
import { addElementToPage } from "./app.js";
import { addLinkItem } from "./app.js";
import { styleNav } from "./app.js";

const date2 = await fetchData();

function addImgToPage(parent, element, content) {
  element = document.createElement(element);
  element.src = content;
  parent.appendChild(element);
}

const body = document.querySelector("body");

export function content(number) {
  body.textContent = "";
  nav();
  navDestination();

  if (date2) {
    addElementToPage(body, "h1", date2.destinations[number].name);
    addElementToPage(body, "h5", date2.destinations[number].travel);
    addElementToPage(body, "h3", date2.destinations[number].distance);
    addElementToPage(body, "p", date2.destinations[number].description);
    addImgToPage(body, "img", date2.destinations[number].images.png);
  }
}

export function navDestination() {
  if (date2) {
    const navElement = document.createElement("nav");
    const ulElement = document.createElement("ul");

    body.appendChild(navElement);
    navElement.appendChild(ulElement);
    date2.destinations.forEach((element) => {
      addLinkItem(element.name, element.url, ulElement);
    });
    styleNav(ulElement);
  }
}
content(0);

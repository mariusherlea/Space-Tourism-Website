import { nav } from "./app.js";
import { fetchData } from "./app.js";
import { addElementToPage } from "./app.js";

const date2 = await fetchData();

function addImgToPage(parent, element, content) {
  element = document.createElement(element);
  element.src = content;
  parent.appendChild(element);
}

const body = document.querySelector("body");

function content() {
  body.textContent = "";
  nav();

  if (date2) {
    addElementToPage(body, "h1", date2.destinations[0].name);
    addElementToPage(body, "h5", date2.destinations[0].travel);
    addElementToPage(body, "h3", date2.destinations[0].distance);
    addElementToPage(body, "p", date2.destinations[0].description);
    addImgToPage(body, "img", date2.destinations[0].images.png);
  }
}

content();

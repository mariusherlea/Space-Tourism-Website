import { nav } from "./app.js";
import { fetchData } from "./app.js";
import { addElementToPage } from "./app.js";

function addImgToPage(parent, element, content) {
  element = document.createElement(element);
  element.src = content;
  parent.appendChild(element);
}

const body = document.querySelector("body");

async function content() {
  body.textContent = "";
  const date = await fetchData();
  console.log(date);
  if (date) {
    addElementToPage(body, "h1", date.destinations[0].name);
    addElementToPage(body, "h5", date.destinations[0].travel);
    addElementToPage(body, "h3", date.destinations[0].distance);
    addElementToPage(body, "p", date.destinations[0].description);
    addImgToPage(body, "img", date.destinations[0].images.png);
  }
}
nav();
content();

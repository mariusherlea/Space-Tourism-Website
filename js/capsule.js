import { fetchData } from "./app.js";
import { contentTec } from "./technology.js";
import { addLinkItem } from "./app.js";

const date2 = await fetchData();

const body = document.querySelector("body");

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
contentTec(2);

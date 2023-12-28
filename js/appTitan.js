import { fetchData } from "./app.js";
import { addLinkItem } from "./app.js";
import { content } from "./appDest.js";

const date2 = await fetchData();

const body = document.querySelector("body");

export function navDestination() {
  if (date2) {
    const navElement = document.createElement("nav");
    const ulElement = document.createElement("ul");

    body.appendChild(navElement);
    navElement.appendChild(ulElement);
    date2.destinations.forEach((element) => {
      addLinkItem(element.name, element.url, ulElement);
    });
  }
}
content(3);

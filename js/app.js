const body = document.querySelector("body");
body.textContent = "";
body.style.backgroundImage =
  'url("../assets/home/background-home-desktop.jpg")';
body.style.backgroundRepeat = "no-repeat";

export async function fetchData() {
  try {
    const response = await fetch("../data/data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch data.json error", error);
  }
}

const date2 = await fetchData();
console.log(date2);

export function addLinkItem(text, url, parent) {
  const liElement = document.createElement("li");
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", url);
  linkElement.textContent = text;
  liElement.appendChild(linkElement);
  parent.appendChild(liElement);
}

export function styleNav(element) {
  element.style.display = "flex";
  element.style.color = "#FFFFFF0A";
  element.style.width = "830px";
  element.style.background = "rgba(255, 255, 255, 0.04)";
  element.style.backdropFilter = "blur(40.774227142333984px)";
}

export function nav() {
  if (date2) {
    const navElement = document.createElement("nav");
    const ulElement = document.createElement("ul");

    body.appendChild(navElement);
    navElement.appendChild(ulElement);
    date2.navData.forEach((element) => {
      addLinkItem(element.text, element.url, ulElement);
    });
    styleNav(ulElement);
  }
}
nav();

export function addElementToPage(parent, element, content) {
  element = document.createElement(element);
  element.textContent = content;
  parent.appendChild(element);
}

addElementToPage(body, "h1", date2.home.header);
addElementToPage(body, "h5", date2.home.upHeader);
addElementToPage(body, "p", date2.home.paragraph);
addElementToPage(body, "button", date2.home.exploreBtn);

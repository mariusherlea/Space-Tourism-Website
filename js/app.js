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
  navItemStyle(liElement);
}
export function navItemStyle(element) {
  element.style.listStyleType = "none";
  element.style.textDecoration = "none";
  element.style.margin = "0px";
  element.style.padding = "0px";
  element.style.paddingRight = "50px";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
  element.style.flexWrap = "wrap";
  element.style.gap = "10px";
  element.style.fontSize = "1.2rem";
  element.style.color = "#FFFFFF";
  element.style.textTransform = "uppercase";
  element.style.fontFamily = "Barlow Condensed";
  element.style.letterSpacing = "2.7px";
  element.style.color = "white";
}
export function styleNav(element) {
  element.style.display = "flex";
  element.style.color = "#FFFFFF0A";
  element.style.width = "830px";
  element.style.background = "rgba(255, 255, 255, 0.04)";
  element.style.backdropFilter = "blur(40.774227142333984px)";
  element.style.padding = "20px";
  element.style.justifyContent = "end";
  const iconElement = document.createElement("img");
  iconElement.src = "../assets/shared/logo.svg";
  element.appendChild(iconElement);
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
  stylePageElement(element);
}

export function stylePageElement(element) {
  element.style.color = "white";
  element.style.fontFamily = "Barlow Condensed";
  if (element.nodeName === "H1") {
    element.style.fontSize = "150px";
    element.style.fontFamily = "Bellefair";
    element.style.textTransform = "uppercase";
  }
  if (element.nodeName === "H5") {
    element.style.fontSize = "28px";
    element.style.fontFamily = "Barlow Condensed";
    element.style.textTransform = "uppercase";
    element.style.margin = "0px";
    element.style.padding = "0px";
    element.style.paddingRight = "50px";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
    element.style.gap = "10px";
    element.style.fontSize = "1.2rem";
    element.style.color = "#D0D6F9";
    element.style.letterSpacing = "4.72px";
  }
  if (element.nodeName === "P") {
    element.style.color = "#D0D6F9";
    element.style.fontSize = "18px";
    element.style.fontFamily = "Barlow";
    element.style.lineHeight = "32px";
  }
}
addElementToPage(body, "h5", date2.home.upHeader);

addElementToPage(body, "h1", date2.home.header);
addElementToPage(body, "p", date2.home.paragraph);
addElementToPage(body, "button", date2.home.exploreBtn);

const body = document.querySelector("body");
body.textContent = "";

async function fetchData() {
  try {
    const response = await fetch("../data/data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch data.json error", error);
  }
}
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

    //creare div parinte care sa cuprinda: h5,h1,p,button + textContent
    // const header = document.createElement("h1");
    // const exploreBtn = document.createElement("button");

    // header.textContent = date.home.header;
    // exploreBtn.textContent = date.home.exploreBtn;

    // body.appendChild(exploreBtn);
    // body.appendChild(header);

    addElementToPage(body, "h1", date.home.header);
    addElementToPage(body, "h5", date.home.upHeader);
    addElementToPage(body, "p", date.home.paragraph);
    addElementToPage(body, "button", date.home.exploreBtn);
  }
}

initializarePagina();
// navData.forEach((element) => {
//   addLinkItem(element.text, element.url, ulElement);
// });

document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from data.json
  fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      // Use the data to update the HTML content dynamically
      const destinationContainer = document.getElementById(
        "destination-container"
      );
      const destinations = data.home;
      console.log(data);

      const destinationDiv = document.createElement("div");
      destinationDiv.innerHTML = `

      <nav>
        <ul>
          <li><a href=${data.navData[0].url}>${data.navData[0].text}</a></li>
          <li><a href=${data.navData[1].url}>${data.navData[1].text}</a></li>
          <li><a href=${data.navData[2].url}>${data.navData[2].text}</a></li>
          <li><a href=${data.navData[3].url}>${data.navData[3].text}</a></li>

        </ul>
      </nav>

      <h5>${destinations.upHeader}</h5>
            <h1>${destinations.header}</h1>
           
            <p>${destinations.paragraph}</p>
    
            <a href="${destinations.url}">${destinations.exploreBtn}</a>
          `;

      destinationContainer.appendChild(destinationDiv);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

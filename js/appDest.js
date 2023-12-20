document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from data.json
  fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      // Use the data to update the HTML content dynamically
      const destinationContainer = document.getElementById(
        "destination-container"
      );
      const destinations = data.destinations;
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
      <ul>
      <li><a href=${data.destinations[0].url}>${data.destinations[0].name}</a></li>
      <li><a href=${data.destinations[1].url}>${data.destinations[1].name}</a></li>
      <li><a href=${data.destinations[2].url}>${data.destinations[2].name}</a></li>
      <li><a href=${data.destinations[3].url}>${data.destinations[3].name}</a></li>

    </ul>
    </nav>

            <h2>${destinations[0].name}</h2>
            <img src="${destinations[0].images.png}" alt="${destinations[0].name}">
            <p>${destinations[0].description}</p>
            <p>Distance: ${destinations[0].distance}</p>
            <p>Travel Time: ${destinations[0].travel}</p>
            <a href="${destinations[0].url}">Learn more</a>
          `;

      destinationContainer.appendChild(destinationDiv);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

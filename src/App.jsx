import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [destinations, setDestinations] = useState([]);
  const [home, setHome] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/data.json");
        const data = await res.json();
        // console.log(data.destinations);
        // console.log(data.home);
        setHome(data.home);
        setDestinations(data.destinations);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <h1>{home.header}</h1>
      {destinations.map((destination, index) => (
        <div key={index}>
          <h2>{destination.name}</h2>

          {/* <img src={destination.images.png} alt={`${destination.name} Image`} /> */}
          <p>{destination.description}</p>
          <p>Distance: {destination.distance}</p>
          <p>Travel time: {destination.travel}</p>
          <a href={destination.url}>Learn more</a>
        </div>
      ))}
    </div>
  );
}

export default App;

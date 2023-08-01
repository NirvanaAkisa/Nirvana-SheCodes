import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
let city = prompt("Enter city here");
city = city.toLowerCase().trim();

if (weather[city] !== undefined) {
  alert(
    `Today's weather is currently ${Math.round(
      weather[city].temp
    )}°C (${Math.round(
      weather[city].temp
    )}°C) in ${city} with the humidity of ${Math.round(
      weather[city].humidity
    )}%`
  );
} else {
  alert(`Sorry, try going to https://www.google.com/search?q=weather+${city}`);
}

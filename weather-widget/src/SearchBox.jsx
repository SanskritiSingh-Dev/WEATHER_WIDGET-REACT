import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  //creating state Variable
  let [city, setCity] = useState("");

  //Api url - weather api - geocoding
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  //generated a key to use the api
  const API_KEY = "c02e50c1ef9eefa1d616874f2944d041";

  //to get the weather info
  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${ city }&appid=${ API_KEY }`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
  };

  //handling change event for input field
  let handleChange = (evt) => {
    setCity(evt.target.value);
  };
  //when we are submitting a form, the default behavior of the browser is to reload the page
  //to prevent this, we use evt.preventDefault()
  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };

  return (
    <div className = "SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          value={city}
          label="City Name"
          variant="outlined"
          onChange={handleChange}
          required
        />

        <br />
        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

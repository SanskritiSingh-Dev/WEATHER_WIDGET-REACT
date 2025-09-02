import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  //creating state Variable
  let [city, setCity] = useState("");
  //to hold error message
  let [error, setError] = useState(false);

  //Api url - weather api - geocoding
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  //generated a key to use the api
  const API_KEY = "c02e50c1ef9eefa1d616874f2944d041";

  //to get the weather info
  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    // Safely extract values
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };

    console.log(result);
    return result;
  };

  //handling change event for input field
  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  //when we are submitting a form, the default behavior of the browser is to reload the page
  //to prevent this, we use evt.preventDefault()
  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
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

        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color: "red"}}>No such place exist!</p>}
      </form>
    </div>
  );
}

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  // State variables
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  // API details
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "c02e50c1ef9eefa1d616874f2944d041";

  // Fetch weather information
  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const jsonResponse = await response.json();

      if (response.ok) {
        // Valid city, extract data
        const result = {
          city: jsonResponse.name,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelsLike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description,
        };
        setError(false); // Clear error if data is valid
        return result;
      } else {
        // Invalid city name
        setError(true);
        return null;
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(true);
      return null;
    }
  };

  // Handle input change
  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  // Handle form submission
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const info = await getWeatherInfo();
    if (info) {
      updateInfo(info);
    } else {
      updateInfo(null); // Clear previous info if error
    }
    setCity("");
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
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}


import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";   
import { useState } from "react"; 
function WeatherApp() {
    // state to hold weather information
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 26.73,
        tempMin: 22,
        tempMax: 30,
        humidity: 78,
        weather: "Cloudy",
    });

    // function to update weather information
    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    // rendering the components
    return(
        <div style={{textAlign: "center"}}>
        <h2>Weather app by Sanskriti</h2>
        <SearchBox updateInfo = {updateInfo} />
        <InfoBox  info={weatherInfo}/> 
        </div>
    )
}

export default WeatherApp;
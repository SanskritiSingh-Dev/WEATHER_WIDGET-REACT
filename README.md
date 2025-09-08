# Weather Info App 🌤️

A simple and interactive **Weather Information App** built with **React.js** and **OpenWeatherMap API**, allowing users to search for cities and view their current weather conditions. The app gracefully handles invalid entries and provides an intuitive interface with dynamic visuals based on weather data.

---

## 📌 Features

✔️ Search weather information by city name  
✔️ Displays temperature, humidity, minimum/maximum temperature, and weather description  
✔️ Dynamic images based on weather conditions (hot, cold, rainy, etc.)  
✔️ Error handling for invalid city names with user-friendly feedback  
✔️ Built using React, Material-UI for sleek design, and OpenWeatherMap API  

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed  
- NPM or Yarn package manager  
- OpenWeatherMap API key ([Get your API key here](https://openweathermap.org/api))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-info-app.git
   cd weather-info-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the API key:
    - Open SearchBox.jsx in your code editor.
    - Replace the placeholder API key with your actual OpenWeatherMap API key:

    ```bash
    const API_KEY = "YOUR_API_KEY_HERE";
    ```

4. Run the application:

    ```bash
    npm start
    ```

### Key Code Features

1. API Integration:
    - The app seamlessly integrates with the OpenWeatherMap API using `fetch()` in `SearchBox.jsx` to retrieve weather data.

2. Error Handling:
    - Errors such as invalid city names are caught using `try...catch`.
    - A user-friendly error message is displayed without disrupting the app flow.

3. Conditional Rendering:
    - `InfoBox.jsx` only renders the weather details when valid data is available.
    - Images and descriptions dynamically change based on weather parameters like temperature and humidity.

4. Clean and Responsive UI:
    - Utilizes Material-UI components like `TextField`, `Button`, `Card`, and `Typography` for a modern and user-friendly interface.

5. State Management:
    - Uses React’s `useState` hook to handle user input, error states, and API responses effectively.

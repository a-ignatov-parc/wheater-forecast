import * as React from "react";
import WeatherForecast from "./WeatherForecast";

const App = () => (
  <>
    <div>
      {/* Load forecast for today */}
      <WeatherForecast />
    </div>
    <div>
      {/* Load forecast for tomorrow */}
      <WeatherForecast />
    </div>
  </>
);

export default App;

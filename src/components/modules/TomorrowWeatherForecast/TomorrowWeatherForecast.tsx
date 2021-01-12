import React from "react";

import { getForcastForTomorrow } from "../../../api";
import WeatherForecast from "../../modules/WeatherForecast";

const TomorrowWeatherForecastModule = () => {
  return <WeatherForecast title="tomorrow" apiMethod={getForcastForTomorrow} />;
};

export default TomorrowWeatherForecastModule;

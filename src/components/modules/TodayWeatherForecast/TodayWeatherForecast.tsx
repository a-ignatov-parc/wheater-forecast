import React from "react";

import { getForcastForToday } from "../../../api";
import WeatherForecast from "../../modules/WeatherForecast";

const TodayWeatherForecastModule = () => {
  return <WeatherForecast title="today" apiMethod={getForcastForToday} />;
};

export default TodayWeatherForecastModule;

import React from "react";

import { AsyncReturnType } from "../../../types";
import { getForcastForToday } from "../../../api";
import WeatherForecast from "../../modules/WeatherForecast";

const TodayWeatherForecastModule = () => {
  return (
    <WeatherForecast<AsyncReturnType<typeof getForcastForToday>>
      title="today"
      apiMethod={getForcastForToday}
    />
  );
};

export default TodayWeatherForecastModule;

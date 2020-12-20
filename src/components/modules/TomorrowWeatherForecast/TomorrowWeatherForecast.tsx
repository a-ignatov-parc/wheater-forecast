import React from "react";

import { AsyncReturnType } from "../../../types";
import { getForcastForTomorrow } from "../../../api";
import WeatherForecast from "../../modules/WeatherForecast";

const TomorrowWeatherForecastModule = () => {
  return (
    <WeatherForecast<AsyncReturnType<typeof getForcastForTomorrow>>
      title="tomorrow"
      apiMethod={getForcastForTomorrow}
    />
  );
};

export default TomorrowWeatherForecastModule;

import React from "react";

import TodayWeatherForecastModule from "../../modules/TodayWeatherForecast";
import TomorrowWeatherForecastModule from "../../modules/TomorrowWeatherForecast";

const HomePage = () => {
  return (
    <main>
      <TodayWeatherForecastModule />
      <TomorrowWeatherForecastModule />
    </main>
  );
};

export default HomePage;

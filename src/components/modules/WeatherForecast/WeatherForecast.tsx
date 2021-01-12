import React from "react";
import bemCl from "bem-cl";

import useFetch from "../../../hooks/useFetch";

import LoadButton from "./components/LoadButton";
import "./WeatherForecast.scss";

type Props = {
  // Title of a given forecast
  title: string;
  // Method to fetch data
  apiMethod: () => Promise<any>;
};

const b = bemCl("weather-forecast-module");

const WeatherForecastModule = ({ title, apiMethod }: Props) => {
  const { fetch, state, data, isFetched } = useFetch(title, apiMethod);

  const handleLoadButtonClick = () => {
    fetch();
  };

  return (
    <section className={b()}>
      <LoadButton state={state} onClick={handleLoadButtonClick}>
        {isFetched ? "Update" : "Load"}
      </LoadButton>
      forecast for <span className={b("title")}>{title}</span>
      {data && state === "idle" && ":"}
      {/* FORECAST VALUE */}
      {data && state === "idle" && (
        <span className={b("value")}>{data?.value}</span>
      )}
      {/* ERROR MESSAGE */}
      {state === "error" && (
        <span className={b("error")}>can't be loaded =(</span>
      )}
    </section>
  );
};

export default WeatherForecastModule;

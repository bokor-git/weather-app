import React, { useState } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { Chart, Controls } from "../../components";
import { getCityData } from "../../store/weather/operation";

const WeatherContainer = () => {
  const dispatch = useDispatch();
  const { city, temperature, error } = useSelector((state) => state);
  const [cityName, setCityName] = useState("");

  const getData = () => {
    dispatch(getCityData(cityName.trim()));
    setCityName("");
  };

  return (
    <div className="weather-container">
      <Controls
        inputValue={cityName}
        onChange={setCityName}
        onClick={getData}
      />
      <Chart error={error} data={temperature} cityName={city?.name} />
    </div>
  );
};

export default WeatherContainer;

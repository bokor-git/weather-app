import axios from "axios";

const API_KEY = "bad46dfee1ae1125ec4faf31e63449de";

const instance = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5`,
});

export const weatherAPI = {
  getCityTemperature(city) {
    return instance.get(
      `forecast?appid=${API_KEY}&q=${city}&cnt=8&units=metric`
    );
  },
};

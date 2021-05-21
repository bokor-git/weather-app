import { weatherAPI } from "../../api/weather-api";
import { setCityData, setError } from "./action";
import { normalizeTempListData } from "../../helpers/normalizeData";

const getCityData = (cityName) => async (dispatch) => {
  try {
    const {
      data: { list, city },
    } = await weatherAPI.getCityTemperature(cityName);

    const normalizedData = normalizeTempListData(list);
    dispatch(setError(null));
    dispatch(setCityData({ city, temperature: normalizedData }));
  } catch (e) {
    dispatch(setError(e.response.data.message));
  }
};

export { getCityData };

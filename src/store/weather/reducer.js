import { handleActions } from "redux-actions";
import types from "./types";

const initialState = {
  city: null,
  temperature: null,
  error: null,
};

const reducer = handleActions(
  {
    [types.SET_CITY_DATA]: (state, { payload: { temperature, city } }) => ({
      ...state,
      city,
      temperature,
    }),
    [types.SET_ERROR]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default reducer;

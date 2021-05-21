import { handleActions } from "redux-actions";
import types from "./types";

const initialState = {
  city: null,
  temperature: null,
  error: null,
};

const reducer = handleActions(
  {
    [types.SET_CITY_DATA]: () => ({}),
    [types.SET_ERROR]: () => ({}),
  },
  initialState
);

export default reducer;

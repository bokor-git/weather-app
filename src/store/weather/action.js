import { createActions } from "redux-actions";
import types from "./types";

export const { setCityData, setError } = createActions(
  types.SET_CITY_DATA,
  types.SET_ERROR
);

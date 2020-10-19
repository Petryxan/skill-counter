import { ADDITEM,ADD_NAME } from "../types";

export const addItem = () => ({
  type: ADDITEM,
  payload: 0,
});

export const addName = (e) => ({
    type: ADD_NAME,
    payload: e,
  });
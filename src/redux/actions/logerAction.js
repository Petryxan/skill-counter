import { SIGN_IN, INCREMENT, DECREMENT, SET, SETCOUNT, SET2 } from "../types";

export const signIn = () => ({
  type: SIGN_IN,
  payload: 0,
});
export const incrementAction = () => ({
  type: INCREMENT,
  payload: 1,
});
export const decrementAction = () => ({
  type: DECREMENT,
  payload: 0,
});

export const setAction = (text, skill1Set) => ({
  type: SET,
  payload: text,
  skill: skill1Set,
  rnd: Math.floor(Math.random() * 100),
  date: Date.now()
});

export const setCountAction = (textcount) => ({
  type: SETCOUNT,
  payload: textcount,
});

export const setAction2 = (text2, skill1) => ({
  type: SET2,
  payload: text2,
  skill1: skill1,
  

});

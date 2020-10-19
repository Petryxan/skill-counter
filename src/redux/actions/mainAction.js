import {
  INCSKIL1,
  INCSKIL2,
  INCSKIL3,
  DECSKIL1,
  DECSKIL2,
  DECSKIL3,
  SETSKIL3,
  SETSKIL2,
  SETSKIL1,
  SKIL1DEFAULT,
  SKIL2DEFAULT,
  SKIL3DEFAULT,
  SETTOTAL,
} from "../types";

export const incskill1Action = () => ({
  type: INCSKIL1,
  payload: 1,
});
export const incskill2Action = () => ({
  type: INCSKIL2,
  payload: 1,
});
export const incskill3Action = () => ({
  type: INCSKIL3,
  payload: 1,
});
export const decskill1Action = () => ({
  type: DECSKIL1,
  payload: 1,
});
export const decskill2Action = () => ({
  type: DECSKIL2,
  payload: 1,
});
export const decskill3Action = () => ({
  type: DECSKIL3,
  payload: 1,
});
export const setskill1Action = () => ({
  type: SETSKIL1,
  payload: 1,
});
export const setskill2Action = () => ({
  type: SETSKIL2,
  payload: 1,
});
export const setskill3Action = () => ({
  type: SETSKIL3,
  payload: 1
  
});
export const set1default = () => ({
  type: SKIL1DEFAULT,
});
export const set2default = () => ({
    type: SKIL2DEFAULT,
  });
  export const set3default = () => ({
    type: SKIL3DEFAULT,
  });
  export const setTotal= () => ({
    type: SETTOTAL,
    payload: 5
  });

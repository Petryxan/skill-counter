import { INCREMENT, DECREMENT, SET, SETCOUNT, SET2 } from "../types";

const initialState = {
  lol: 5,
  koli: 2,
  mn: 100,
  foodList: [],
  mas1: { aaa: "111", id: 1, title: "aaa" },
  mas2: { aaa: "222", id: 2, title: "bbb" },
  mas3: { aaa: "333", id: 3, title: "ccc" },
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        lol: state.lol + action.payload,
        koli: state.koli - 1,
      };
    case DECREMENT:
      return { ...state, lol: state.lol - 1, koli: state.koli + 1 };
    case SET:
      return {
        ...state,
        foodList: state.foodList.concat({
          key: Math.random(),
          name: action.payload,
          count: state.lol,
          skill: action.skill,
          rnd: action.rnd,
        }),
      };
    case SETCOUNT:
      return {
        ...state,
        foodList: state.foodList.concat({
          key: Math.random(),
          count: action.payload,
        }),
      };

    case SET2:
      return {
        ...state,
        foodList: state.foodList.concat({
          key: Math.random(),
          name2: action.payload,
          skil1: action.skill1,
          date: action.date,
        }),
      };

    default:
      return state;
  }
}

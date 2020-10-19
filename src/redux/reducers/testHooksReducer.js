import { ADDITEM, ADD_NAME } from "../types";

const initialState = {
    item: true,
    name: "first",
    itemList: []
};

export default function testHooksReducer(state = initialState, action) {
  switch (action.type) {
    case ADDITEM:
      return {...state, item: !state.item }
      case ADD_NAME:
      return {...state, name: action.payload, item: !state.item}

    default:
      return state;
  }
}

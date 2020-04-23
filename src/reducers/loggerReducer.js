import {SIGN_IN} from '../types/index'

const initialState = false;

export default function LoggerReducer (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return !state;
    default:
      return state;
  }
};

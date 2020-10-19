import {
  DECSKIL1,
  INCSKIL1,
  INCSKIL2,
  INCSKIL3,
  DECSKIL2,
  DECSKIL3,
  SETSKIL1,
  SETSKIL2,
  SETSKIL3,
  SKIL1DEFAULT,
  SKIL2DEFAULT,
  SKIL3DEFAULT,
  SETTOTAL
} from "../types";

const initialState = {
  totalSkill: 3,
  skill1: 0,
  skill2: 0,
  skill3: 0,
  skill1Set: 0,
  skill2Set: 0,
  skill3Set: 0,
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case DECSKIL1:
      return {
        ...state,
        skill1: state.skill1 - action.payload,
        totalSkill: state.totalSkill + action.payload,
      };
    case INCSKIL1:
      return {
        ...state,
        skill1: state.skill1 + action.payload,
        totalSkill: state.totalSkill - action.payload,
      };
    case SETSKIL1:
      return {
        ...state,
        skill1Set: state.skill1
      };
      case DECSKIL2:
      return {
        ...state,
        skill2: state.skill2 - action.payload,
        totalSkill: state.totalSkill + action.payload,
      };
    case INCSKIL2:
      return {
        ...state,
        skill2: state.skill2 + action.payload,
        totalSkill: state.totalSkill - action.payload,
      };
    case SETSKIL2:
      return {
        ...state,
        skill2Set: state.skill2
  
      };
      case DECSKIL3:
      return {
        ...state,
        skill3: state.skill3 - action.payload,
        totalSkill: state.totalSkill + action.payload,
      };
    case INCSKIL3:
      return {
        ...state,
        skill3: state.skill3 + action.payload,
        totalSkill: state.totalSkill - action.payload,
      };
    case SETSKIL3:
      return {
        ...state,
        skill3Set: state.skill3
      };

      case SKIL1DEFAULT: 
      return {
        ...state, skill1: state.skill1
      }
      case SKIL2DEFAULT: 
      return {
        ...state, skill2: state.skill2
      }
      case SKIL3DEFAULT: 
      return {
        ...state, skill3: state.skill3
      }
      case SETTOTAL: 
      return {
        ...state, totalSkill: state.totalSkill + action.payload
      }
    default:
      return state;
  }
}

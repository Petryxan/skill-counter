import { combineReducers } from "redux"
import counterReducer from './counterReducer'
import loggerReducer from './loggerReducer'
import mainReducer from './mainReducer'


  export default combineReducers({
    counter: counterReducer,
    logger: loggerReducer,
    main: mainReducer

})

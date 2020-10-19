import { combineReducers } from "redux"
import counterReducer from './counterReducer'
import loggerReducer from './loggerReducer'
import mainReducer from './mainReducer'
import testHooksReducer from "./testHooksReducer"


  export default combineReducers({
    counter: counterReducer,
    logger: loggerReducer,
    main: mainReducer,
    test: testHooksReducer

})

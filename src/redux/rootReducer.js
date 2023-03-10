import { combineReducers } from "redux";

import FilterReducer from '../components/Filters/reducer'
import TodoReducer from '../components/TodoList/reducer'


const rootReducer = combineReducers(
    {
        FilterReducer,
        TodoReducer,
    }
)
export default  rootReducer;
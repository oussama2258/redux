import { combineReducers } from "redux";
import TaskReducer from "./listTasks";
// export the reducers
// export the taskReducer as the name task
const rootReducer = combineReducers({ task: TaskReducer });

export default rootReducer;

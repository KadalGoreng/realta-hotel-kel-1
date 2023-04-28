import { combineReducers } from "redux";
import DepartmentReduce from "./departmentReducer";
import WodoReduce from "./wodoReducer";
import WodeReduce from "./wodeReducer";


const rootReducer = combineReducers({
  departmentState: DepartmentReduce,
  wodoState: WodoReduce,
  wodeState: WodeReduce,

});

export default rootReducer;

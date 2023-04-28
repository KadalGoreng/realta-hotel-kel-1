import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeDepartment from "../constant/departmentConstant";
import * as ActionTypeWodo from "../constant/wodoConstant";
import * as ActionTypeWode from "../constant/wodeConstant";
import {

  handleGetDepartment,
  handleAddDepartment,
  handleDelDepartment,
  handleEditDepartment,
  handleFindDepartment

} from "./DepartmentSaga";
import {
  handleGetWodo,
  handleGetUsers,
  handleAddWodo,
  handleDelWodo,
  handleEditWodo,
  handleFindWodo

} from "./WodoSaga";

import {
  handleGetWode,
  handleAddWode,
  handleGetEmp

} from "./WodeSaga";


function* watchAll() {
  yield all([
    takeEvery(ActionTypeDepartment.GET_DEPARTMENT_REQUEST, handleGetDepartment),
    takeEvery(ActionTypeDepartment.ADD_DEPARTMENT_REQUEST, handleAddDepartment),
    takeEvery(
      ActionTypeDepartment.EDIT_DEPARTMENT_REQUEST,
      handleEditDepartment
    ),
    takeEvery(ActionTypeDepartment.DEL_DEPARTMENT_REQUEST, handleDelDepartment),
    takeEvery(
      ActionTypeDepartment.FIND_DEPARTMENT_REQUEST,
      handleFindDepartment
    ),
    //
    takeEvery(ActionTypeWodo.GET_WODO_REQUEST, handleGetWodo),
    takeEvery(ActionTypeWodo.GET_USERS_REQUEST, handleGetUsers),
    takeEvery(ActionTypeWodo.ADD_WODO_REQUEST, handleAddWodo),
    takeEvery(ActionTypeWodo.EDIT_WODO_REQUEST, handleEditWodo),
    takeEvery(ActionTypeWodo.FIND_WODO_REQUEST, handleFindWodo),
    takeEvery(ActionTypeWodo.DEL_WODO_REQUEST, handleDelWodo),
    //
    takeEvery(ActionTypeWode.GET_WODE_REQUEST, handleGetWode),
    takeEvery(ActionTypeWode.ADD_WODE_REQUEST, handleAddWode),
    takeEvery(ActionTypeWode.GET_EMP_REQUEST, handleGetEmp),
  ]);
}

export default watchAll;

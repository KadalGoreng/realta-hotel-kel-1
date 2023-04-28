import { call, put } from "redux-saga/effects";
import Department from "@/pages/api/department";
import {
  GetDepartmentSuccess,
  GetDepartmentFailed,
  AddDepartmentSuccess,
  AddDepartmentFailed,
  EditDepartmentSuccess,
  EditDepartmentFailed,
  DelDepartmentSuccess,
  DelDepartmentFailed,
  FindDepartmentSuccess,
  FindDepartmentFailed,
  

} from "../action/departmentAction";
function* handleGetDepartment(): any {
  try {
    const result = yield call(Department.GetData);
    yield put(GetDepartmentSuccess(result));
  } catch (error) {
    yield put(GetDepartmentFailed(error));
  }
}

function* handleAddDepartment(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Department.Create, payload);
    yield put(AddDepartmentSuccess(result.data));
  } catch (error) {
    yield put(AddDepartmentFailed(error));
  }
}

function* handleDelDepartment(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Department.deleted, payload);
    yield put(DelDepartmentSuccess(result.data));
  } catch (error) {
    yield put(DelDepartmentFailed(error));
  }
}

function* handleFindDepartment(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Department.findData, payload);
    yield put(FindDepartmentSuccess(result.data));
  } catch (error) {
    yield put(FindDepartmentFailed(error));
  }
}

function* handleEditDepartment(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Department.Update, payload);
    yield put(EditDepartmentSuccess(result.data));
  } catch (error) {
    yield put(EditDepartmentFailed(error));
  }
}


export {
  handleGetDepartment,
  handleAddDepartment,
  handleDelDepartment,
  handleEditDepartment,
  handleFindDepartment

};

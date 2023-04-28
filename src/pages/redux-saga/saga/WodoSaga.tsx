import { call, put } from "redux-saga/effects";
import Wodo from "@/pages/api/wodo";
import {
  GetWodoSuccess,
  GetWodoFailed,
  GetUsersSuccess,
  GetUsersFailed,
  AddWodoSuccess,
  AddWodoFailed,
  EditWodoSuccess,
  EditWodoFailed,
  FindWodoSuccess,
  FindWodoFailed,
  DelWodoSuccess,
  DelWodoFailed

} from "../action/wodoAction";
function* handleGetWodo(): any {
  try {
    const result = yield call(Wodo.GetData);
    yield put(GetWodoSuccess(result));
  } catch (error) {
    yield put(GetWodoFailed(error));
  }
}

function* handleGetUsers(): any {
  try {
    const result = yield call(Wodo.GetUsers);
    yield put(GetUsersSuccess(result));
  } catch (error) {
    yield put(GetUsersFailed(error));
  }
}

function* handleAddWodo(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Wodo.Create, payload);
    yield put(AddWodoSuccess(result.data));
  } catch (error) {
    yield put(AddWodoFailed(error));
  }
}

function* handleDelWodo(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Wodo.deleted, payload);
    yield put(DelWodoSuccess(result.data));
  } catch (error) {
    yield put(DelWodoFailed(error));
  }
}

function* handleFindWodo(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Wodo.findData, payload);
    yield put(FindWodoSuccess(result.data));
  } catch (error) {
    yield put(FindWodoFailed(error));
  }
}

function* handleEditWodo(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Wodo.Update, payload);
    yield put(EditWodoSuccess(result.data));
  } catch (error) {
    yield put(EditWodoFailed(error));
  }
}


export {
  handleGetWodo,
  handleGetUsers,
  handleAddWodo,
  handleDelWodo,
  handleEditWodo,
  handleFindWodo

};

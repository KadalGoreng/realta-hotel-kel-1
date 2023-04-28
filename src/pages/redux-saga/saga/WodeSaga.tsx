import { call, put } from "redux-saga/effects";
import Wode from "@/pages/api/wode";
import {
  GetWodeSuccess,
  GetWodeFailed,
  AddWodeSuccess,
  AddWodeFailed,
  GetEmpSuccess,
  GetEmpFailed

} from "../action/wodeAction";
function* handleGetWode(action: any): any {
 const { payload } = action;
  try {
    const result = yield call(Wode.GetData, payload);
    yield put(GetWodeSuccess(result));
  } catch (error) {
    yield put(GetWodeFailed(error));
  }
}

function* handleAddWode(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Wode.Create, payload);
    yield put(AddWodeSuccess(result.data));
  } catch (error) {
    yield put(AddWodeFailed(error));
  }
}

function* handleGetEmp(): any {
  try {
    const result = yield call(Wode.GetEmp);
    yield put(GetEmpSuccess(result));
  } catch (error) {
    yield put(GetEmpFailed(error));
  }
}

export {
  handleGetWode,
  handleAddWode,
  handleGetEmp

};
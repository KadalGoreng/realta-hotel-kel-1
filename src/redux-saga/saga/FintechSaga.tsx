import { call, put } from "redux-saga/effects";
import {
  GetFintechSuccess,
  GetFintechFailed,
  AddFintechSuccess,
  AddFintechFailed,
  FindFintechSuccess,
  FindFintechFailed,
  EditFintechSuccess,
  EditFintechFailed,
  DelFintechSuccess,
  DelFintechFailed,
  SearchFintechSuccess,
  SearchFintechFailed,
} from "../action/FintechAction";
import FintechApi from "@/pages/api/PaymentGateway";

function* handleFintech(): any {
  try {
    const result = yield call(FintechApi.read);
    yield put(GetFintechSuccess(result));
  } catch (error) {
    yield put(GetFintechFailed(error));
  }
}
function* createFintech(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FintechApi.create, payload);
    yield put(AddFintechSuccess(result.data));
  } catch (error) {
    yield put(AddFintechFailed(error));
  }
}
function* FindFintech(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FintechApi.findOne, payload);
    yield put(FindFintechSuccess(result));
  } catch (error) {
    yield put(FindFintechFailed(error));
  }
}
function* EditFintech(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FintechApi.update, payload);
    yield put(EditFintechSuccess(result.data));
  } catch (error) {
    yield put(EditFintechFailed(error));
  }
}

function* DeleteFintech(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FintechApi.deleted, payload);
    yield put(DelFintechSuccess(result.data));
  } catch (error) {
    yield put(DelFintechFailed(error));
  }
}
function* SearchFintech(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FintechApi.search, payload);
    yield put(SearchFintechSuccess(result));
  } catch (error) {
    yield put(SearchFintechFailed(error));
  }
}

export {
  handleFintech,
  createFintech,
  FindFintech,
  EditFintech,
  DeleteFintech,
  SearchFintech,
};

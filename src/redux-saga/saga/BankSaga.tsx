import { call, put } from "redux-saga/effects";
import {
  GetBankSuccess,
  GetBankFailed,
  AddBankSuccess,
  AddBankFailed,
  FindBankSuccess,
  FindBankFailed,
  EditBankSuccess,
  EditBankFailed,
  DelBankSuccess,
  DelBankFailed,
} from "../action/BankAction";
import BankApi from "@/pages/api/Bank";

function* handleBank(): any {
  try {
    const result = yield call(BankApi.read);
    yield put(GetBankSuccess(result));
  } catch (error) {
    yield put(GetBankFailed(error));
  }
}
function* createBank(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(BankApi.create, payload);
    yield put(AddBankSuccess(result.data));
  } catch (error) {
    yield put(AddBankFailed(error));
  }
}
function* FindBank(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(BankApi.findOne, payload);
    yield put(FindBankSuccess(result));
  } catch (error) {
    yield put(FindBankFailed(error));
  }
}
function* EditBank(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(BankApi.update, payload);
    yield put(EditBankSuccess(result.data));
  } catch (error) {
    yield put(EditBankFailed(error));
  }
}

function* DeleteBank(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(BankApi.deleted, payload);
    yield put(DelBankSuccess(result.data));
  } catch (error) {
    yield put(DelBankFailed(error));
  }
}

export { handleBank, createBank, FindBank, EditBank, DeleteBank };

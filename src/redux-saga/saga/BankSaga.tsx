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
  SearchBankSuccess,
  SearchBankFailed,
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
function* SearchBank(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(BankApi.search, payload);
    yield put(SearchBankSuccess(result));
  } catch (error) {
    yield put(SearchBankFailed(error));
  }
}
export { handleBank, createBank, FindBank, EditBank, DeleteBank, SearchBank };

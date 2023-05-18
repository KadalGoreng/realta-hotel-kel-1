import { call, put } from "redux-saga/effects";
import {
  GetAccountSuccess,
  GetAccountFailed,
  AddAccountSuccess,
  AddAccountFailed,
  FindAccountSuccess,
  FindAccountFailed,
  EditAccountSuccess,
  EditAccountFailed,
  DelAccountSuccess,
  DelAccountFailed,
} from "../../action/payment/AccountAction";
import AccountApi from "@/pages/api/UserAccount";

function* handleAccount(): any {
  try {
    const result = yield call(AccountApi.read);
    yield put(GetAccountSuccess(result));
  } catch (error) {
    yield put(GetAccountFailed(error));
  }
}
function* createAccount(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(AccountApi.create, payload);
    yield put(AddAccountSuccess(result.data));
  } catch (error) {
    yield put(AddAccountFailed(error));
  }
}
function* FindAccount(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(AccountApi.findOne, payload);
    yield put(FindAccountSuccess(result));
  } catch (error) {
    yield put(FindAccountFailed(error));
  }
}
function* EditAccount(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(AccountApi.update, payload);
    yield put(EditAccountSuccess(result.data));
  } catch (error) {
    yield put(EditAccountFailed(error));
  }
}

function* DeleteAccount(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(AccountApi.deleted, payload);
    yield put(DelAccountSuccess(result.data));
  } catch (error) {
    yield put(DelAccountFailed(error));
  }
}

export {
  handleAccount,
  createAccount,
  FindAccount,
  EditAccount,
  DeleteAccount,
};

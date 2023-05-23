import { call, put } from 'redux-saga/effects';
import UserPassword from '../../../api/users/user-password';
import { GetUserPasswordSuccess, GetUserPasswordFailed, 
  AddUserPasswordSuccess, AddUserPasswordFailed, 
  FindUserPasswordSuccess, FindUserPasswordFailed, 
  EditUserPasswordSuccess, EditUserPasswordFailed, 
  DelUserPasswordSuccess, DelUserPasswordFailed } 
  from '../../../redux/action/users/user-passwordAction';

function* handleGetUserPassword(): any {
  try {
    const result = yield call(UserPassword.GetData);
    yield put(GetUserPasswordSuccess(result));
  } catch (error) {
    yield put(GetUserPasswordFailed(error));
  }
}

function* handleCreateUserPassword(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserPassword.Create, payload);
    yield put(AddUserPasswordSuccess(result.data));
  } catch (error) {
    yield put(AddUserPasswordFailed(error));
  }
}

function* handleFindUserPassword(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserPassword.findOne, payload);
    yield put(FindUserPasswordSuccess(result));
  } catch (error) {
    yield put(FindUserPasswordFailed(error));
  }
}

function* handleEditUserPassword(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserPassword.Update, payload);
    yield put(EditUserPasswordSuccess(result.data));
  } catch (error) {
    yield put(EditUserPasswordFailed(error));
  }
}

function* handleDelUserPassword(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserPassword.Deleted, payload);
    yield put(DelUserPasswordSuccess(result.data));
  } catch (error) {
    yield put(DelUserPasswordFailed(error));
  }
}

export { handleGetUserPassword, handleCreateUserPassword, 
    handleFindUserPassword, handleEditUserPassword, handleDelUserPassword };
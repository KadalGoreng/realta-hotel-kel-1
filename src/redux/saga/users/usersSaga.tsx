import { call, put } from 'redux-saga/effects';
import Users from '../../../api/users/users';
import {
  GetUsersSuccess,
  GetUsersFailed,
  AddUsersSuccess,
  AddUsersFailed,
  FindUsersSuccess,
  FindUsersFailed,
  EditUsersSuccess,
  EditUsersFailed,
  DelUsersSuccess,
  DelUsersFailed
} from '../../../redux/action/users/usersAction';

function* handleGetUsers(): any {
  try {
    const result = yield call(Users.GetData);
    yield put(GetUsersSuccess(result));
  } catch (error) {
    yield put(GetUsersFailed(error));
  }
}

function* handleCreateUsers(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Users.Create, payload);
    yield put(AddUsersSuccess(result.data));
  } catch (error) {
    yield put(AddUsersFailed(error));
  }
}

function* handleFindUsers(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Users.findOne, payload);
    yield put(FindUsersSuccess(result));
  } catch (error) {
    yield put(FindUsersFailed(error));
  }
}

function* handleEditUsers(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Users.Update, payload);
    yield put(EditUsersSuccess(result.data));
  } catch (error) {
    yield put(EditUsersFailed(error));
  }
}

function* handleDelUsers(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Users.Deleted, payload);
    yield put(DelUsersSuccess(result.data));
  } catch (error) {
    yield put(DelUsersFailed(error));
  }
}

export { handleGetUsers, handleCreateUsers, handleFindUsers, handleEditUsers, handleDelUsers };
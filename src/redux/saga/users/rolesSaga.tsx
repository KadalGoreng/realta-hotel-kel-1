import { call, put } from 'redux-saga/effects';
import Roles from '../../../api/users/roles';
import {
  GetRolesSuccess, GetRolesFailed,
  AddRolesSuccess, AddRolesFailed,
  FindRolesSuccess, FindRolesFailed,
  EditRolesSuccess, EditRolesFailed,
  DelRolesSuccess, DelRolesFailed
} from '../../../redux/action/users/rolesAction';

function* handleGetRoles(): any {
  try {
    const result = yield call(Roles.GetData);
    yield put(GetRolesSuccess(result));
  } catch (error) {
    yield put(GetRolesFailed(error));
  }
}

function* handleCreateRoles(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Roles.Create, payload);
    yield put(AddRolesSuccess(result.data));
  } catch (error) {
    yield put(AddRolesFailed(error));
  }
}

function* handleFindRoles(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Roles.findOne, payload);
    yield put(FindRolesSuccess(result));
  } catch (error) {
    yield put(FindRolesFailed(error));
  }
}

function* handleEditRoles(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Roles.Update, payload);
    yield put(EditRolesSuccess(result.data));
  } catch (error) {
    yield put(EditRolesFailed(error));
  }
}

function* handleDelRoles(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Roles.Deleted, payload);
    yield put(DelRolesSuccess(result.data));
  } catch (error) {
    yield put(DelRolesFailed(error));
  }
}

export {
  handleGetRoles, handleCreateRoles,
  handleFindRoles, handleEditRoles, handleDelRoles
};
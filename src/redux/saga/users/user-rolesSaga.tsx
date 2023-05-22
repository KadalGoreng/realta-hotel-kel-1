import { call, put } from 'redux-saga/effects';
import UserRoles from '../../../api/users/user-roles';
import { GetUserRolesSuccess, GetUserRolesFailed, 
  AddUserRolesSuccess, AddUserRolesFailed, 
  FindUserRolesSuccess, FindUserRolesFailed, 
  EditUserRolesSuccess, EditUserRolesFailed, 
  DelUserRolesSuccess, DelUserRolesFailed } 
  from '../../../redux/action/users/user-rolesAction';

function* handleGetUserRoles(): any {
  try {
    const result = yield call(UserRoles.GetData);
    yield put(GetUserRolesSuccess(result));
  } catch (error) {
    yield put(GetUserRolesFailed(error));
  }
}

function* handleCreateUserRoles(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserRoles.Create, payload);
    yield put(AddUserRolesSuccess(result.data));
  } catch (error) {
    yield put(AddUserRolesFailed(error));
  }
}

function* handleFindUserRoles(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserRoles.findOne, payload);
    yield put(FindUserRolesSuccess(result));
  } catch (error) {
    yield put(FindUserRolesFailed(error));
  }
}

function* handleEditUserRoles(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserRoles.Update, payload);
    yield put(EditUserRolesSuccess(result.data));
  } catch (error) {
    yield put(EditUserRolesFailed(error));
  }
}

function* handleDelUserRoles(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserRoles.Deleted, payload);
    yield put(DelUserRolesSuccess(result.data));
  } catch (error) {
    yield put(DelUserRolesFailed(error));
  }
}

export { handleGetUserRoles, handleCreateUserRoles, 
    handleFindUserRoles, handleEditUserRoles, handleDelUserRoles };
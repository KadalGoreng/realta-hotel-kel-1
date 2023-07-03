import { call, put } from 'redux-saga/effects';
import UserProfiles from '../../../api/users/user-profiles';
import {
  GetUserProfilesSuccess, GetUserProfilesFailed,
  AddUserProfilesSuccess, AddUserProfilesFailed,
  FindUserProfilesSuccess, FindUserProfilesFailed,
  EditUserProfilesSuccess, EditUserProfilesFailed,
  DelUserProfilesSuccess, DelUserProfilesFailed
}
  from '../../../redux/action/users/user-profilesAction';

function* handleGetUserProfiles(): any {
  try {
    const result = yield call(UserProfiles.GetData);
    yield put(GetUserProfilesSuccess(result));
  } catch (error) {
    yield put(GetUserProfilesFailed(error));
  }
}

function* handleCreateUserProfiles(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserProfiles.Create, payload);
    yield put(AddUserProfilesSuccess(result.data));
  } catch (error) {
    yield put(AddUserProfilesFailed(error));
  }
}

function* handleFindUserProfiles(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserProfiles.findOne, payload);
    yield put(FindUserProfilesSuccess(result));
  } catch (error) {
    yield put(FindUserProfilesFailed(error));
  }
}

function* handleEditUserProfiles(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserProfiles.Update, payload);
    yield put(EditUserProfilesSuccess(result.data));
  } catch (error) {
    yield put(EditUserProfilesFailed(error));
  }
}

function* handleDelUserProfiles(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserProfiles.Deleted, payload);
    yield put(DelUserProfilesSuccess(result.data));
  } catch (error) {
    yield put(DelUserProfilesFailed(error));
  }
}

export {
  handleGetUserProfiles, handleCreateUserProfiles,
  handleFindUserProfiles, handleEditUserProfiles, handleDelUserProfiles
};
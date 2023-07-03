import { call, put } from 'redux-saga/effects';
import UserMembers from '../../../api/users/user-members';
import {
  GetUserMembersSuccess, GetUserMembersFailed,
  AddUserMembersSuccess, AddUserMembersFailed,
  FindUserMembersSuccess, FindUserMembersFailed,
  EditUserMembersSuccess, EditUserMembersFailed,
  DelUserMembersSuccess, DelUserMembersFailed
}
  from '../../../redux/action/users/user-membersAction';

function* handleGetUserMembers(): any {
  try {
    const result = yield call(UserMembers.GetData);
    yield put(GetUserMembersSuccess(result));
  } catch (error) {
    yield put(GetUserMembersFailed(error));
  }
}

function* handleCreateUserMembers(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserMembers.Create, payload);
    yield put(AddUserMembersSuccess(result.data));
  } catch (error) {
    yield put(AddUserMembersFailed(error));
  }
}

function* handleFindUserMembers(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserMembers.findOne, payload);
    yield put(FindUserMembersSuccess(result));
  } catch (error) {
    yield put(FindUserMembersFailed(error));
  }
}

function* handleEditUserMembers(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserMembers.Update, payload);
    yield put(EditUserMembersSuccess(result.data));
  } catch (error) {
    yield put(EditUserMembersFailed(error));
  }
}

function* handleDelUserMembers(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserMembers.Deleted, payload);
    yield put(DelUserMembersSuccess(result.data));
  } catch (error) {
    yield put(DelUserMembersFailed(error));
  }
}

export {
  handleGetUserMembers, handleCreateUserMembers,
  handleFindUserMembers, handleEditUserMembers, handleDelUserMembers
};
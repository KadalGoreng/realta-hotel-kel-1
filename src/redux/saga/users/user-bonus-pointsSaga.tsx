import { call, put } from 'redux-saga/effects';
import UserBonusPoints from '../../../api/users/user-bonus-points';
import { GetUserBonusPointsSuccess, GetUserBonusPointsFailed, 
  AddUserBonusPointsSuccess, AddUserBonusPointsFailed, 
  FindUserBonusPointsSuccess, FindUserBonusPointsFailed, 
  EditUserBonusPointsSuccess, EditUserBonusPointsFailed, 
  DelUserBonusPointsSuccess, DelUserBonusPointsFailed } from '../../../redux/action/users/user-bonus-pointsAction';

function* handleGetUserBonusPoints(): any {
  try {
    const result = yield call(UserBonusPoints.GetData);
    yield put(GetUserBonusPointsSuccess(result));
  } catch (error) {
    yield put(GetUserBonusPointsFailed(error));
  }
}

function* handleCreateUserBonusPoints(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserBonusPoints.Create, payload);
    yield put(AddUserBonusPointsSuccess(result.data));
  } catch (error) {
    yield put(AddUserBonusPointsFailed(error));
  }
}

function* handleFindUserBonusPoints(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserBonusPoints.findOne, payload);
    yield put(FindUserBonusPointsSuccess(result));
  } catch (error) {
    yield put(FindUserBonusPointsFailed(error));
  }
}

function* handleEditUserBonusPoints(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserBonusPoints.Update, payload);
    yield put(EditUserBonusPointsSuccess(result.data));
  } catch (error) {
    yield put(EditUserBonusPointsFailed(error));
  }
}

function* handleDelUserBonusPoints(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(UserBonusPoints.Deleted, payload);
    yield put(DelUserBonusPointsSuccess(result.data));
  } catch (error) {
    yield put(DelUserBonusPointsFailed(error));
  }
}

export { handleGetUserBonusPoints, handleCreateUserBonusPoints, 
    handleFindUserBonusPoints, handleEditUserBonusPoints, handleDelUserBonusPoints };
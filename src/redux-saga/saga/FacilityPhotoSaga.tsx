import { call, put } from "redux-saga/effects";
import FacilityPhoto from "@/api/FacilityPhoto";
import {
  GetFacilityPhotoSuccess,
  GetFacilityPhotoFailed,
  AddFacilityPhotoSuccess,
  AddFacilityPhotoFailed,
  EditFacilityPhotoSuccess,
  EditFacilityPhotoFailed,
  DelFacilityPhotoSuccess,
  DelFacilityPhotoFailed,
} from "../action/facilityPhotoAction";

function* handleFacilityPhoto(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FacilityPhoto.list, payload);
    yield put(GetFacilityPhotoSuccess(result));
  } catch (error) {
    yield put(GetFacilityPhotoFailed(error));
  }
}

function* handleAddFacilityPhoto(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FacilityPhoto.Upload, payload);
    yield put(AddFacilityPhotoSuccess(result.data));
  } catch (error) {
    yield put(AddFacilityPhotoFailed(error));
  }
}

function* editFacilityPhoto(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FacilityPhoto.Update, payload);
    yield put(EditFacilityPhotoSuccess(result.data));
  } catch (error) {
    yield put(EditFacilityPhotoFailed(error));
  }
}

function* deleteFacilityPhoto(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(FacilityPhoto.Delete, payload);
    yield put(DelFacilityPhotoSuccess(result.data));
  } catch (error) {
    yield put(DelFacilityPhotoFailed(error));
  }
}

export { handleFacilityPhoto, handleAddFacilityPhoto, editFacilityPhoto, deleteFacilityPhoto };

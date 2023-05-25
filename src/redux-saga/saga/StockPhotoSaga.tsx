// import StockPhotoApi from "@/api/StockPhotoApi";
import StockPhotoApi from "../../api/StockPhotoApi";
import { call, put } from "redux-saga/effects";
import {
  AddStockPhotoFailed,
  AddStockPhotoSuccess,
  DelStockPhotoFailed,
  DelStockPhotoSuccess,
  EditStockPhotoFailed,
  EditStockPhotoSuccess,
  FindStockPhotoFailed,
  FindStockPhotoSuccess,
  GetStockPhotoFailed,
  GetStockPhotoSuccess,
} from "../action/stockPhotoAction";

function* handleStockPhoto(): any {
  try {
    const result = yield call(StockPhotoApi.GetData);
    console.log(result);
    yield put(GetStockPhotoSuccess(result));
  } catch (error) {
    yield put(GetStockPhotoFailed(error));
  }
}

function* createStockPhoto(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StockPhotoApi.Create, payload);
    yield put(AddStockPhotoSuccess(result.data));
  } catch (error) {
    yield put(AddStockPhotoFailed(error));
  }
}
function* findStockPhoto(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StockPhotoApi.FindData, payload);
    yield put(FindStockPhotoSuccess(result));
  } catch (error) {
    yield put(FindStockPhotoFailed(error));
  }
}
function* editStockPhoto(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StockPhotoApi.Update, payload);
    yield put(EditStockPhotoSuccess(result.data));
  } catch (error) {
    yield put(EditStockPhotoFailed(error));
  }
}

function* deleteStockPhoto(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StockPhotoApi.Deleted, payload);
    yield put(DelStockPhotoSuccess(result.data));
  } catch (error) {
    yield put(DelStockPhotoFailed(error));
  }
}

export { handleStockPhoto, createStockPhoto, findStockPhoto, editStockPhoto, deleteStockPhoto };

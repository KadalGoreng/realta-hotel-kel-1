import { call, put } from "redux-saga/effects";
import StockDetailApi from "@/api/StockDetailApi";

import {
  AddStockDetailFailed,
  AddStockDetailSuccess,
  DelStockDetailFailed,
  DelStockDetailSuccess,
  EditStockDetailFailed,
  EditStockDetailSuccess,
  FindStockDetailFailed,
  FindStockDetailSuccess,
  GetStockDetailByStockIdFailed,
  GetStockDetailByStockIdRequest,
  GetStockDetailFailed,
  GetStockDetailSuccess,
} from "../action/stockDetailAction";

function* handleStockDetail(): any {
  try {
    const result = yield call(StockDetailApi.GetData);
    console.log(result);
    yield put(GetStockDetailSuccess(result));
  } catch (error) {
    yield put(GetStockDetailFailed(error));
  }
}

function* StockDetailByStockId(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StockDetailApi.FindDataByStock, payload);
    console.log(result);
    yield put(GetStockDetailByStockIdRequest(result));
  } catch (error) {
    yield put(GetStockDetailByStockIdFailed(error));
  }
}

function* createStockDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StockDetailApi.Create, payload);
    yield put(AddStockDetailSuccess(result.data));
  } catch (error) {
    yield put(AddStockDetailFailed(error));
  }
}
function* findStockDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StockDetailApi.FindData, payload);
    yield put(FindStockDetailSuccess(result));
  } catch (error) {
    yield put(FindStockDetailFailed(error));
  }
}
function* editStockDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StockDetailApi.Update, payload);
    yield put(EditStockDetailSuccess(result.data));
  } catch (error) {
    yield put(EditStockDetailFailed(error));
  }
}

function* deleteStockDetail(action: any): any {
  const { id } = action;
  const { stodId } = action;
  try {
    const result = yield call(StockDetailApi.Deleted, id, stodId);
    yield put(DelStockDetailSuccess(result.data));
  } catch (error) {
    yield put(DelStockDetailFailed(error));
  }
}

export { handleStockDetail, createStockDetail, findStockDetail, editStockDetail, deleteStockDetail, StockDetailByStockId };

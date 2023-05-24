import { call, put } from "redux-saga/effects";
import StocksApi from "@/api/StocksApi";
import { AddStockFailed, AddStockSuccess, DelStockFailed, DelStockSuccess, EditStockFailed, EditStockSuccess, FindStockFailed, FindStockSuccess, GetStockFailed, GetStockSuccess } from "../action/stocksAction";

// import { AddVendorFailed, AddVendorSuccess, DelVendorFailed, DelVendorSuccess, EditVendorFailed, EditVendorSuccess, FindVendorFailed, FindVendorSuccess, GetVendorFailed, GetVendorSuccess } from "../action/vendorAction";

function* handleStock(): any {
  try {
    const result = yield call(StocksApi.GetData);
    console.log(result);
    yield put(GetStockSuccess(result));
  } catch (error) {
    yield put(GetStockFailed(error));
  }
}

function* createStock(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StocksApi.Create, payload);
    yield put(AddStockSuccess(result.data));
  } catch (error) {
    yield put(AddStockFailed(error));
  }
}
function* findStock(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StocksApi.FindData, payload);
    yield put(FindStockSuccess(result));
  } catch (error) {
    yield put(FindStockFailed(error));
  }
}
function* editStock(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StocksApi.Update, payload);
    yield put(EditStockSuccess(result.data));
  } catch (error) {
    yield put(EditStockFailed(error));
  }
}

function* deleteStock(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StocksApi.Deleted, payload);
    yield put(DelStockSuccess(result.data));
  } catch (error) {
    yield put(DelStockFailed(error));
  }
}

export { handleStock, createStock, findStock, editStock, deleteStock };

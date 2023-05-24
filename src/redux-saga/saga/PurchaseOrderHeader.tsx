import { call, put } from "redux-saga/effects";
import PurchaseOrderHeaderApi from "@/api/PurchaseOrderHeaderApi";
import {
  AddPurchaseOrderHeaderFailed,
  AddPurchaseOrderHeaderSuccess,
  DelPurchaseOrderHeaderFailed,
  DelPurchaseOrderHeaderSuccess,
  EditPurchaseOrderHeaderFailed,
  EditPurchaseOrderHeaderSuccess,
  FindPurchaseOrderHeaderFailed,
  FindPurchaseOrderHeaderSuccess,
  GetPurchaseOrderHeaderFailed,
  GetPurchaseOrderHeaderSuccess,
} from "../action/purchaseOrderHeaderAction";

function* handlePurchaseOrderHeader(): any {
  try {
    const result = yield call(PurchaseOrderHeaderApi.GetData);
    console.log(result);
    yield put(GetPurchaseOrderHeaderSuccess(result));
  } catch (error) {
    yield put(GetPurchaseOrderHeaderFailed(error));
  }
}

function* createPurchaseOrderHeader(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PurchaseOrderHeaderApi.Create, payload);
    yield put(AddPurchaseOrderHeaderSuccess(result.data));
  } catch (error) {
    yield put(AddPurchaseOrderHeaderFailed(error));
  }
}

function* findPurchaseOrderHeader(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PurchaseOrderHeaderApi.FindData, payload);
    yield put(FindPurchaseOrderHeaderSuccess(result));
  } catch (error) {
    yield put(FindPurchaseOrderHeaderFailed(error));
  }
}
function* editPurchaseOrderHeader(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PurchaseOrderHeaderApi.Update, payload);
    yield put(EditPurchaseOrderHeaderSuccess(result.data));
  } catch (error) {
    yield put(EditPurchaseOrderHeaderFailed(error));
  }
}

function* deletePurchaseOrderHeader(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PurchaseOrderHeaderApi.Deleted, payload);
    yield put(DelPurchaseOrderHeaderSuccess(result.data));
  } catch (error) {
    yield put(DelPurchaseOrderHeaderFailed(error));
  }
}

export { handlePurchaseOrderHeader, createPurchaseOrderHeader, findPurchaseOrderHeader, editPurchaseOrderHeader, deletePurchaseOrderHeader };

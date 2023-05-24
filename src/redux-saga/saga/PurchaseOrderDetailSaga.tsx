import { call, put } from "redux-saga/effects";
import PurchaseOrderDetailApi from "@/api/PurchaseOrderDetailApi";
import { AddPurchaseOrderDetailFailed, AddPurchaseOrderDetailSuccess, DelPurchaseOrderDetailFailed, DelPurchaseOrderDetailSuccess, EditPurchaseOrderDetailFailed, EditPurchaseOrderDetailSuccess } from "../action/purchaseOrderDetailAction";

function* createPurchaseOrderDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PurchaseOrderDetailApi.Create, payload);
    yield put(AddPurchaseOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(AddPurchaseOrderDetailFailed(error));
  }
}

function* editPurchaseOrderDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(PurchaseOrderDetailApi.Update, payload);
    yield put(EditPurchaseOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(EditPurchaseOrderDetailFailed(error));
  }
}

function* deletePurchaseOrderDetail(action: any): any {
  const { id } = action;
  const { podeId } = action;
  try {
    const result = yield call(PurchaseOrderDetailApi.Deleted, id, podeId);
    yield put(DelPurchaseOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(DelPurchaseOrderDetailFailed(error));
  }
}

export { createPurchaseOrderDetail, editPurchaseOrderDetail, deletePurchaseOrderDetail };

import { call, put } from "redux-saga/effects";
import VendorProductApi from "@/api/VendorProductApi";
import {
  AddVendorProductFailed,
  AddVendorProductSuccess,
  DelVendorProductFailed,
  DelVendorProductSuccess,
  EditVendorProductFailed,
  EditVendorProductSuccess,
  FindVendorProductFailed,
  FindVendorProductSuccess,
  GetVendorProductFailed,
  GetVendorProductSuccess,
} from "../action/vendorProductAction";
// import { AddVendorFailed, AddVendorSuccess, DelVendorFailed, DelVendorSuccess, EditVendorFailed, EditVendorSuccess, FindVendorFailed, FindVendorSuccess, GetVendorFailed, GetVendorProductSuccess, GetVendorSuccess } from "../action/vendorProductAction";

function* handleVendorProduct(): any {
  try {
    const result = yield call(VendorProductApi.GetData);
    console.log(result);
    yield put(GetVendorProductSuccess(result));
  } catch (error) {
    yield put(GetVendorProductFailed(error));
  }
}

function* createVendorProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(VendorProductApi.Create, payload);
    yield put(AddVendorProductSuccess(result.data));
  } catch (error) {
    yield put(AddVendorProductFailed(error));
  }
}
function* findVendorProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(VendorProductApi.FindData, payload);
    yield put(FindVendorProductSuccess(result));
  } catch (error) {
    yield put(FindVendorProductFailed(error));
  }
}
function* editVendorProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(VendorProductApi.Update, payload);
    yield put(EditVendorProductSuccess(result.data));
  } catch (error) {
    yield put(EditVendorProductFailed(error));
  }
}

function* deleteVendorProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(VendorProductApi.Deleted, payload);
    yield put(DelVendorProductSuccess(result.data));
  } catch (error) {
    yield put(DelVendorProductFailed(error));
  }
}

export { handleVendorProduct, createVendorProduct, findVendorProduct, editVendorProduct, deleteVendorProduct };

import { call, put } from "redux-saga/effects";
import VendorApi from "@/api/VendorApi";
import { AddVendorFailed, AddVendorSuccess, DelVendorFailed, DelVendorSuccess, EditVendorFailed, EditVendorSuccess, FindVendorFailed, FindVendorSuccess, GetVendorFailed, GetVendorSuccess } from "../action/vendorAction";

function* handleVendor(): any {
  try {
    const result = yield call(VendorApi.GetData);
    console.log(result);
    yield put(GetVendorSuccess(result));
  } catch (error) {
    yield put(GetVendorFailed(error));
  }
}

function* createVendor(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(VendorApi.Create, payload);
    yield put(AddVendorSuccess(result.data));
  } catch (error) {
    yield put(AddVendorFailed(error));
  }
}
function* findVendor(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(VendorApi.FindData, payload);
    yield put(FindVendorSuccess(result));
  } catch (error) {
    yield put(FindVendorFailed(error));
  }
}
function* editVendor(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(VendorApi.Update, payload);
    yield put(EditVendorSuccess(result.data));
  } catch (error) {
    yield put(EditVendorFailed(error));
  }
}

function* deleteVendor(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(VendorApi.Deleted, payload);
    yield put(DelVendorSuccess(result.data));
  } catch (error) {
    yield put(DelVendorFailed(error));
  }
}

export { handleVendor, createVendor, findVendor, editVendor, deleteVendor };

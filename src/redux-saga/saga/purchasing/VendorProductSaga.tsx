import { call, put } from "redux-saga/effects";
import VendorProductApi from "@/api/purchasing/VendorProductApi";
import {
  AddVendorProductFailed,
  AddVendorProductSuccess,
  DelVendorProductFailed,
  DelVendorProductSuccess,
  EditVendorProductFailed,
  EditVendorProductSuccess,
  FindVendorProductFailed,
  FindVendorProductSuccess,
  GetVendorProductByVendorIdFailed,
  GetVendorProductByVendorIdSuccess,
  GetVendorProductFailed,
  GetVendorProductSuccess,
} from "../../action/purchasing/vendorProductAction";

function* handleVendorProduct(action: any): any {
  const { name, price } = action;
  try {
    const result = yield call(VendorProductApi.GetData, name, price);
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

function* VendorProductByVendorId(action: any): any {
  const { id, page } = action;
  try {
    const result = yield call(VendorProductApi.FindDataByVendorId, id, page);
    console.log(result);
    yield put(GetVendorProductByVendorIdSuccess(result));
  } catch (error) {
    yield put(GetVendorProductByVendorIdFailed(error));
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

export { handleVendorProduct, createVendorProduct, findVendorProduct, editVendorProduct, deleteVendorProduct, VendorProductByVendorId };

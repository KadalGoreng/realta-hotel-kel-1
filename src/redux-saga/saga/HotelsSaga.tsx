import { call, put } from "redux-saga/effects";
import Hotels from "@/api/Hotels";
import { GetHotelsSuccess, GetHotelsFailed, AddHotelsSuccess, AddHotelsFailed, FindHotelsSuccess, FindHotelsFailed, EditHotelsSuccess, EditHotelsFailed, DelHotelsSuccess, DelHotelsFailed } from "../action/hotelsAction";

function* handleGetHotels(): any {
  try {
    const result = yield call(Hotels.GetData);
    yield put(GetHotelsSuccess(result));
  } catch (error) {
    yield put(GetHotelsFailed(error));
  }
}

function* handleAddHotels(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Hotels.Create, payload);
    yield put(AddHotelsSuccess(result.data));
  } catch (error) {
    yield put(AddHotelsFailed(error));
  }
}

function* handleFindHotels(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Hotels.findOne, payload);
    yield put(FindHotelsSuccess(result));
  } catch (error) {
    yield put(FindHotelsFailed(error));
  }
}
function* handleEditHotels(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Hotels.Update, payload);
    yield put(EditHotelsSuccess(result.data));
  } catch (error) {
    yield put(EditHotelsFailed(error));
  }
}

function* handleDelHotels(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Hotels.deleted, payload);
    yield put(DelHotelsSuccess(result.data));
  } catch (error) {
    yield put(DelHotelsFailed(error));
  }
}

export { handleGetHotels, handleAddHotels, handleFindHotels, handleEditHotels, handleDelHotels };

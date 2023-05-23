import { call, put } from "redux-saga/effects";
import BookingHotelApi from "@/api/BookingHotel";
import {
  CreateBoexFailed,
  CreateBoexSuccess,
  GetBookingHotelFailed,
  GetBookingHotelSuccess,
  GetCouponFailed,
  GetCouponSuccess,
  GetFacilityFailed,
  GetFacilitySuccess,
  GetAddOnItemFailed,
  GetAddOnItemSuccess,
} from "../Actions/BookingHotelAction";

function* handleGetBookingHotel(): any {
  try {
    const result = yield call(BookingHotelApi.getHotel);
    if (result.status === 200) {
      yield put(GetBookingHotelSuccess(result.data));
    }
  } catch (error) {
    yield put(GetBookingHotelFailed(error));
  }
}

function* handleGetFacilityHotel(): any {
  try {
    const result = yield call(BookingHotelApi.getFacility);
    if (result.status === 200) {
      yield put(GetFacilitySuccess(result.data));
    }
  } catch (error) {
    yield put(GetFacilityFailed(error));
  }
}

function* handleGetCoupon(): any {
  try {
    const result = yield call(BookingHotelApi.getCoupon);
    if (result.status === 200) {
      yield put(GetCouponSuccess(result.data));
    }
  } catch (error) {
    yield put(GetCouponFailed(error));
  }
}

function* handleGetAddOnItem(): any {
  try {
    const result = yield call(BookingHotelApi.getAddOnItem);
    // if (result.status === 200) {
    yield put(GetAddOnItemSuccess(result.data));
    // }
  } catch (error) {
    yield put(GetAddOnItemFailed(error));
  }
}

function* handleCreateBoex(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(BookingHotelApi.createBoex, payload);
    yield put(CreateBoexSuccess(result.data));
  } catch (error) {
    yield put(CreateBoexFailed(error));
  }
}

export {
  handleGetBookingHotel,
  handleGetFacilityHotel,
  handleGetCoupon,
  handleGetAddOnItem,
  handleCreateBoex,
};

import { call, put } from "redux-saga/effects";
import BookingHotelApi from "@/api/BookingHotel";
import {
  GetBookingHotelFailed,
  GetBookingHotelSuccess,
  GetCouponFailed,
  GetCouponSuccess,
  GetFacilityFailed,
  GetFacilitySuccess,
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

export { handleGetBookingHotel, handleGetFacilityHotel, handleGetCoupon };

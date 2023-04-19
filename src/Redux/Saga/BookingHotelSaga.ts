import { call, put } from "redux-saga/effects";
import BookingHotelApi from "@/api/BookingHotel";
import {
  GetBookingHotelFailed,
  GetBookingHotelSuccess,
} from "../Actions/BookingHotelAction";

function* handleGetBookingHotel(): any {
  try {
    const result = yield call(BookingHotelApi.getHotel);
    yield put(GetBookingHotelSuccess(result));
  } catch (error) {
    yield put(GetBookingHotelFailed(error));
  }
}

export { handleGetBookingHotel };

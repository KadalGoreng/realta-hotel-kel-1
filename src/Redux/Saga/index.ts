import { takeEvery, all } from "redux-saga/effects";
import * as ActionType from "../Constant/BookingHotelConstant";
import {
  handleGetBookingHotel,
  handleGetCoupon,
  handleGetFacilityHotel,
} from "./BookingHotelSaga";

function* watchAll() {
  yield all([takeEvery(ActionType.GET_BOOKING_REQUEST, handleGetBookingHotel)]);
  yield all([
    takeEvery(ActionType.GET_FACILITY_REQUEST, handleGetFacilityHotel),
  ]);
  yield all([takeEvery(ActionType.GET_COUPON_REQUEST, handleGetCoupon)]);
}

export default watchAll;

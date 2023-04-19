import { takeEvery, all } from "redux-saga/effects";
import * as ActionType from "../Constant/BookingHotelConstant";
import { handleGetBookingHotel } from "./BookingHotelSaga";

function* watchAll() {
  yield all([takeEvery(ActionType.GET_BOOKING_REQUEST, handleGetBookingHotel)]);
}

export default watchAll;

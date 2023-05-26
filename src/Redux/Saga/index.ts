import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeBooking from "../Constant/BookingHotelConstant";
import * as ActionTypeMaster from "../Constant/MasterConstant";
import {
  handleCreateBoex,
  handleGetBookingHotel,
  handleGetCoupon,
  handleGetFacilityHotel,
  handleGetAddOnItem,
  handleGetBookingHistory,
} from "./BookingHotelSaga";
import { GetPolicy, GetRegions } from "./MasterModuleSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeBooking.GET_BOOKING_REQUEST, handleGetBookingHotel),
  ]);
  yield all([
    takeEvery(ActionTypeBooking.GET_FACILITY_REQUEST, handleGetFacilityHotel),
  ]);
  yield all([
    takeEvery(ActionTypeBooking.CREATE_BOEX_REQUEST, handleCreateBoex),
  ]);
  yield all([
    takeEvery(ActionTypeBooking.GET_STOCK_REQUEST, handleGetAddOnItem),
  ]);
  yield all([takeEvery(ActionTypeBooking.GET_COUPON_REQUEST, handleGetCoupon)]);
  yield all([
    takeEvery(
      ActionTypeBooking.GET_BOOKINGHISTORY_REQUEST,
      handleGetBookingHistory
    ),
  ]);
  yield all([takeEvery(ActionTypeMaster.GET_REGIONS_REQUEST, GetRegions)]);
  yield all([takeEvery(ActionTypeMaster.GET_POLICY_REQUEST, GetPolicy)]);
}

export default watchAll;

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
  handleGetCategoryHotel,
  handleGetHotelById,
  handleGetReviewById,
} from "./BookingHotelSaga";
import {
  CreateAddress,
  CreateCountry,
  CreateProvince,
  CreateRegion,
  DeleteAddress,
  DeleteCountry,
  DeleteProvince,
  DeleteRegion,
  GetAddress,
  GetCountries,
  GetPolicy,
  GetProvince,
  GetRegions,
  UpdateAddress,
  UpdateCountry,
  UpdateProvince,
  UpdateRegion,
} from "./MasterModuleSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeBooking.GET_BOOKING_REQUEST, handleGetBookingHotel),
  ]);
  yield all([
    takeEvery(ActionTypeBooking.GET_HOTEL_REQUEST, handleGetHotelById),
  ]);
  yield all([
    takeEvery(ActionTypeBooking.GET_REVIEW_REQUEST, handleGetReviewById),
  ]);
  yield all([
    takeEvery(ActionTypeBooking.GET_FACILITY_REQUEST, handleGetFacilityHotel),
  ]);
  yield all([
    takeEvery(ActionTypeBooking.GET_CAGRO_REQUEST, handleGetCategoryHotel),
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
  yield all([takeEvery(ActionTypeMaster.GET_REGION_REQUEST, GetRegions)]);
  yield all([takeEvery(ActionTypeMaster.CREATE_REGION_REQUEST, CreateRegion)]);
  yield all([takeEvery(ActionTypeMaster.UPDATE_REGION_REQUEST, UpdateRegion)]);
  yield all([takeEvery(ActionTypeMaster.DELETE_REGION_REQUEST, DeleteRegion)]);
  yield all([takeEvery(ActionTypeMaster.GET_COUNTRY_REQUEST, GetCountries)]);
  yield all([
    takeEvery(ActionTypeMaster.CREATE_COUNTRY_REQUEST, CreateCountry),
  ]);
  yield all([
    takeEvery(ActionTypeMaster.UPDATE_COUNTRY_REQUEST, UpdateCountry),
  ]);
  yield all([
    takeEvery(ActionTypeMaster.DELETE_COUNTRY_REQUEST, DeleteCountry),
  ]);
  yield all([takeEvery(ActionTypeMaster.GET_PROVINCE_REQUEST, GetProvince)]);
  yield all([
    takeEvery(ActionTypeMaster.CREATE_PROVINCE_REQUEST, CreateProvince),
  ]);
  yield all([
    takeEvery(ActionTypeMaster.UPDATE_PROVINCE_REQUEST, UpdateProvince),
  ]);
  yield all([
    takeEvery(ActionTypeMaster.DELETE_PROVINCE_REQUEST, DeleteProvince),
  ]);
  yield all([takeEvery(ActionTypeMaster.GET_ADDRESS_REQUEST, GetAddress)]);
  yield all([
    takeEvery(ActionTypeMaster.CREATE_ADDRESS_REQUEST, CreateAddress),
  ]);
  yield all([
    takeEvery(ActionTypeMaster.UPDATE_ADDRESS_REQUEST, UpdateAddress),
  ]);
  yield all([
    takeEvery(ActionTypeMaster.DELETE_ADDRESS_REQUEST, DeleteAddress),
  ]);
  yield all([takeEvery(ActionTypeMaster.GET_POLICY_REQUEST, GetPolicy)]);
}

export default watchAll;

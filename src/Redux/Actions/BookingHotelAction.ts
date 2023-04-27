import * as ActionType from "../Constant/BookingHotelConstant";

export const GetBookingHotelRequest = () => ({
  type: ActionType.GET_BOOKING_REQUEST,
});

export const GetBookingHotelSuccess = (payload: any) => ({
  type: ActionType.GET_BOOKING_SUCCESS,
  payload,
});

export const GetBookingHotelFailed = (payload: any) => ({
  type: ActionType.GET_BOOKING_FAILED,
  payload,
});

export const GetFacilityRequest = () => ({
  type: ActionType.GET_FACILITY_REQUEST,
});

export const GetFacilitySuccess = (payload: any) => ({
  type: ActionType.GET_FACILITY_SUCCESS,
  payload,
});

export const GetFacilityFailed = (payload: any) => ({
  type: ActionType.GET_FACILITY_FAILED,
  payload,
});

export const GetCouponRequest = () => ({
  type: ActionType.GET_COUPON_REQUEST,
});

export const GetCouponSuccess = (payload: any) => ({
  type: ActionType.GET_COUPON_SUCCESS,
  payload,
});

export const GetCouponFailed = (payload: any) => ({
  type: ActionType.GET_COUPON_FAILED,
  payload,
});

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

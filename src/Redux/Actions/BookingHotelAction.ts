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

export const GetHotelByIdRequest = (payload: any) => ({
  type: ActionType.GET_HOTEL_REQUEST,
  payload,
});

export const GetHotelByIdSuccess = (payload: any) => ({
  type: ActionType.GET_HOTEL_SUCCESS,
  payload,
});

export const GetHotelByIdFailed = (payload: any) => ({
  type: ActionType.GET_HOTEL_FAILED,
  payload,
});

export const GetReviewByIdRequest = (payload: any) => ({
  type: ActionType.GET_REVIEW_REQUEST,
  payload,
});

export const GetReviewByIdSuccess = (payload: any) => ({
  type: ActionType.GET_REVIEW_SUCCESS,
  payload,
});

export const GetReviewByIdFailed = (payload: any) => ({
  type: ActionType.GET_REVIEW_FAILED,
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

export const GetCagroRequest = () => ({
  type: ActionType.GET_CAGRO_REQUEST,
});

export const GetCagroSuccess = (payload: any) => ({
  type: ActionType.GET_CAGRO_SUCCESS,
  payload,
});

export const GetCagroFailed = (payload: any) => ({
  type: ActionType.GET_CAGRO_FAILED,
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

export const GetBookingHistoryRequest = () => ({
  type: ActionType.GET_BOOKINGHISTORY_REQUEST,
});

export const GetBookingHistorySuccess = (payload: any) => ({
  type: ActionType.GET_BOOKINGHISTORY_SUCCESS,
  payload,
});

export const GetBookingHistoryFailed = (payload: any) => ({
  type: ActionType.GET_BOOKINGHISTORY_FAILED,
  payload,
});

export const GetAddOnItemRequest = () => ({
  type: ActionType.GET_STOCK_REQUEST,
});

export const GetAddOnItemSuccess = (payload: any) => ({
  type: ActionType.GET_STOCK_SUCCESS,
  payload,
});

export const GetAddOnItemFailed = (payload: any) => ({
  type: ActionType.GET_STOCK_FAILED,
  payload,
});

export const CreateBoexRequest = (payload: any) => ({
  type: ActionType.CREATE_BOEX_REQUEST,
  payload,
});

export const CreateBoexSuccess = (payload: any) => ({
  type: ActionType.CREATE_BOEX_SUCCESS,
  payload,
});

export const CreateBoexFailed = (payload: any) => ({
  type: ActionType.CREATE_BOEX_FAILED,
  payload,
});

export const CreateBoSuccess = (payload: any) => ({
  type: ActionType.CREATE_BOOKINGORDER_SUCCESS,
  payload,
});
